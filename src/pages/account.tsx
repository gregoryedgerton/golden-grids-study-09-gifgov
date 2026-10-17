import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { FeaturesBand, FactsBand } from "../bands/bands";
import { AccountIntro, AccountRelated, OtherWays, Reviewed } from "../lib/modules";
import { ACCOUNT } from "../content";
import "../styles.css";

function App() {
  useFontsReady(["700 1em 'Source Sans 3'", "400 1em 'Source Sans 3'"]);
  return (
    <Page current="account.html" crumbs={[...ACCOUNT.crumbs, ACCOUNT.title]} side={ACCOUNT.side} sideTitle="Your information">
      <h1 className="title">{ACCOUNT.title}</h1>
      <AccountIntro />
      <FeaturesBand id="features" title="What the account holds" lesson="Records, payments, plans and the balance: the four things an account is for, each with the reference's own list behind More." features={ACCOUNT.features.slice(0, 4)} desktop={["left", false]} mobile={["bottom", false]} />
      <FactsBand id="limits" title="By the numbers" facts={ACCOUNT.numbers} desktop={["bottom", true]} mobile={["left", true]} />
      <FeaturesBand id="more" title="Forms, profile, authorizations, accessibility" lesson="The rest of the account's sections, including the IRS's own note on assistive technology." features={ACCOUNT.features.slice(4)} desktop={["right", true]} mobile={["top", true]} />
      <FactsBand id="asides" title="Paying, and not paying" lesson="The three questions the reference answers in its side column." facts={ACCOUNT.asides} desktop={["top", false]} mobile={["left", false]} />
      <AccountRelated />
      <OtherWays />
      <Reviewed page="account" />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
