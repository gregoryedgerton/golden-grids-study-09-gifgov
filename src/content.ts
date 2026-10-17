/**
 * Three pages of IRS.gov — the home page, Payments, and Online account for
 * individuals — as captured on October 7, 2026 (captures/reference-*.txt
 * hold each page's main text). The text is the IRS's own and is in the
 * public domain as a work of the United States government (17 U.S.C. §105);
 * it is used here shortened and rearranged, each page named where it
 * appears. Where the reference invites the reader to sign in, create an
 * account, pay, check a refund or get a PIN, the text is recast as a
 * description of what the reference offers; the facts are unchanged. The
 * shell is GIF;gov's, a layout study's, and says so: this is not a
 * government website, and there is no sign-in, payment, download or form.
 */

export const CAPTURED = "October 7, 2026";
/**
 * The pages this study follows, by name. They are not linked from the pages:
 * a lookalike of a government payments and account site that links to the
 * real one is what phishing scanners look for (see CLAUDE.md, Safe Browsing
 * remediation). The README lists the addresses.
 */
export const SOURCE = {
  home: { label: "IRS.gov, home page" },
  payments: { label: "IRS.gov, payments page", reviewed: "18-Sep-2026" },
  account: { label: "IRS.gov, Online account for individuals", reviewed: "26-Sep-2026" },
};

/** A fact that fits a square. */
import type { IconName } from "./icons";
export interface Fact { label?: string; line: string; fitClass?: string; body?: string; long?: string; href?: string; cta?: string; icon?: IconName }

/** The site's primary navigation, as the reference names it. */
export const NAV: [string, string][] = [["File", "#"], ["Payments", "./payments.html"], ["Refunds", "#"], ["Credits & Deductions", "#"], ["Forms", "#"], ["Report Fraud", "#"]];
export const UTILITY: string[] = ["Help", "News", "English", "Tax Pros"];

// --- Home ------------------------------------------------------------------

export const NOTICE = { title: "Trump Accounts", body: "Jumpstart your child's financial future." };

/** The account hero. The reference's headline invites the reader to create an account; here it says what an account holds, and the square's link goes to the study's account page by name. */
export const HERO: { title: string; label: string; body: string; page: string; features: Fact[]; app: { title: string; body: string; holds: string[]; note: string } } = {
  title: "What an account holds",
  label: "Individual, Business or Tax Pro Account",
  body: "Tax information, in an Individual, Business or Tax Pro Account: refund status, tax records, payments and notifications.",
  page: "Online account for individuals",
  features: [
    { label: "Refund status", line: "Refund\nstatus", icon: "refund", body: "Where a refund stands, for the current year and prior years.", long: "A refund's status appears about 24 hours after an e-filed return is accepted, and about four weeks after a paper return is mailed." },
    { label: "Tax records", line: "Tax\nrecords", icon: "records", body: "Transcripts, key return information, notices and information returns.", long: "Return transcripts, account transcripts and wage-and-income documents such as Forms W-2 and certain 1099s, for the current and prior years." },
    { label: "Payments", line: "Payments", icon: "pay", body: "Bank-account payments, scheduled payments, payment history and payment plans.", long: "Same-day or scheduled up to 365 days ahead, cancellable before the date, with five years of history and up to 20 payments a day." },
    { label: "Notices", line: "Notifi-\ncations", icon: "notice", body: "Paperless delivery of certain notices, and email when there is activity.", long: "Digital notices appear in the account as the IRS issues them; email notifications say that there is something new to see, not what it is." },
  ],
  app: {
    title: "All your info in one app",
    body: "Tax records, refund status, payments, balance and digital notices, in one app.",
    holds: ["Tax records", "Refund status", "Payments", "Balance", "Digital notices"],
    note: "On IRS.gov this card leads to the IRS's mobile app. GIF;gov has no app, and nothing here downloads.",
  },
};

export const DEBT_HELP = { title: "Find tax debt help", body: "A few questions lead to the options for resolving a tax debt.", page: "If you can't pay now" };

export const TOPICS: Fact[] = [
  { label: "Popular topic", line: "Payments", icon: "pay", body: "Payments, payment plans, and the other options for paying a tax debt.", long: "Bank account payments are free, in the online account or as a guest through Direct Pay; cards and digital wallets carry a processor's fee; same-day wire, check, money order and cash are accepted too.", href: "./payments.html", cta: "Payments" },
  { label: "Popular topic", line: "Free File", icon: "file", body: "The free filing options. IRS Free File is open until Oct. 15.", long: "Free File is a partnership between the IRS and tax software companies: guided preparation for taxpayers under an income limit, and fillable forms for anyone." },
  { label: "Popular topic", line: "Tax\nrecords", icon: "records", body: "Tax return transcripts and other tax records, from current and prior years.", long: "Online in the account, or by mail; a mailed account transcript covers one tax year and may not show the most recent penalties, interest or pending actions.", href: "./account.html#records", cta: "Online account for individuals" },
  { label: "Popular topic", line: "EIN", icon: "ein", body: "An Employer ID number is free and direct from the IRS, issued in minutes.", long: "An Employer Identification Number identifies a business entity. The IRS issues it at no charge; third parties that charge for it are not the IRS." },
  { label: "Popular topic", line: "With-\nholding", icon: "withhold", body: "The Estimator compares the tax withheld from pay with the tax likely to be owed.", long: "The Tax Withholding Estimator compares what is being withheld with what you are likely to owe, and suggests how to fill in a new Form W-4 for your employer." },
  { label: "Popular topic", line: "Amended\nreturn", icon: "amend", body: "Amended tax returns, and the status of one already submitted.", long: "Form 1040-X corrects a filed return; its status can be checked about three weeks after filing, and processing can take up to sixteen weeks." },
];

export const HELP_TABS = ["Individuals", "Businesses", "Tax professionals", "Tax-exempt organizations", "Government entities"];
export const HELP: { title: string; body: string }[] = [
  { title: "Your account", body: "The online account shows a balance, payment history, tax records and notices; a new account requires photo identification." },
  { title: "Amended return", body: "Form 1040-X corrects a filed return; an amended return's status is available about three weeks after filing." },
  { title: "Identity protection PIN (IP PIN)", body: "A six-digit number that prevents someone else from filing a return with your Social Security number. The IRS issues it through the online account." },
  { title: "Transcripts and tax records", body: "Return, account and wage-and-income transcripts, online in your account or by mail; each account transcript covers one tax year." },
  { title: "Tax scam, fraud or identity theft", body: "The IRS does not initiate contact by email, text or social media to ask for personal or financial information. The IRS takes reports of suspected scams." },
  { title: "Resources for individuals", body: "Filing, credits and deductions, life events, and help for students, parents, members of the military, seniors and retirees." },
  { title: "Contact", body: "Phone assistance for individuals at 800-829-1040, 7 a.m. to 7 p.m. local time; local offices by appointment." },
];

export const NEWS: Fact[] = [
  { label: "Announcement", line: "Volunteers\nneeded", icon: "volunteer", body: "Learn to prepare taxes and help your community.", long: "The Volunteer Income Tax Assistance and Tax Counseling for the Elderly programs train volunteers to prepare returns free for people who qualify." },
  { label: "Alert", line: "Scams and\nschemes", icon: "alert", body: "Find the latest information on trending scams and schemes.", long: "The IRS does not initiate contact by email, text message or social media to ask for personal or financial information; most contact begins with a letter." },
  { label: "Announcement", line: "Disaster\nrelief", icon: "disaster", body: "Information on recent tax relief for taxpayers affected by disasters.", long: "After a federally declared disaster the IRS can postpone filing and payment deadlines for affected areas; the relief is listed by state and event." },
  { label: "News", line: "Topics in\nthe news", icon: "news", body: "Current news, recent guidance, and timely updates.", long: "News releases, tax tips and guidance as they are issued, with the filing season's dates and any changes to forms." },
  { label: "Law", line: "Working\nFamilies\nTax Cuts", icon: "law", body: "The Working Families Tax Cuts significantly affect federal taxes, credits and deductions.", long: "The IRS's page collects what changed, for which tax years, and what to do differently when filing." },
];

// --- Payments ----------------------------------------------------------------

/**
 * The reference's page is headed "Make a payment" and its two bank-account
 * cards end in "Sign in or create account" and "Pay through Direct Pay". Here
 * the page is named Payments, the cards are named for the two channels, and
 * where each card's control stands a line of text says what IRS.gov offers
 * there. Nothing on this page is, or looks like, a control that pays.
 */
export const PAY = {
  title: "Payments",
  intro: "Federal taxes can be paid by bank account, debit or credit card, digital wallet and more, and there are options for those who can't pay now.",
  tabs: ["Individual payments", "Business payments"],
  side: ["Bank account (Direct Pay)", "Debit or credit card", "Your online account", "Business tax payment (EFTPS)", "Payment plan", "Tax debt help", "Penalties", "Interest", "Tax withholding", "Foreign electronic payments", "User fees"],
  bank: {
    title: "Individual taxes by bank account",
    body: "Free with the IRS, for a balance due, estimated tax, an amended return, an extension and more.",
    account: { title: "Online account", tag: "Preferred", features: ["Bank-account payments, with the account saved to the profile", "Balance due, payment history and more", "Payment plans set up, changed or paid", "Up to 20 payments a day"], accepted: "Most payment types accepted", where: "On IRS.gov, where the online account begins" },
    guest: { title: "Direct Pay", sub: "As a guest", features: ["Bank-account payments without an account", "Payments looked up by confirmation number", "Payments on a payment plan", "Up to 5 payments a day"], accepted: "All payment types accepted", where: "On IRS.gov, where Direct Pay begins" },
  },
  methods: {
    title: "All payment methods",
    body: "Choose a method that works for you. Not all tax payments are accepted by all payment methods.",
    list: [
      { label: "Method", line: "Bank\naccount", icon: "bank", body: "All tax payments accepted. Free.", long: "From a checking or savings account, in the online account or as a guest through Direct Pay; a payment can be scheduled ahead and cancelled before its date." },
      { label: "Method", line: "Debit or\ncredit card", icon: "card", body: "Most tax payments accepted. Fees apply.", long: "Card payments go through third-party processors, which set the fee; the IRS receives none of it." },
      { label: "Method", line: "Digital\nwallet", icon: "wallet", body: "Most tax payments accepted. Fees apply.", long: "Through the same third-party processors as cards, which set and keep the fee." },
      { label: "Method", line: "Same-day\nwire", icon: "wire", body: "All tax payments accepted. Fees may apply.", long: "A wire is arranged through your bank, which may charge for it; the IRS does not." },
      { label: "Method", line: "Check or\nmoney order", icon: "check", body: "All tax payments accepted.", long: "Payable to the United States Treasury, with the tax year, form and taxpayer identification number written on it, mailed to the address for your state." },
      { label: "Method", line: "Cash", icon: "cash", body: "All tax payments accepted.", long: "Cash is accepted at participating retail partners and at some IRS offices by appointment." },
    ] as Fact[],
  },
  cant: {
    title: "If you can't pay now",
    body: "There are options, and a new tool that helps with a tax debt.",
    list: [
      { label: "Option", line: "Pay over\ntime", icon: "time", body: "Payment plans let you pay your taxes over time.", long: "An individual sets up a payment plan in the Individual Account. A business contacts the phone number on its notice, or 800-829-4933, 7 a.m. to 7 p.m. local time." },
      { label: "Option", line: "Pay later", icon: "later", body: "You can ask the IRS to delay the collection process.", long: "If paying would leave you unable to meet basic living expenses, the IRS may report the account as currently not collectible; penalties and interest continue to accrue." },
      { label: "Option", line: "Pay less", icon: "less", body: "You can request an offer in compromise (OIC). This lets you settle your tax debt for less than the full amount.", long: "An individual requests an OIC in the Individual Account; a business follows the steps to submit an application." },
    ] as Fact[],
  },
  numbers: [
    { label: "Account", line: "20", fitClass: "fit--num", icon: "account", body: "Payments a day from the online account.", long: "Each saved to your profile with its confirmation, alongside your balance and history." },
    { label: "Direct Pay", line: "5", fitClass: "fit--num", icon: "guest", body: "Payments a day as a guest.", long: "Looked up afterwards by confirmation number; no account is created." },
    { label: "Bank account", line: "Free", icon: "bank", body: "No fee for a bank-account payment, in the online account or as a guest.", long: "Cards and wallets carry a processor's fee; a wire may carry your bank's." },
    { label: "Business help", line: "7–7", fitClass: "fit--num", icon: "help", body: "800-829-4933, 7 a.m. to 7 p.m. local time.", long: "For a business payment plan, call the number on your notice or this one." },
  ] as Fact[],
};

// --- Online account for individuals -----------------------------------------------

export const ACCOUNT: {
  title: string; crumbs: string[]; notice: { title: string; body: string }; intro: string; where: string; side: string[];
  features: { id: string; icon?: IconName; title: string; line: string; items: string[] }[]; numbers: Fact[]; related: string[]; asides: Fact[]; other: { title: string; items: string[] };
} = {
  title: "Online account for individuals",
  crumbs: ["Home", "File", "Individuals", "Your information"],
  notice: { title: "New: Form 4547, Trump Account Election(s)", body: "A Trump Account election can be submitted with Form 4547 in the online account, where its status is also shown." },
  intro: "The online account holds an individual's account information, including balance, payments, tax records and more.",
  where: "On IRS.gov this is where the online account begins, and a new user's identity is verified with photo identification. GIF;gov has no accounts and asks for no information.",
  side: ["Who should file", "Steps to file your taxes", "File your tax return", "Get an extension", "Amend return", "Your information", "Life events", "Students", "Employees", "Parents", "Military", "Seniors and retirees"],
  features: [
    { id: "records", icon: "records", title: "Tax records", line: "Tax\nrecords", items: ["Key tax return information, including adjusted gross income, and transcripts or a tax compliance report", "The status of a refund or an amended return", "Digital notices from the IRS", "Audit status (currently available for certain audits conducted by mail)", "Information return documents, such as Forms W-2 and certain 1099s"] },
    { id: "payments", icon: "pay", title: "Payments", line: "Payments", items: ["Same-day payments, or payments scheduled up to 365 days in advance, from a bank account", "Cancellation of a payment before its scheduled date", "Outside the account, guest payments and payments by debit or credit card", "Up to 5 years of payment history, including estimated tax payments", "Pending and scheduled payments"] },
    { id: "plans", icon: "plans", title: "Payment plans", line: "Payment\nplans", items: ["Payment plan options, and applications for a new payment plan", "The details of an existing payment plan, which can be revised", "A payment plan for the amount expected to be owed in the current tax year"] },
    { id: "balance", icon: "balance", title: "Balance", line: "Balance", items: ["Balances owed to the IRS by tax year"] },
    { id: "forms", icon: "forms", title: "Forms", line: "Forms", items: ["Select IRS forms, completed, signed and submitted online", "Form 4547, Trump Account Election(s), and its status"] },
    { id: "profile", icon: "profile", title: "Profile", line: "Profile", items: ["Paperless delivery of certain IRS notices", "Email notifications of new account information or activity", "The Identity Protection PIN (IP PIN)"] },
    { id: "authorizations", icon: "auth", title: "Authorizations", line: "Authori-\nzations", items: ["Authorization requests from lenders", "Power of Attorney and Tax Information Authorization from a tax professional, approved and signed electronically"] },
    { id: "accessibility", icon: "access", title: "Accessibility", line: "Access-\nibility", items: ["There are compatibility issues with some assistive technologies. Refer to the accessibility guide for help if you use a screen reader, screen magnifier or voice command software."] },
  ],
  numbers: [
    { label: "Schedule ahead", line: "365\ndays", fitClass: "fit--num", icon: "time", body: "Schedule a bank-account payment up to a year in advance.", long: "And cancel it any time before its scheduled date." },
    { label: "History", line: "5\nyears", fitClass: "fit--num", icon: "plans", body: "Of payment history, including estimated tax payments.", long: "With pending and scheduled payments listed alongside." },
    { label: "Transcript by mail", line: "1\nyear", fitClass: "fit--num", icon: "records", body: "Each account transcript covers a single tax year.", long: "And may not show the most recent penalties, interest, changes or pending actions." },
  ] as Fact[],
  related: ["Online account for individuals – Frequently asked questions", "Independent Office of Appeals", "Topic no. 653, IRS notices and bills, penalties and interest charges"],
  asides: [
    { label: "Need to pay?", line: "Need to\npay?", icon: "pay", body: "The payment options are set out on the payments page.", long: "By bank account, card, wallet, wire, check or cash; a bank-account payment is free.", href: "./payments.html", cta: "Payments" },
    { label: "What if I can't pay?", line: "Can't\npay?", icon: "less", body: "An offer in compromise can settle a tax debt for less than is owed.", long: "A payment plan, or a delay in collection, are the other options.", href: "./payments.html#cant", cta: "If you can't pay now" },
    { label: "What if I don't pay?", line: "Don't\npay?", icon: "alert", body: "The IRS can take certain actions to collect unpaid taxes.", long: "Notices and bills come first, with penalties and interest; liens and levies follow if the debt is not resolved." },
  ] as Fact[],
  other: {
    title: "Other ways to find your account information",
    items: ["You can request an account transcript by mail. Note that each account transcript only covers a single tax year, and may not show the most recent penalties, interest, changes or pending actions.", "If you're a business, or an individual who filed a form other than 1040, you can obtain a transcript by submitting Form 4506-T, Request for Transcript of Tax Return."],
  },
};

export const FOOTER: [string, string[]][] = [
  ["Our agency", ["About IRS", "Careers", "Financial and Budget Reports", "Tax Statistics", "Help", "Find a Local Office"]],
  ["Know your rights", ["Taxpayer Bill of Rights", "Taxpayer Advocate Service", "Independent Office of Appeals", "Civil Rights", "FOIA", "No FEAR Act Data", "Reliance on Guidance"]],
  ["Resolve an issue", ["IRS Notices and Letters", "Identity Theft", "Tax scams", "Tax Fraud", "Criminal Investigation", "Whistleblower Office"]],
  ["Languages", ["Español", "中文 (简体)", "中文 (繁體)", "한국어", "Русский", "Tiếng Việt", "Kreyòl ayisyen", "English"]],
];
