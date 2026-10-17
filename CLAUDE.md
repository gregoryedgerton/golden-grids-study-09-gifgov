# CLAUDE.md

Guidance for agents working in a Golden Grids layout study.

## What this repo is

Study 09: three pages of IRS.gov — home, Make a payment (the study's
Payments), Online account for individuals — rebuilt as stacked golden grids
under the GIF.gov brand. Read "Safe Browsing remediation (2026-10)" at the
end of this file before changing any copy or control.
THREE pages (`index.html`, `payments.html`, `account.html`), Vite entries
with plain links. `src/lib/Page.tsx` is the shell (banner, brand bar,
navigation, breadcrumb, left navigation, footer); `src/bands/bands.tsx` the
grids (`FactsBand`, `HeroBand`, `BankBand`, `FeaturesBand`);
`src/lib/modules.tsx` the flat modules; `src/content.ts` every word.
`captures/reference-*.txt` is each page's main text as captured. Read
`docs/program/PROGRAM.md`, then `STUDY-BRIEF.md`, then `README.md`.

Live at https://gregoryedgerton.github.io/golden-grids-study-09-irs/;
pushing to `main` deploys.

## Rules that are not negotiable

- Name the reference page. Substitute every asset. Nothing from the reference
  site — photography, wordmarks, copy — goes into the repo or the deploy.
- The library is consumed from npm at its published version. Never link a
  local checkout. A bug found here is an issue on the library, not a patch.
- Bands stack; they never nest. No wrapper component over `GoldenGrid` — the
  study exists to show the real API being used directly.
- Breakpoints live only in `src/lib/viewport.ts`. Three states, never two.
- Study tools (`src/lib/tools.tsx`) are the only floating UI. Controls go
  there, on their own stacking layer; the study's stylesheet never styles them.
  Grid outlines and band notes are off by default. The panel is HIDDEN by
  default since 2026-10-07 (`?tools=1` shows it; the g/n/m keys still work):
  it used to be fixed at the viewport's top-right corner at
  `z-index: 2147483000`, which is where a drill-down's Close belongs. Until
  it has a better trigger, nothing is drawn in that corner over an open
  cell, and an expanded cell's Close sits at the top right of the cell.
- Expansion (`src/lib/expand.tsx`) is how a slot shows content it cannot hold:
  the band grows, nothing scrolls inside a box, and the covered content goes
  inert. Every photograph should be expandable — points of interaction are
  encouraged, and the picture is the affordance.
- Media fills a slot with `object-fit: cover`; per-image `object-position` is
  the escape hatch. Never reshape a band to suit an image.
- Pass one ends with the asset spec in `README.md` filled in. Do not invent
  placeholder content and call the study done.
- No CSS framework, no design system, no routing, no state library, no tests.

## The standard, from Studies 03 and 04

What every study is held to beyond the rules above. These are features and
the conditions for using them; the content is the study's own, drawn from
its subject. A study that leaves one out says why in its README.

**Copy is about the subject, never about the grid.** Band titles, lessons,
captions and standfirsts describe what the reference page is about, in the
subject's own detail and at paragraph length where there is room. Grid
geometry (range, placement, which side the hero is on) goes in the hidden
band `note`, the README's band table and this file. No winks, no stamps, no
novelty labels, no jokes about the reference or the reader: a plain
scholarly register, as a professor would write it.

**Where the format carries marketing or account matter, the study carries
it too.** A streaming home page interleaves rows with a plan banner, reasons
to join, a price table, a FAQ and a call to action; a listing page has a
booking card, a host card and policies; an encyclopaedia has a licence and
an edit history. Rebuild those modules as the reference places them, with
the study's own copy, straight and plausible, for a fictional service where
one is needed; a form sends nothing and says so. Flat modules (a FAQ, a
price table of peers) are lists, not grids.

**Grids run full width, and type fills what content does not.** No width
caps that leave a band standing in empty ground. When a band has fewer
things than squares, the remaining squares carry type as a design element,
a catalogue number, a date, a count, a word from the subject, rather than
nothing. The type set is one set: body copy, lessons and captions are
raised to carry as much as the headline, and the fitted line is capped
(about 120px) so the delta between largest and smallest type stays within
roughly eight to one. Body copy comes in two lengths and the square's
height picks one; it is never buried and never cut. (Greg, Study 05.)

**Type fits its square.** Copy slots use `Fact`, `Figure` and `LinkBox` from
`src/lib/boxes.tsx`: a label, a line of type fitted to the room the square
leaves it (`src/lib/fit.tsx`, a binary search on font-size), optional body
copy, a foot. The line's container is `flex: 1 1 0`, a definite box; it
must never grow with its content, or the fit measures against a box that is
always big enough (this is what broke in WebKit). Padding is a share of the
square's side. Nothing is ever cut: labels wrap, body copy is removed whole
below 240px, in a square under 64px the label goes and the line stays, and
a formula (`fit--num`) breaks only at its own newlines. A line that does not
read aloud as written gets a `spoken` form. With web fonts, call
`useFontsReady` so display type never flashes from the fallback face.

**Depth is in flow, never in a modal.** Every photograph, every card that
summarises, expands in place (`src/lib/expand.tsx`): the band grows,
nothing scrolls inside a box, covered content goes inert, focus moves to
the close control and returns on close. Every drill-down has ONE plain
way out: a labelled Close (not an icon alone) at the top right of the
opened container, in a sticky head so it stays reachable, plus Escape; a
band opened from a row closes the same way. The study tools panel, which
used to own the viewport's top-right corner, is hidden until it has a
better trigger (`?tools=1` shows it). The Close is the study's SECONDARY CTA:
`.cell__close` reads the `--cta2-*` tokens (font, padding, colour, ground,
border, radius, hover) from `expand.css`, and each study declares those tokens
once, at the end of `styles.css`, from its own secondary button (the outlined
box, the grey pill, the ghost button), so the Close always looks like the
study's other secondary controls and never like the template's. A study with no
secondary button defines one first. (Greg, Study 07–10.) An item chosen from a row opens its
own band beneath the row, a new band and never a grid inside a grid, with
one orientation per item so a row of ten turns through the placements. A
fact that continues elsewhere carries a section link, and an expanded
passage lists where it continues. When the reference is several pages, the
study is several pages (one Vite entry each, plain relative links, no
router) with a shared shell: contents strip, previous and next.

**Media supports the format.** Where the subject moves, the squares move:
short clips cut from the source at the moment of the still (`Clip`,
`src/lib/clip.tsx`), square, silent, looping, playing only while on screen
and fetched only then, and the whole work loads only on request (`Player`).
Where the subject is a text, the squares carry original figures drawn from
the subject's own mathematics or data, inline SVG, in the page's own inks.
Photographs fill their slot with `object-fit: cover`.

**Both colour schemes, by device preference.** Tokens in `:root` and a
`prefers-color-scheme` block; every box tone and figure takes its colour
from the tokens so the whole study follows the device. If the reference has
one scheme, that scheme is the default and the other is the study's own
values turned over, and the README says so. Small coloured text (the label)
gets its own token per scheme so it passes 4.5:1 on each ground.

**Reduced motion is respected, and tested as the device sends it.** The
rule is `transition: none; animation: none`, never the 0.01ms trick, which
turns every style write into a transition and breaks anything that
measures after writing. Clips become their stills; any dial becomes a static
layout. Verify with the device setting on, not only the tools switch.

**Accessibility is audited, not assumed.** Before publishing run
`captures/scan.cjs` against the dev server: in Chrome and WebKit, at 390,
820 and 1440, light and dark, it finds anything overflowing its box, any
fitted line under 12px, and axe-core violations (WCAG 2.0/2.1/2.2 A and AA,
best practice) with an expansion open. Then by hand: one `h1`, one `h2` per
band, landmarks, the skip link first in the tab order (before the tools),
every control with a distinct accessible name ("More: ⟨title⟩", "Continued
in section IV, Geometry"), SVGs with `role="img"` and a label that says what
they show, targets at least 24px, no horizontal scroll at 320px, Enter and
Escape through every expansion. Write what the scan cannot check in the
README: the smallest line, and that no screen-reader user has tested it.

## This study's own rules

- The TEXT is the IRS's, public domain as a U.S. government work (17 U.S.C.
  §105), and that is this study's exception to "substitute every asset".
  Use it shortened and rearranged; do not invent facts, limits, fees or
  phone numbers; check any claim against `captures/reference-*.txt`; name
  each page where its text appears (never link it) and print the IRS's
  reviewed-on date. Where the reference invites the reader to sign in,
  create an account, pay, check a refund or get a PIN, give the same facts
  as description.
- NOT a government website, and it must never look like one: the banner at
  the top says so on every page; the brand is GIF.gov; no IRS seal, logo
  or mark, no "official website" banner, no lock or https explainer. There
  is no control that signs in, pays, downloads or submits, not even an
  inert one that says so: where the reference has one, a line of plain text
  says what IRS.gov offers there.
- Each band's first item is the hero and carries the reference's fuller
  text; the others show one line and open their list with More. Where the
  reference links to one of the study's three pages, the square links
  (`href`/`cta` on a Fact), and `cta` is the page's name, never an action.
- Below desktop a five- or six-square band splits into two grids (`Grids`);
  never shrink a range to make a heading fit.
- Register from measurement (`captures/tokens.json`): USWDS as IRS.gov
  applies it; Source Sans 3 stands in for Source Sans Pro. One scheme in the
  reference; dark is the study's.
- Left navigation and footer items the study does not build are text, not
  dead links; the Help & contact module rebuilds the Individuals list only.

Two geometry rules, verified against source, that every band relies on:

- Parity: with *n* = visible boxes (+1 for a placeholder), `right`/`left` are
  landscape only when *n* is even; `top`/`bottom` only when *n* is odd.
- Hero side: the largest box sits on the `placement` side turned *n − 2*
  quarter-turns in the spiral's direction (opposite at 4, one step at 3).

## Disclosure and neutrality

- **Every page says it is a study, in three places**: its metadata, a sticky
  banner at the top, and a disclosure that is the last element on the page.
  All three read `src/study.json`. `study.meta.ts` writes each entry's title
  (`{Brand} - a Golden Grids layout study`, with the page's label in front when
  there is more than one page), description, share card and icon links, so the
  HTML entries carry none; `StudyBanner` and
  `StudyDisclosure` (`src/lib/study.tsx`, `study.css`) draw the other two.
  The banner's sentence and the meta description are the same sentence. Do
  not restyle them from the study's stylesheet, do not hide or shorten them,
  and do not put anything after the disclosure.
- **Keep `src/study.json` true.** When pages, sources, assets or dates change,
  change it in the same commit: pages reviewed and when, how they were read,
  what is real, what is invented or changed, each asset's source and licence,
  and `updated`. Say what is not known (an unknown licence, a figure checked
  only at second hand). A page's own credit list goes to `StudyDisclosure` as
  children.
- **Anything that sticks to the top offsets by `--study-banner-h`**, which the
  banner sets: an opened cell's head, a strip, a rail, a stage.
- **A study records; it does not judge.** Do not write, on the page or in the
  README, that Golden Grids suits or does not suit this content, that the
  reference is worse, or that the study succeeded or failed. No "claim", no
  "what did not", no "honest failure". The README has "Approach" (describe both
  arrangements) and "Notes for review" (plain observations for the people who
  will review it). The assessment is made once, after all studies have been
  reviewed by people. (Greg, 2026-10-09.)
- **Icons**: the letters GIF, in capitals, in the study's face and colours:
  `public/favicon.svg` (a 32-unit tile with 6-unit corners), `favicon-96.png`,
  `apple-touch-icon.png` and the share card `og.png` (the parody name over "a
  Golden Grids layout study"). The raster files matter: share sheets and iOS do
  not read an SVG icon and otherwise show whatever icon the host last served.
  `captures/icons-make.py` and `icons-raster.cjs` in the template draw them.

## Brand

- **The study's brand is a parody name**: `GIF` in capitals, then the tail of
  the reference's name in lower case (GIFbnb, GIFspn, GIFflix, GIF.gov, GIFx,
  GIFbase, GIFmutual, GIFn'now, GIFbell, GIFipedia, GIFify, GIFmilk Records).
  Do not use GIFcommit as
  a service's name; it is only the npm scope of the library.
- **A play on the reference's premium tier or named service carries the
  parody name and keeps the alteration**: GIFspn+, GIFbase One, GIFx Premium.
- Write the name exactly so; never change its case in CSS. The notice in
  `src/study.json` says it is a parody name, and the disclosure lists it
  under what is invented. (Greg, 2026-10-09.)
- **The header is the reference's header.** Take its structure from the
  page being rebuilt: the parody name where the logo is, its nav items, its
  search, its tabs. Do not write "layout study", a study number or the
  reference's name there; the notice above and the disclosure below say that
  on every page. (Greg, 2026-10-09.)
- **Nothing links to the reference except the notice and the disclosure.** In
  this study not even those do, since 2026-10-17 (see Safe Browsing
  remediation below). No link in the header, the nav, a band, an opened
  cell or the footer goes to the site being studied or its apps. Nav items are the reference's own, for
  show (plain text); only an item that leads to one of the study's own pages
  or sections is a link. Credits for photographs, maps and facts from other
  sources may link to those sources. (Greg, 2026-10-09.)

## API facts, verified against 5.0.0 source

- `GoldenGrid` props: `from` (1), `to` (4), `color`, `outline`, `clockwise`
  (true), `placement` (`"right"` | `"bottom"` | `"left"` | `"top"`), `children`.
- `GoldenBox` children map largest slot → smallest. Extra children are ignored.
- When `from > 1`, the skipped positions collapse into one placeholder slot,
  rendered first in the DOM and filled by the **last** `GoldenBox` child.
- Structural CSS is auto-injected. `GoldenBox` renders a 100%×100%
  `position: relative` div and nothing else; it accepts `className` and
  `style`. All visual styling is ours.
- Only direct `GoldenBox` children count; a wrapper component or fragment is
  dropped silently. `from={2}` skips position 1 alone:
  a 1×1 placeholder, rendered first, filled by the last child, raw base colour.
  Same rectangles as `from={1}`, different child mapping and colours. `from === to === 1`
  is `single`: one box, later children ignored.
- DOM order is placeholder first, then slots smallest to largest: the hero is
  the last element.
- There is no dial in this study.

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build → dist/
npm run preview
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/pages.yml`.
Base path derives from `GITHUB_REPOSITORY`; do not hard-code it.

## Sandbox constraints

The library README links this repo as its "try it without installing" path,
opened in StackBlitz at `https://stackblitz.com/~/github.com/gregoryedgerton/golden-grids-study-template`.

- **Vite stays on 7.x.** Vite 8 depends on rolldown, whose WebContainer
  binding is a wasm download fetched at first run under an experimental WASI
  runtime. It made the sandbox slow and fragile. Do not bump to 8 without
  loading the StackBlitz link afterwards and watching it reach `VITE ready`.
- `.stackblitzrc` pins install and start so the importer does not guess.
- Do not append `?file=` to the `~/github.com` link; it made the IDE fail to
  start in testing. The classic `/github/` importer accepts `?file=` but waits
  on a WebSocket and can stall at "Cloning repo from GitHub".

## Safe Browsing remediation (2026-10)

On 2026-10-17 Google Safe Browsing flagged the whole origin
gregoryedgerton.github.io, every study and the marketing site, as social
engineering. The first trigger was the demo bank sign-in in Study 19
(GIFbank), since removed; see that repo's CLAUDE.md for the precedent this
section follows. Nothing was ever collected here, but the scanner reads
appearance, and a tax and government-payments lookalike is a classic phishing
theme, so the bar in this study is high.

**What changed**
- The utility bar has no "Sign in" (`UTILITY`, `src/content.ts`).
- The account page's "Sign in or create account" button is gone; in its
  place `AccountIntro` (`src/lib/modules.tsx`) prints `ACCOUNT.where`, a line
  of plain text: on IRS.gov this is where the online account begins, and
  GIF.gov has no accounts and asks for no information.
- The home hero's "Create account" button is a plain text link to the
  study's account page, labelled with the page's name (`HERO.page`), and the
  headline is "What an account holds" (the reference's is "Do more with an
  IRS account").
- The app card has no "Get the official app" button, and its phone drawing
  no "Sign in to your account" and "Continue as guest" buttons: the phone
  lists what the app holds (`HERO.app.holds`, `.card__phone-line`) and a note
  says the reference's card leads to the IRS's app and nothing here
  downloads. The `.btn` classes are gone from `styles.css`; the `--cta2-*`
  tokens remain for the expanded cell's Close.
- The payments page is named Payments (h1, `study.json` page label, nav item
  that was "Pay"); the reference heads it "Make a payment". The two
  bank-account cards (`BankBand`, `src/bands/bands.tsx`) are named Online
  account and Direct Pay, their "Sign in or create account" and "Pay through
  Direct Pay" links are gone, and the card's foot carries `where` as
  non-interactive `source` text ("On IRS.gov, where Direct Pay begins").
- Lines that invited the reader to act (check a refund, get an IP PIN, sign
  in, pay, submit a form, "Make a payment", "Try the tax debt help tool") are
  recast as description with the same facts; the account page's section
  headings are nouns (Tax records, Payments, Forms) rather than the
  reference's actions. Internal links carry page or section names
  (Payments, Online account for individuals, If you can't pay now). The
  News cards' unused `cta` strings ("Sign up now" and others) were removed.
- No IRS address is in the build: `SOURCE` (`content.ts`) and `study.json`
  pages and assets have no `url`, and the home notice no longer links to
  trumpaccounts.gov. The closing disclosure (`Page.tsx`, as children of
  `StudyDisclosure`) says why ("Why nothing here links to IRS.gov"); the
  README keeps the addresses. Check with
  `grep -rnE "\.gov/|https?://[a-z.]*\.gov" dist` after building (the wordmark
  text "GIF.gov" is not an address).

**Never bring back**, in this study or a sibling: a sign-in, create-account,
pay, guest-pay, app-download or form-submit control, even an inert one
labelled as doing nothing, or anything drawn to look like one (a button-styled
span in a phone or card drawing counts); an input other than the header's
search box; any link to IRS.gov, another .gov account or payments site, or an
app store; action labels on internal links ("Make a payment", "Create
account"); an "An official website of the United States government" banner,
a lock or https explainer, or anything seal-like. The study banner and the
closing disclosure stay. After deploying, Greg requests a review in Google
Search Console (Security Issues) so the flag is lifted.
