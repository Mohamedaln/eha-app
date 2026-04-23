import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./eha-header.js";
import "./eha-hero.js";
import "./eha-stats-band.js";
import "./eha-schedule.js";
import "./eha-news-card.js";
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
  }

  static get properties() {
    return {
      ...super.properties,
      pg1: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background: #0a0a0a;
        color: #f5f5f5;
        min-height: 100vh;
        font-family: var(--ddd-font-navigation);
      }
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    var url1 = new URLSearchParams(window.location.search);
    var p1 = url1.get("page");
    if (p1) {
      this.pg1 = p1;
    }
  }

  goTo1(pg) {
    this.pg1 = pg;
    window.history.pushState({}, "", "?page=" + pg);
  }

  render() {
    return html`
      <eha-header
        .pg1="${this.pg1}"
        @go-to="${(e) => this.goTo1(e.detail.pg1)}"
      ></eha-header>

      <eha-hero></eha-hero>
      <eha-stats-band></eha-stats-band>
      <eha-schedule></eha-schedule>

      <div style="display:flex;gap:16px;padding:32px 16px;max-width:1100px;margin:auto;flex-wrap:wrap;">
        <eha-news-card
          ttl1="EHA Wins Regional Championship"
          dt1="March 15, 2025"
          txt1="Our 14U team took home the gold at the regional tournament"
          lnk1="?page=home"
        ></eha-news-card>
        <eha-news-card
          ttl1="Summer Camp Registration Open"
          dt1="February 28, 2025"
          txt1="Sign up now for our elite summer training camp"
          lnk1="?page=programs"
        ></eha-news-card>
        <eha-news-card
          ttl1="New Coaching Staff Announced"
          dt1="January 10, 2025"
          txt1="We are excited to welcome three new coaches to EHA"
          lnk1="?page=about"
        ></eha-news-card>
      </div>

      <eha-about></eha-about>
      <eha-sponsors></eha-sponsors>

      <eha-footer
        @go-to="${(e) => this.goTo1(e.detail.pg1)}"
      ></eha-footer>
    `;
  }
}

customElements.define("eha-app", EhaApp);