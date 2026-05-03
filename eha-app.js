import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./eha-header.js";
import "./eha-hero.js";
import "./eha-stats-band.js";
import "./eha-schedule.js";
import "./eha-news-card.js";
import "./eha-program-card.js";
import "./eha-sponsors.js";
import "./eha-about.js";
import "./eha-footer.js";
import "./eha-nav-menu.js";
import "./eha-cta.js";

class EhaApp extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-app";
  }

  constructor() {
    super();
    this.pg1 = "home";
    this.drk1 = false;
  }

  static get properties() {
    return {
      ...super.properties,
      pg1: { type: String },
      drk1: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        font-family: var(--ddd-font-navigation);
        background: var(--eha-page-bg);
        color: var(--eha-page-text);
      }

      .wrap1 {
        background: var(--eha-page-bg);
        min-height: 100vh;
        color: var(--eha-page-text);
      }

      .wrap1.drk1 {
        background: var(--eha-page-bg);
        color: var(--eha-page-text);
      }

      .pgHead1 {
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6) var(--ddd-spacing-4);
        max-width: var(--ddd-spacing-max-width);
        margin: auto;
        border-bottom: var(--ddd-border-sm) solid var(--eha-border);
        margin-bottom: var(--ddd-spacing-6);
      }

      .pgHead1 h1 {
        color: var(--eha-accent);
        font-size: var(--ddd-font-size-2xl);
        font-family: var(--ddd-font-navigation);
        margin: 0;
      }

      .pgContent1 {
        max-width: var(--ddd-spacing-max-width);
        margin: auto;
        padding: 0 var(--ddd-spacing-6) var(--ddd-spacing-10);
      }

      .pgGrid1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: var(--ddd-spacing-5);
      }

      .pgCard1 {
        background: var(--eha-surface);
        border: var(--ddd-border-sm) solid var(--eha-border);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-5);
      }

      .pgCard1:hover { border-color: var(--eha-accent); }

      .pgCard1 h3 {
        color: var(--eha-accent);
        font-family: var(--ddd-font-navigation);
        margin: 0 0 var(--ddd-spacing-2) 0;
        font-size: var(--ddd-font-size-s);
      }

      .pgCard1 p {
        color: var(--eha-muted);
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        margin: 0;
        line-height: 1.6;
      }

      .newsRow1 {
        display: flex;
        gap: var(--ddd-spacing-4);
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
        max-width: var(--ddd-spacing-max-width);
        margin: auto;
        flex-wrap: wrap;
      }

      .box1 { margin-top: var(--ddd-spacing-6); }
    `];
  }

  syncTheme1() {
    var dark1 = this.drk1;
    if (dark1) {
      this.style.setProperty("--eha-page-bg", "#0a0a0a");
      this.style.setProperty("--eha-surface", "#0d1b2a");
      this.style.setProperty("--eha-surface-2", "#111d2c");
      this.style.setProperty("--eha-page-text", "#f5f5f5");
      this.style.setProperty("--eha-muted", "#aaa");
      this.style.setProperty("--eha-border", "#1a2a3a");
      this.style.setProperty("--eha-accent", "#c9a84c");
      this.style.setProperty("--eha-accent-strong", "#b8973b");
    } else {
      this.style.setProperty("--eha-page-bg", "#f6f7fb");
      this.style.setProperty("--eha-surface", "#ffffff");
      this.style.setProperty("--eha-surface-2", "#edf1f7");
      this.style.setProperty("--eha-page-text", "#102033");
      this.style.setProperty("--eha-muted", "#5d6b7d");
      this.style.setProperty("--eha-border", "#d7dde7");
      this.style.setProperty("--eha-accent", "#a97b1f");
      this.style.setProperty("--eha-accent-strong", "#8f6512");
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkPg1();
    window.addEventListener("popstate", () => {
      this.checkPg1();
    });
    var sys1 = window.matchMedia('(prefers-color-scheme: dark)');
    this.drk1 = sys1.matches;
    this.syncTheme1();
    sys1.addEventListener('change', (e) => {
      this.drk1 = e.matches;
      this.syncTheme1();
      this.requestUpdate();
    });
  }

  checkPg1() {
    var url1 = new URLSearchParams(window.location.search);
    var p1 = url1.get("page");
    if (p1) {
      this.pg1 = p1;
    } else {
      this.pg1 = "home";
    }
  }

  goTo1(pg) {
    this.pg1 = pg;
    window.history.pushState({}, "", "?page=" + pg);
  }

  tglDrk1() {
    this.drk1 = !this.drk1;
    this.syncTheme1();
  }

  renderHome1() {
    return html`
      <eha-hero .drk1="${this.drk1}"></eha-hero>
      <eha-stats-band></eha-stats-band>
      <eha-schedule></eha-schedule>
      <div class="newsRow1">
        <eha-news-card
          ttl1="EHA Wins Regional Championship"
          dt1="March 15, 2026"
          txt1="Our 14U team took home the gold at the regional tournament"
          lnk1="?page=home"
        ></eha-news-card>
        <eha-news-card
          ttl1="Summer Camp Registration Open"
          dt1="February 28, 2026"
          txt1="Sign up now for our elite summer training camp"
          lnk1="?page=programs"
        ></eha-news-card>
        <eha-news-card
          ttl1="New Coaching Staff Announced"
          dt1="January 10, 2026"
          txt1="We are excited to welcome three new coaches to EHA"
          lnk1="?page=about"
        ></eha-news-card>
      </div>
      <eha-about></eha-about>
      <eha-sponsors></eha-sponsors>
    `;
  }

  renderSchedule1() {
    return html`
      <div class="pgHead1"><h1>game schedule</h1></div>
      <div class="pgContent1"><eha-schedule></eha-schedule></div>
    `;
  }

  renderAbout1() {
    return html`
      <div class="pgHead1"><h1>about EHA</h1></div>
      <div class="pgContent1">
        <eha-about></eha-about>
          <div class="box1"><eha-stats-band></eha-stats-band></div>
      </div>
    `;
  }

  renderPrograms1() {
    return html`
      <div class="pgHead1"><h1>our programs</h1></div>
      <div class="pgContent1">
        <div class="pgGrid1">
          <eha-program-card
            ttl1="8U division"
            txt1="for players ages 6 to 8. focus on fundamentals and fun"
          ></eha-program-card>
          <eha-program-card
            ttl1="10U division"
            txt1="for players ages 9 to 10. building team skills and game sense"
          ></eha-program-card>
          <eha-program-card
            ttl1="12U division"
            txt1="for players ages 11 to 12. competitive play with skill development"
          ></eha-program-card>
          <eha-program-card
            ttl1="14U division"
            txt1="for players ages 13 to 14. elite training and tournament play"
          ></eha-program-card>
          <eha-program-card
            ttl1="18U division"
            txt1="for players ages 15 to 18. college prep level training"
          ></eha-program-card>
          <eha-program-card
            ttl1="summer camp"
            txt1="intensive summer training open to all ages. limited spots available"
          ></eha-program-card>
        </div>
      </div>
    `;
  }

  render() {
    var pg1Content = ``;
    if (this.pg1 === "home") {
      pg1Content = this.renderHome1();
    } else if (this.pg1 === "schedule") {
      pg1Content = this.renderSchedule1();
    } else if (this.pg1 === "about") {
      pg1Content = this.renderAbout1();
    } else if (this.pg1 === "programs") {
      pg1Content = this.renderPrograms1();
    } else {
      pg1Content = this.renderHome1();
    }

    // dark mode class on the wrapper div
    var wrapCls1 = this.drk1 ? "wrap1 drk1" : "wrap1";

    return html`
      <eha-header
        .pg1="${this.pg1}"
        .drk1="${this.drk1}"
        @go-to="${(e) => this.goTo1(e.detail.pg1)}"
        @toggle-dark="${this.tglDrk1}"
      ></eha-header>

      <div class="${wrapCls1}" @go-to="${(e) => this.goTo1(e.detail.pg1)}">
        ${pg1Content}
      </div>

      <eha-footer
        @go-to="${(e) => this.goTo1(e.detail.pg1)}"
      ></eha-footer>
    `;
  }
}

if (!customElements.get("eha-app")) {
  customElements.define("eha-app", EhaApp);
}