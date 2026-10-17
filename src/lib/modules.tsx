import { useState } from "react";
import { NOTICE, DEBT_HELP, HELP, HELP_TABS, HERO, PAY, ACCOUNT, SOURCE } from "../content";

/**
 * The flat modules, as the reference has them: a notice strip, a callout, a
 * tabbed accordion, a card, a side column, a reviewed-on line. Where the
 * reference has a control that signs in, pays or downloads, there is a line
 * of plain text saying what IRS.gov offers there (see CLAUDE.md, Safe
 * Browsing remediation); nothing here is, or is drawn as, such a control.
 */
export function Notice({ title, body }: { title: string; body: string }) {
  return <aside className="notice" aria-label={title}><p><strong>{title}</strong> {body}</p></aside>;
}
export const HomeNotice = () => <Notice {...NOTICE} />;

export function AppCard() {
  return (
    <section className="card card--app" aria-labelledby="app-title">
      <h2 id="app-title">{HERO.app.title}</h2>
      <p>{HERO.app.body}</p>
      <div className="card__phone" aria-hidden="true"><span>GIF;gov</span>{HERO.app.holds.map((h) => <span key={h} className="card__phone-line">{h}</span>)}</div>
      <p className="note">{HERO.app.note}</p>
    </section>
  );
}

export function DebtHelp() {
  return (
    <section className="callout" aria-labelledby="debt-title">
      <h2 id="debt-title">{DEBT_HELP.title}</h2>
      <div><p>{DEBT_HELP.body}</p><a href="./payments.html#cant">{DEBT_HELP.page}</a></div>
    </section>
  );
}

export function HelpContact() {
  const [tab, setTab] = useState(0);
  return (
    <section className="help" aria-labelledby="help-title">
      <h2 id="help-title" className="centered">Help &amp; contact</h2>
      <div className="tabs" role="tablist" aria-label="Audience">
        {HELP_TABS.map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === tab} className="tab" onClick={() => setTab(i)}>{t}</button>)}
      </div>
      {tab === 0 ? (
        <div className="accordion">{HELP.map((h) => <details key={h.title}><summary>{h.title}</summary><p>{h.body}</p></details>)}</div>
      ) : (
        <p className="note">Only the Individuals tab is rebuilt in this study; the reference has one list per audience.</p>
      )}
      <p className="centered"><span className="showonly">Get more help</span></p>
    </section>
  );
}

export function Reviewed({ page }: { page: "payments" | "account" }) {
  const s = SOURCE[page];
  return (
    <p className="reviewed"><em>Page last reviewed or updated by the IRS: {s.reviewed}</em> · {s.label} · Share · Print</p>
  );
}

export function PayIntro() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <p className="intro">{PAY.intro}</p>
      <div className="tabs tabs--line" role="tablist" aria-label="Payer">
        {PAY.tabs.map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === tab} className="tab" onClick={() => setTab(i)}>{t}</button>)}
      </div>
      {tab === 1 && <p className="note">Business payments are not rebuilt in this study; the reference's Individual tab is.</p>}
    </>
  );
}

export function AccountIntro() {
  return (
    <>
      <Notice title={ACCOUNT.notice.title} body={ACCOUNT.notice.body} />
      <p className="intro">{ACCOUNT.intro}</p>
      <p className="where">{ACCOUNT.where}</p>
    </>
  );
}

export function AccountRelated() {
  return (
    <section className="related" aria-labelledby="related-title">
      <h2 id="related-title">Related</h2>
      <ul>{ACCOUNT.related.map((r) => <li key={r}>{r}</li>)}</ul>
    </section>
  );
}

export function OtherWays() {
  return (
    <section className="prose" aria-labelledby="other-title">
      <h2 id="other-title">{ACCOUNT.other.title}</h2>
      <ul>{ACCOUNT.other.items.map((i) => <li key={i}>{i}</li>)}</ul>
      <p><span className="showonly">Find more assistance.</span></p>
    </section>
  );
}
