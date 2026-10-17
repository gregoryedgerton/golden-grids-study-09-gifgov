import type React from "react";
import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick, type Viewport } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { Fact as FactBox } from "../lib/boxes";
import { Band } from "./Band";
import type { Fact } from "../content";
import { Imprint, type IconName } from "../icons";

/**
 * The bands. IRS.gov's modules are rows of equal cards (popular topics,
 * payment methods, news) and columns of equal headings (an account's
 * features); here each becomes one grid, the first card in the hero
 * square and the rest in descending squares, with the heading set to fit.
 * Orientation is a desktop and a mobile pair per band, by parity; below
 * desktop a five- or six-square run is dealt into two grids.
 */
type O = [PlacementValue, boolean];
const orient = (v: Viewport, desktop: O, mobile: O) => pick<O>(v, { mobile, tablet: desktop, desktop });

function Grids({ boxes, placement, cw, split }: { boxes: React.ReactNode[]; placement: PlacementValue; cw: boolean; split: boolean }) {
  if (!split || boxes.length < 5) return <GoldenGrid from={1} to={boxes.length} placement={placement} clockwise={cw}>{boxes}</GoldenGrid>;
  const first = 3, rest = boxes.length - first;
  return (
    <div className="stack">
      <GoldenGrid from={1} to={first} placement="top" clockwise={cw}>{boxes.slice(0, first)}</GoldenGrid>
      <GoldenGrid from={1} to={rest} placement={rest % 2 ? "bottom" : "right"} clockwise={!cw}>{boxes.slice(first)}</GoldenGrid>
    </div>
  );
}
const noteFor = (v: Viewport, n: number, placement: PlacementValue, cw: boolean) => v !== "desktop" && n >= 5 ? `two grids: from=1 to=3 · placement="top" / from=1 to=${n - 3}` : `from=1 to=${n} · placement="${placement}" · clockwise=${cw}`;

/** A fact in a square: label, fitted line, body; More where there is a longer passage; a link where the reference has one. */
export function FactCard({ fact, x, slotKey, tone, big }: { fact: Fact; x?: ReturnType<typeof useExpandGroup>; slotKey?: string; tone?: string; big?: boolean }) {
  return (
    <FactBox
      imprint={fact.icon ? <Imprint name={fact.icon} /> : undefined}
      label={fact.label}
      fitClass={fact.fitClass ?? (big ? "fit--head" : "fit--title")}
      max={120}
      tone={tone}
      body={fact.body ? <><p className="box__body--short">{fact.body}</p><p className="box__body--long">{fact.body}{fact.long ? ` ${fact.long}` : ""}</p></> : undefined}
      link={fact.href ? { href: fact.href, label: fact.cta ?? "Read more", aria: `${fact.cta ?? "Read more"}: ${fact.line.replace(/\n|-\n/g, " ")}` } : undefined}
      expand={fact.long && x && slotKey ? { group: x, slotKey, title: fact.line.replace(/-\n/g, "").replace(/\n/g, " "), full: <div className="cell__body"><p>{fact.body} {fact.long}</p></div> } : undefined}
    >
      {fact.line}
    </FactBox>
  );
}

/** A generic band of facts: the first in the hero square. */
export function FactsBand({ id, kicker, title, lesson, facts, desktop, mobile, aside }: {
  id: string; kicker?: string; title: string; lesson?: string; facts: Fact[]; desktop: O; mobile: O; aside?: { href: string; label: string };
}) {
  const v = useViewport();
  const x = useExpandGroup();
  const [placement, cw] = orient(v, desktop, mobile);
  return (
    <Band id={id} kicker={kicker} title={title} lesson={lesson} aside={aside} note={noteFor(v, facts.length, placement, cw)}>
      <Grids placement={placement} cw={cw} split={v !== "desktop"} boxes={facts.map((f, i) => {
        const key = `${id}-${i}`;
        return <GoldenBox key={key} {...x.boxProps(key)}><FactCard fact={f} x={x} slotKey={key} big={i === 0} /></GoldenBox>;
      })} />
    </Band>
  );
}

/** Home: the account hero — the headline in the hero square, the four things an account does around it. Its foot links to the study's account page, by the page's name. */
export function HeroBand({ title, label, body, page, features }: { title: string; label: string; body: string; page: string; features: Fact[] }) {
  const v = useViewport();
  const [placement, cw] = orient(v, ["top", true], ["right", true]);
  return (
    <Band id="hero" title={title} quiet note={noteFor(v, 5, placement, cw)}>
      <Grids placement={placement} cw={cw} split={v !== "desktop"} boxes={[
        <GoldenBox key="h">
          <div className="box box--blue">
            <Imprint name="account" />
            <p className="box__label">{label}</p>
            <div className="box__fit"><FitLine>{title}</FitLine></div>
            <div className="box__body"><p>{body}</p></div>
            <div className="box__foot"><a className="more more--link" href="./account.html">{page}</a></div>
          </div>
        </GoldenBox>,
        ...features.map((f, i) => <GoldenBox key={i}><FactCard fact={f} /></GoldenBox>),
      ]} />
    </Band>
  );
}

import { Fit } from "../lib/fit";
function FitLine({ children }: { children: string }) { return <Fit as="p" className="fit--head" min={8} max={120}>{children}</Fit>; }

/**
 * Payments: the two ways to pay by bank account, with their limits. On
 * IRS.gov each card ends in a control that signs in or opens Direct Pay;
 * here, where that control stood, a plain line in the card's foot says what
 * the reference offers there. Nothing in the band is a control that pays.
 */
export function BankBand({ account, guest, numbers, title, body }: {
  title: string; body: string; numbers: Fact[];
  account: { title: string; tag: string; features: string[]; accepted: string; where: string };
  guest: { title: string; sub: string; features: string[]; accepted: string; where: string };
}) {
  const v = useViewport();
  const x = useExpandGroup();
  const [placement, cw] = orient(v, ["left", true], ["bottom", true]);
  const card = (key: string, c: { title: string; tag?: string; sub?: string; features: string[]; accepted: string; where: string }) => (
    <GoldenBox key={key} {...x.boxProps(key)}>
      <FactBox imprint={<Imprint name={key === "account" ? "account" : "guest"} />} label={c.tag ?? c.sub} fitClass="fit--head" max={120}
        body={<><p className="box__body--short box__body--untall">{c.features[0]}. {c.accepted}.</p><ul className="box__body--long box__body--tall box__list">{c.features.map((f) => <li key={f}>{f}</li>)}<li><strong>{c.accepted}</strong></li></ul></>}
        source={c.where}
        expand={{ group: x, slotKey: key, title: c.title, full: <div className="cell__body"><p className="cell__kicker">Key features</p><ul>{c.features.map((f) => <li key={f}>{f}</li>)}</ul><p><strong>Tax payments accepted:</strong> {c.accepted}.</p><p className="note">{c.where}. GIF.gov takes no payments and asks for no information.</p></div> }}>
        {c.title}
      </FactBox>
    </GoldenBox>
  );
  return (
    <Band id="bank" title={title} lesson={body} note={noteFor(v, 6, placement, cw)}>
      <Grids placement={placement} cw={cw} split={v !== "desktop"} boxes={[card("account", account), card("guest", guest), ...numbers.map((n, i) => <GoldenBox key={`n${i}`}><FactCard fact={n} /></GoldenBox>)]} />
    </Band>
  );
}

/** Account: the features, each heading fitted, the bullets behind More. */
export function FeaturesBand({ id, title, lesson, features, desktop, mobile }: {
  id: string; title: string; lesson?: string; features: { id: string; icon?: IconName; title: string; line: string; items: string[] }[]; desktop: O; mobile: O;
}) {
  const v = useViewport();
  const x = useExpandGroup();
  const [placement, cw] = orient(v, desktop, mobile);
  return (
    <Band id={id} title={title} lesson={lesson} note={noteFor(v, features.length, placement, cw)}>
      <Grids placement={placement} cw={cw} split={v !== "desktop"} boxes={features.map((f, i) => (
        <GoldenBox key={f.id} {...x.boxProps(f.id)}>
          <span id={f.id} className="anchor" />
          <FactBox imprint={f.icon ? <Imprint name={f.icon} /> : undefined} label="In the online account" fitClass={i === 0 ? "fit--head" : "fit--title"} max={120}
            body={<><p className="box__body--short box__body--untall">{f.items[0]}.</p><ul className="box__body--long box__body--tall box__list">{f.items.map((it) => <li key={it}>{it}</li>)}</ul></>}
            expand={{ group: x, slotKey: f.id, title: f.title, full: <div className="cell__body"><ul>{f.items.map((it) => <li key={it}>{it}</li>)}</ul></div> }}>
            {f.line}
          </FactBox>
        </GoldenBox>
      ))} />
    </Band>
  );
}
