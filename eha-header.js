import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./eha-nav-menu.js";

class EhaHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-header";
  }

  constructor() {
    super();
    this.pg1 = "home";
    this.menuOpen1 = false;
  }

  static get properties() {
    return {
      ...super.properties,
      pg1: { type: String },
      menuOpen1: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .hdr1 {
        background: #0a0a0a;
        border-bottom: 2px solid #c9a84c;
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 100;
      }

      .logo1 {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        cursor: pointer;
      }

      .logoCirc1 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #c9a84c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #0a0a0a;
        font-size: 15px;
      }

      .logoTxt1 {
        color: #f5f5f5;
        font-size: 16px;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .logoTxt1 span { color: #c9a84c; }

      .navLinks1 {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: var(--ddd-spacing-4);
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .navLinks1 li {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
      }

      .navLinks1 a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 14px;
        font-family: var(--ddd-font-navigation);
        cursor: pointer;
      }

      .navLinks1 a:hover { color: #c9a84c; }
      .navLinks1 a.act1 { color: #c9a84c; }

      .regBtn1 {
        background: #c9a84c;
        border: none;
        color: #0a0a0a;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
        font-size: 13px;
      }

      .hambBtn1 {
        display: none;
        background: none;
        border: none;
        color: #f5f5f5;
        font-size: 24px;
        cursor: pointer;
      }

      .mobMenu1 {
        display: none;
        background: #0d1b2a;
        padding: var(--ddd-spacing-4);
        border-bottom: 1px solid #c9a84c;
      }

      .mobMenu1.open1 { display: block; }

      .mobMenu1 a {
        display: block;
        color: #f5f5f5;
        text-decoration: none;
        padding: var(--ddd-spacing-2) 0;
        font-size: 15px;
        border-bottom: 1px solid #1a1a2e;
        cursor: pointer;
        font-family: var(--ddd-font-navigation);
      }

      .mobMenu1 a:hover { color: #c9a84c; }

      @media (max-width: 768px) {
        .navLinks1 { display: none; }
        .hambBtn1 { display: block; }
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

  render() {
    return html`
      <div class="hdr1">
        <div class="logo1" @click="${() => this.navTo1('home')}">
          <div class="logoCirc1">EHA</div>
          <div class="logoTxt1">Elite <span>Hoops</span> Alliance</div>
        </div>

        <ul class="navLinks1">
          <li><a class="${this.pg1 === 'home' ? 'act1' : ''}" @click="${() => this.navTo1('home')}">home</a></li>
          <li><a class="${this.pg1 === 'schedule' ? 'act1' : ''}" @click="${() => this.navTo1('schedule')}">schedule</a></li>
          <li><a class="${this.pg1 === 'programs' ? 'act1' : ''}" @click="${() => this.navTo1('programs')}">programs</a></li>
          <li><a class="${this.pg1 === 'about' ? 'act1' : ''}" @click="${() => this.navTo1('about')}">about</a></li>
          <li><eha-nav-menu @go-to="${(e) => this.navTo1(e.detail.pg1)}"></eha-nav-menu></li>
        </ul>

        <button class="regBtn1" @click="${() => this.navTo1('programs')}">register now</button>
        <button class="hambBtn1" @click="${() => this.menuOpen1 = !this.menuOpen1}">&#9776;</button>
      </div>

      <div class="mobMenu1 ${this.menuOpen1 ? 'open1' : ''}">
        <a @click="${() => this.navTo1('home')}">home</a>
        <a @click="${() => this.navTo1('schedule')}">schedule</a>
        <a @click="${() => this.navTo1('programs')}">programs</a>
        <a @click="${() => this.navTo1('about')}">about</a>
        <a @click="${() => this.navTo1('programs')}">register</a>
      </div>
    `;
  }
}

customElements.define("eha-header", EhaHeader);