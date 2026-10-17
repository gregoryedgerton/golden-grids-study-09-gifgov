import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { useFontsReady } from "../lib/fonts";
import { HeroBand, FactsBand } from "../bands/bands";
import { HomeNotice, AppCard, DebtHelp, HelpContact } from "../lib/modules";
import { HERO, TOPICS, NEWS } from "../content";
import "../styles.css";

function App() {
  useFontsReady(["700 1em 'Source Sans 3'", "400 1em 'Source Sans 3'"]);
  return (
    <Page current="index.html">
      <HomeNotice />
      <h1 className="visually-hidden">Home</h1>
      <div className="hero-row">
        <HeroBand title={HERO.title} label={HERO.label} body={HERO.body} page={HERO.page} features={HERO.features} />
        <AppCard />
      </div>
      <DebtHelp />
      <FactsBand id="topics" title="Popular topics" lesson="The six things people come to the site for: paying, filing free, records, an employer number, withholding and amending. Each opens, or goes to its page." facts={TOPICS} desktop={["right", true]} mobile={["top", true]} />
      <HelpContact />
      <FactsBand id="news" title="News & announcements" lesson="The five items the reference rotates through a carousel, here all at once." facts={NEWS} desktop={["bottom", false]} mobile={["left", false]} />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
