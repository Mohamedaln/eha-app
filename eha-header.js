import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./eha-nav-menu.js";

const logoUrl1 = new URL("./logo.png", import.meta.url).href;

class EhaHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-header";
  }

  constructor() {
    super();
    this.pg1 = "home";
    this.drk1 = false;
    this.menuOpen1 = false;
  }

  static get properties() {
    return {
      ...super.properties,
      pg1: { type: String },
      drk1: { type: Boolean },
      menuOpen1: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .hdr1 {
        background-color: #0a0a0a;
        border-bottom: var(--ddd-border-md) solid #c9a84c;
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-between !important;
        position: sticky;
        top: 0;
        z-index: 100;
      }

      .hdr1.lgt1 {
        background-color: #ffffff;
      }

      .hdr1.lgt1 .logoTxt1 {
        color: #102033;
      }

      .hdr1.lgt1 .logoTxt1 span {
        color: #c9a84c;
      }

      .hdr1.lgt1 .navLinks1 a {
        color: #102033;
      }

      .hdr1.lgt1 .navLinks1 a:hover {
        color: #c9a84c;
      }

      .hdr1.lgt1 .navLinks1 a.act1 {
        color: #c9a84c;
      }

      .hdr1.lgt1 .drkBtn1 {
        background: #102033;
        color: #f5f5f5;
        border: var(--ddd-border-sm) solid #102033;
      }

      .logo1 {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: var(--ddd-spacing-2);
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        text-align: left;
      }

      .logoCirc1 {
        width: var(--ddd-spacing-8);
        height: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-circle);
        background: var(--eha-accent);
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-weight: bold;
        color: var(--eha-surface);
        font-size: var(--ddd-font-size-s);
        flex-shrink: 0;
      }

      .logoTxt1 {
        color: #f5f5f5;
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .logoTxt1 span { color: #c9a84c; }

      /* fix: force ul to be horizontal row */
      .navLinks1 {
        display: flex !important;
        flex-direction: row !important;
        gap: var(--ddd-spacing-4);
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
        align-items: center !important;
      }

      .navLinks1 li {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .navLinks1 a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: var(--ddd-font-size-s);
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        white-space: nowrap;
      }

      .navLinks1 a:hover { color: #c9a84c; }
      .navLinks1 a.act1 { color: #c9a84c; border-bottom: var(--ddd-border-md) solid #c9a84c; }

      .right1 {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: var(--ddd-spacing-3);
        flex-shrink: 0;
      }

      .drkBtn1 {
        background: var(--eha-surface-2);
        border: var(--ddd-border-sm) solid var(--eha-border);
        color: #f5f5f5;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        white-space: nowrap;
      }

      .regBtn1 {
        background: var(--eha-accent);
        border: none;
        color: var(--eha-surface);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
        white-space: nowrap;
      }

      .regBtn1:hover { background: var(--eha-accent-strong); }

      .hambBtn1 {
        display: none;
        background: none;
        border: none;
        color: #f5f5f5;
        font-size: var(--ddd-font-size-xl);
        cursor: pointer;
      }

      .mobMenu1 {
        display: none;
        background: #0a0a0a;
        padding: var(--ddd-spacing-4);
        border-bottom: var(--ddd-border-sm) solid #c9a84c;
      }

      .img1 { width: var(--ddd-spacing-8); height: var(--ddd-spacing-8); border-radius:var(--ddd-radius-circle); object-fit:cover; }
      .box1 { margin-top: var(--ddd-spacing-6); }
      .mobOpen1 { display:block; }

      .mobMenu1 a {
        display: block;
        color: #f5f5f5;
        text-decoration: none;
        padding: var(--ddd-spacing-2) 0;
        font-size: var(--ddd-font-size-s);
        border-bottom: var(--ddd-border-sm) solid #1a2a3a;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
      }

      .mobMenu1 a:hover { color: #c9a84c; }

      @media (max-width: 768px) {
        .navLinks1 { display: none !important; }
        .hambBtn1 { display: block !important; }
        .drkBtn1 { display: none; }
      }
    `];
  }

  navTo1(pg) {
    this.dispatchEvent(new CustomEvent("go-to", {
      bubbles: true, composed: true,
      detail: { pg1: pg }
    }));
    this.menuOpen1 = false;
  }

  tglDrk1() {
    this.dispatchEvent(new CustomEvent("toggle-dark", {
      bubbles: true, composed: true
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    this._key1 = (e) => {
      if (e.key === "Escape") {
        this.menuOpen1 = false;
        this.requestUpdate();
      }
    };
    document.addEventListener("keydown", this._key1);
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this._key1);
    super.disconnectedCallback();
  }

  render() {
    var cls1 = this.drk1 ? "hdr1" : "hdr1 lgt1";
    return html`
      <div class="${cls1}">
        <button type="button" class="logo1" aria-label="go to home page" @click="${(e) => { e.preventDefault(); this.navTo1('home'); }}">
          <img src="${logoUrl1}" alt="EHA logo" class="img1" />
          <div class="logoTxt1">Elite <span>Hoops</span> Alliance</div>
          </button>

        <ul class="navLinks1">
          <li><a href="?page=home" class="${this.pg1 === 'home' ? 'act1' : ''}" @click="${(e) => { e.preventDefault(); this.navTo1('home'); }}">home</a></li>
          <li><a href="?page=schedule" class="${this.pg1 === 'schedule' ? 'act1' : ''}" @click="${(e) => { e.preventDefault(); this.navTo1('schedule'); }}">schedule</a></li>
          <li><a href="?page=programs" class="${this.pg1 === 'programs' ? 'act1' : ''}" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">programs</a></li>
          <li><a href="?page=about" class="${this.pg1 === 'about' ? 'act1' : ''}" @click="${(e) => { e.preventDefault(); this.navTo1('about'); }}">about</a></li>
          <li><eha-nav-menu @go-to="${(e) => this.navTo1(e.detail.pg1)}"></eha-nav-menu></li>
        </ul>

        <div class="right1">
          <button class="drkBtn1" @click="${this.tglDrk1}">
            ${this.drk1 ? 'light' : 'dark'}
          </button>
          <button class="regBtn1" @click="${() => this.navTo1('programs')}">register now</button>
          <button class="hambBtn1" aria-label="${this.menuOpen1 ? 'close menu' : 'open menu'}" aria-expanded="${this.menuOpen1 ? 'true' : 'false'}" @click="${() => { this.menuOpen1 = !this.menuOpen1; this.requestUpdate(); }}">&#9776;</button>
        </div>
      </div>

      ${this.menuOpen1 ? html`
        <div class="mobMenu1 mobOpen1">
          <a href="?page=home" @click="${(e) => { e.preventDefault(); this.navTo1('home'); }}">home</a>
          <a href="?page=schedule" @click="${(e) => { e.preventDefault(); this.navTo1('schedule'); }}">schedule</a>
          <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">programs</a>
          <a href="?page=about" @click="${(e) => { e.preventDefault(); this.navTo1('about'); }}">about</a>
          <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">register</a>
        </div>
      ` : ``}
    `;
  }
}

if (!customElements.get("eha-header")) {
  customElements.define("eha-header", EhaHeader);
}