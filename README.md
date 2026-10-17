GIFcommit00008

# Layout study — three pages of IRS.gov, as GIF.gov

**Live:** [`https://gregoryedgerton.github.io/golden-grids-study-09-irs/`](https://gregoryedgerton.github.io/golden-grids-study-09-irs/)

An unaffiliated layout study. It rebuilds the structure of three pages of
IRS.gov — the [home page](https://www.irs.gov/), [Make a payment](https://www.irs.gov/payments)
and [Online account for individuals](https://www.irs.gov/payments/online-account-for-individuals)
— as stacked golden grids under the GIF.gov brand. The text is the
Internal Revenue Service's own, a work of the United States government in
the public domain (17 U.S.C. §105), shortened and rearranged and named on
its page; the shell says on every page that this is not a government
website. There is no sign-in, payment, app download or form in the study,
and the pages do not link to IRS.gov: the addresses above are kept here
and nowhere in the build (see Notes for review). Nothing of the IRS's
design, seal or marks is reproduced. Built with
[Golden Grids](https://github.com/gregoryedgerton/golden-grids) from the
[study template](https://github.com/gregoryedgerton/golden-grids-study-template).

## Reference

The three pages, captured 2026-10-07 at 390 / 820 / 1440
([`captures/reference-*.png`](captures/), main text in
`captures/reference-*.txt`). IRS.gov applies the U.S. Web Design System:
a thin government banner, a dark-blue brand bar, a primary navigation row,
and pages of equal cards and equal headings — six "Popular topics" cards in
two rows of three, six payment-method cards in two rows of three, a
carousel of five news cards, eight account features as a column of
headings with bullets, and a left navigation with a right "Related" column
on inner pages. Measured tokens ([`captures/tokens.json`](captures/tokens.json)):
Source Sans Pro at 16px/24px in `#1b1b1b`, link blue `#00599c`, brand
`#002d62`, greys `#f9f9f9` and `#f0f0f0`, `#d6d7d9` hairlines, 8px radii.

| Width | Home | Make a payment | Online account |
| --- | --- | --- | --- |
| 390px | ![](captures/reference-home-390.png) ![](captures/study-index-390.png) | ![](captures/reference-payments-390.png) ![](captures/study-payments-390.png) | ![](captures/reference-account-390.png) ![](captures/study-account-390.png) |
| 1440px | ![](captures/reference-home-1440.png) ![](captures/study-index-1440.png) | ![](captures/reference-payments-1440.png) ![](captures/study-payments-1440.png) | ![](captures/reference-account-1440.png) ![](captures/study-account-1440.png) |

## Approach

The reference presents its topics, payment methods and account features as rows of equal cards and columns of equal headings. The study sets each row as one grid, with the first item in the largest square carrying its full text and the rest in descending squares with their lists one step away. Which item comes first follows the reference's own order.

## The pages

Three Vite entries, plain links; `src/lib/Page.tsx` is the shell (banner,
brand bar, navigation, breadcrumb, left navigation, footer columns). Flat
modules stay flat: the notice strip, the tax-debt callout, the Help &
contact tabs and accordion, the app card, the account intro, Related, the
reviewed-on line. Below desktop a five- or six-square band is dealt into two
grids so no square is under about 114px. Measured sizes are the grid's
width×height at 390 / 820 / 1440.

| Page · band | Range · placement · cw (desktop) | Measured | What it holds |
| --- | --- | --- | --- |
| Home · What an account holds | 1–5 · top · cw | 358×239+179 / 788×525+394 / 749×468 | The headline and a link to the account page; refund status, tax records, payments, notices |
| Home · Popular topics | 1–6 · right · cw | 2×(358×239) / 2×(788×525) / 1140×702 | Payments, Free File, tax records, EIN, withholding, amended return |
| Home · News & announcements | 1–5 · bottom · ccw | 358×239+179 / 788×525+394 / 1140×713 | The carousel's five items at once |
| Payments · By bank account | 1–6 · left · cw | 2×(358×239) / 2×(788×525) / 876×539 | Online account (preferred), Direct Pay as a guest; 20, 5, Free, 7–7 |
| Payments · All payment methods | 1–6 · right · ccw | 2×(358×239) / 2×(788×525) / 876×539 | Bank account, card, wallet, wire, check, cash |
| Payments · If you can't pay now | 1–3 · top · cw | 358×537 / 788×525 / 876×584 | Pay over time, later, less |
| Account · What you can do | 1–4 · left · ccw | 358×597 / 788×473 / 876×526 | Tax records, payments, plans, balance |
| Account · By the numbers | 1–3 · bottom · cw | 358×537 / 788×525 / 876×584 | 365 days, 5 years, 1 year |
| Account · Forms, profile, … | 1–4 · right · cw | 358×597 / 788×473 / 876×526 | Submit forms, profile, authorizations, accessibility |
| Account · Paying, and not paying | 1–3 · top · ccw | 358×537 / 788×525 / 876×584 | The side column's three questions |

All eight placement × direction orientations appear at desktop.

## The subject

Every sentence in `src/content.ts` is from the three pages as captured on
October 7, 2026 (the IRS last reviewed them on 18-Sep-2026 and
26-Sep-2026, as each page prints), or a short gloss on them: the two ways
to pay by bank account and their daily limits (20 signed in, 5 as a guest),
the six payment methods and which charge fees, the three options when you
cannot pay, the eight sections of an individual's online account and their
bullets, the home page's topics, help list and announcements. A few
expansions add a sentence of context (what an EIN is, who sets card fees)
in the same plain register. Since 2026-10-17, lines that invited the
reader to sign in, pay, check a refund or get a PIN are given as
description, with the same facts (see Notes for review). No photograph is used; the only drawings are the study's own icons.

## How it works

- Every card is a `Fact` ([`src/lib/boxes.tsx`](src/lib/boxes.tsx)) with
  its heading fitted by [`src/lib/fit.tsx`](src/lib/fit.tsx), capped at
  120px; the first in each band is the hero and carries the fuller text,
  the rest show one line of body and open the whole list with More. Where
  the reference links to one of the three pages, the square links, labelled
  with the page's name (Payments, Online account for individuals).
- Behind each square's text sits a large faint line icon drawn for the
  study ([`src/icons.tsx`](src/icons.tsx), one per topic: a bank, a card, a
  clock, a folder, a key, a bell), the reference's small card icon made the
  card's ground; it is decorative and clipped by the box, and hidden in a
  square under 90px.
- Body copy appears from 200px of height, the fuller passage from 320px,
  and a list of bullets from 480px, so a hero square carries the
  reference's whole list and a small square its first line.
- There is no control that would sign in, pay or download, not even an
  inert one. Where the reference has one, a line of plain text stands in
  its place and says what IRS.gov offers there ("On IRS.gov, where Direct
  Pay begins").
- Light is the reference's; dark is the study's, the same values turned
  over, by device preference.
- [`captures/scan.cjs`](captures/scan.cjs), Chrome and WebKit, 390 / 820 /
  1440, light and dark, all three pages: nothing overflows, no fitted line
  under 12px, axe (WCAG 2.0/2.1/2.2 A/AA, best practice) clean with a More
  open. No screen-reader user has tested it.

## Notes for review

Observations for whoever reviews this study, recorded without a verdict. Whether the layout suits the page is assessed separately, after every study has been reviewed.

- **Safe Browsing remediation (2026-10-17).** Google Safe Browsing flagged
  the address these studies share (gregoryedgerton.github.io) as social
  engineering; the first trigger was a demo bank sign-in in Study 19. A tax
  and payments lookalike is a classic phishing theme, so this study now has
  nothing that looks like signing in, creating an account, paying,
  downloading an app or linking to a real government account site:
  - Removed: "Sign in" from the utility bar; the account page's "Sign in or
    create account" button; the home hero's "Create account" button; the
    app card's "Get the official app" button and the phone drawing's "Sign
    in to your account" and "Continue as guest" buttons; the payment cards'
    "Sign in or create account" and "Pay through Direct Pay" links; the home
    notice's link to trumpaccounts.gov
    ([`https://trumpaccounts.gov`](https://trumpaccounts.gov)).
  - In their place, plain text says what the reference offers there ("On
    IRS.gov this is where the online account begins"); the phone drawing
    lists what the app holds; the hero square links to the study's own
    account page by its name.
  - Renamed: the payments page is Payments (the reference heads it "Make a
    payment"), and the nav's Pay reads Payments; the hero headline is "What
    an account holds" (the reference's is "Do more with an IRS account");
    the bank-account cards are Online account and Direct Pay (the
    reference's "Pay in your IRS Account" and "Pay as guest"); the account
    page's section headings are nouns (Tax records, Payments) where the
    reference's are actions (Access tax records, Make and view payments).
  - Recast as description: lines that invited the reader to check a refund,
    get an IP PIN, sign in, pay or submit a form now say what the account
    or the page offers. The facts are unchanged.
  - The pages name IRS.gov but no longer link to it, an exception to the
    program's rule that a study links its reference from the notice and
    disclosure. The closing disclosure says why ("Why nothing here links to
    IRS.gov"); the addresses are in this README and nowhere in the build.

- **Home hero.** It shares a row with the app card, so at 1440 its five-square grid is 749px wide; the reference's hero is a two-column promotion.
- **Help and contact.** Only the Individuals list is rebuilt; the reference has one for each of five audiences.
- **Navigation.** The reference's left navigation and footer link to pages this study does not have; those items are shown as text.
- **Order as size.** The reference draws "Bank account" and "Cash" at one size; here the first is larger because it comes first.

## Disclosure

Every page says what it is in three places, all read from
[`src/study.json`](src/study.json): its title and description, a sticky notice
at the top, and a disclosure at the very end listing the pages reviewed, what
is real, what is invented or changed, and where each kind of asset came from.

## Study tools

Hidden by default (`?tools=1` shows the panel); `g`, `n` and `m` toggle grid
outlines, band notes and reduced motion.

## Running and deploying

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`; pushing to `main` deploys
to GitHub Pages. The library is consumed from npm at its published version,
never linked locally.
