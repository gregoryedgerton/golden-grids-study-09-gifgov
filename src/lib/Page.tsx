import type { ReactNode } from "react";
import { Tools } from "./tools";
import { StudyBanner, StudyDisclosure } from "./study";
import { NAV, UTILITY, FOOTER } from "../content";

/**
 * The shell, after IRS.gov's: a thin banner, a dark-blue brand bar with
 * utility links, a primary navigation row with search, a breadcrumb, the
 * page (with a left navigation on inner pages), and a footer of link
 * columns. The reference opens with a government-website banner; this
 * study has none, and its own notice says what this is instead. The utility
 * row has no Sign in, and the closing disclosure names the reference pages
 * without linking them (see CLAUDE.md, Safe Browsing remediation).
 */
export function Page({ current, crumbs, side, sideTitle, children }: { current: string; crumbs?: string[]; side?: string[]; sideTitle?: string; children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <StudyBanner />
      <Tools />
      <header className="brand">
        <div className="wrap brand__row">
          <a className="wordmark" href="./index.html">GIF;gov</a>
          <ul className="utility">{UTILITY.map((u) => <li key={u}><span>{u}</span></li>)}</ul>
        </div>
        <nav className="nav" aria-label="Primary">
          <div className="wrap nav__row">
            <ul>{NAV.map(([label, href]) => <li key={label}>{href === "#" ? <span className="nav__off" title="Not part of this study">{label}</span> : <a href={href} aria-current={href.endsWith(current) ? "page" : undefined}>{label}</a>}</li>)}</ul>
            <form className="search" role="search" onSubmit={(e) => e.preventDefault()}><label htmlFor="q" className="visually-hidden">Search</label><input id="q" type="search" placeholder="Search" /><button type="submit" aria-label="Search">⌕</button></form>
          </div>
        </nav>
      </header>
      {crumbs && (
        <nav className="wrap crumbs" aria-label="Breadcrumb"><ol>{crumbs.map((c, i) => <li key={c}>{i === 0 ? <a href="./index.html">{c}</a> : i < crumbs.length - 1 ? <span>{c}</span> : <span aria-current="page">{c}</span>}</li>)}</ol></nav>
      )}
      <div className={`wrap page${side ? " page--side" : ""}`}>
        {side && (
          <nav className="sidenav" aria-label={sideTitle ?? "Section"}>
            <ul>{side.map((s) => <li key={s}><span className={s === sideTitle ? "is-here" : undefined}>{s}</span></li>)}</ul>
          </nav>
        )}
        <main id="content">{children}</main>
      </div>
      <footer className="foot">
        <div className="wrap foot__cols">
          {FOOTER.map(([title, items]) => <section key={title} aria-labelledby={`f-${title}`}><h2 id={`f-${title}`}>{title}</h2><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></section>)}
        </div>
      </footer>
      <StudyDisclosure>
        <p><strong>Why nothing here links to IRS.gov.</strong> The pages this study follows are named but not linked. A page styled after a government payments and account site that links to that site can be flagged as phishing by automated scanners, as the address these studies share was in October 2026, so the study does not link out to it. For the same reason it has no sign-in, payment or download control, even an inert one: where IRS.gov has such a control, a line of plain text says what the reference offers there. The addresses are listed in the study's repository.</p>
      </StudyDisclosure>
    </>
  );
}
