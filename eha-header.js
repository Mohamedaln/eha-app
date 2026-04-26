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
        background: var(--eha-surface);
        border-bottom: 2px solid var(--eha-border);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-between !important;
        position: sticky;
        top: 0;
        z-index: 100;
      }

      .logo1 {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: var(--ddd-spacing-2);
        cursor: pointer;
      }

      .logoCirc1 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--eha-accent);
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-weight: bold;
        color: var(--eha-surface);
        font-size: 15px;
        flex-shrink: 0;
      }

      .logoTxt1 {
        color: var(--eha-page-text);
        font-size: 16px;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .logoTxt1 span { color: var(--eha-accent); }

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
        color: var(--eha-page-text);
        text-decoration: none;
        font-size: 14px;
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: 4px;
        white-space: nowrap;
      }

      .navLinks1 a:hover { color: var(--eha-accent); }
      .navLinks1 a.act1 { color: var(--eha-accent); border-bottom: 2px solid var(--eha-accent); }

      .right1 {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: var(--ddd-spacing-3);
        flex-shrink: 0;
      }

      .drkBtn1 {
        background: var(--eha-surface-2);
        border: 1px solid var(--eha-border);
        color: var(--eha-page-text);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        font-family: var(--ddd-font-navigation);
        white-space: nowrap;
      }

      .regBtn1 {
        background: var(--eha-accent);
        border: none;
        color: var(--eha-surface);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
        font-size: 13px;
        white-space: nowrap;
      }

      .regBtn1:hover { background: var(--eha-accent-strong); }

      .hambBtn1 {
        display: none;
        background: none;
        border: none;
        color: var(--eha-page-text);
        font-size: 24px;
        cursor: pointer;
      }

      .mobMenu1 {
        display: none;
        background: var(--eha-surface);
        padding: var(--ddd-spacing-4);
        border-bottom: 1px solid var(--eha-border);
      }

      .mobMenu1 a {
        display: block;
        color: var(--eha-page-text);
        text-decoration: none;
        padding: var(--ddd-spacing-2) 0;
        font-size: 15px;
        border-bottom: 1px solid var(--eha-border);
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
      }

      .mobMenu1 a:hover { color: var(--eha-accent); }

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

  render() {
    return html`
      <div class="hdr1">
        <div class="logo1" @click="${() => this.navTo1('home')}">
          <img src="${logoUrl1}" alt="EHA logo" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" />
          <div class="logoTxt1">Elite <span>Hoops</span> Alliance</div>
          </div>

        <ul class="navLinks1">
          <li><a class="${this.pg1 === 'home' ? 'act1' : ''}" @click="${() => this.navTo1('home')}">home</a></li>
          <li><a class="${this.pg1 === 'schedule' ? 'act1' : ''}" @click="${() => this.navTo1('schedule')}">schedule</a></li>
          <li><a class="${this.pg1 === 'programs' ? 'act1' : ''}" @click="${() => this.navTo1('programs')}">programs</a></li>
          <li><a class="${this.pg1 === 'about' ? 'act1' : ''}" @click="${() => this.navTo1('about')}">about</a></li>
          <li><eha-nav-menu @go-to="${(e) => this.navTo1(e.detail.pg1)}"></eha-nav-menu></li>
        </ul>

        <div class="right1">
          <button class="drkBtn1" @click="${this.tglDrk1}">
            ${this.drk1 ? 'light' : 'dark'}
          </button>
          <button class="regBtn1" @click="${() => this.navTo1('programs')}">register now</button>
          <button class="hambBtn1" @click="${() => { this.menuOpen1 = !this.menuOpen1; this.requestUpdate(); }}">&#9776;</button>
        </div>
      </div>

      ${this.menuOpen1 ? html`
        <div class="mobMenu1" style="display:block;">
          <a @click="${() => this.navTo1('home')}">home</a>
          <a @click="${() => this.navTo1('schedule')}">schedule</a>
          <a @click="${() => this.navTo1('programs')}">programs</a>
          <a @click="${() => this.navTo1('about')}">about</a>
          <a @click="${() => this.navTo1('programs')}">register</a>
        </div>
      ` : ``}
    `;
  }
}

if (!customElements.get("eha-header")) {
  customElements.define("eha-header", EhaHeader);
}