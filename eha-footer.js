import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

const logoUrl1 = new URL("./logo.png", import.meta.url).href;

class EhaFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-footer";
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .ft1 {
        background: var(--eha-surface-2);
        border-top: 2px solid var(--eha-border);
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6) var(--ddd-spacing-6);
      }

      .ftTop1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: var(--ddd-spacing-8);
        max-width: 1100px;
        margin: 0 auto var(--ddd-spacing-8);
      }

      .col1 h4 {
        color: var(--eha-accent);
        font-size: 12px;
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      .col1 a {
        display: block;
        color: var(--eha-muted);
        font-size: 13px;
        font-family: var(--ddd-font-navigation);
        text-decoration: none;
        margin-bottom: var(--ddd-spacing-2);
        cursor: pointer;
      }

      .col1 a:hover { color: var(--eha-accent); }

      .col1 p {
        color: var(--eha-muted);
        font-size: 13px;
        font-family: var(--ddd-font-navigation);
        line-height: 1.6;
        margin: 0;
      }

      .logoRow1 {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-3);
      }

      .logoCirc1 {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: var(--eha-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: bold;
        color: var(--eha-surface);
      }

      .logoTxt1 {
        color: var(--eha-page-text);
        font-size: 14px;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .btm1 {
        border-top: 1px solid var(--eha-border);
        padding-top: var(--ddd-spacing-4);
        text-align: center;
        color: var(--eha-muted);
        font-size: 12px;
        font-family: var(--ddd-font-navigation);
        max-width: 1100px;
        margin: 0 auto;
      }
    `];
  }

  navTo1(pg) {
    this.dispatchEvent(new CustomEvent("go-to", {
      bubbles: true, composed: true,
      detail: { pg1: pg }
    }));
  }

  render() {
    return html`
      <div class="ft1">
        <div class="ftTop1">
          <div class="col1">
            <div class="logoRow1">
              <img src="${logoUrl1}" alt="EHA logo" style="width:34px;height:34px;border-radius:50%;object-fit:cover;" />
              <div class="logoTxt1">Elite Hoops Alliance</div>
            </div>
            <p>where champions are made. developing youth basketball players since 2010.</p>
          </div>
          <div class="col1">
            <h4>quick links</h4>
            <a @click="${() => this.navTo1('home')}">home</a>
            <a @click="${() => this.navTo1('schedule')}">schedule</a>
            <a @click="${() => this.navTo1('programs')}">programs</a>
            <a @click="${() => this.navTo1('about')}">about us</a>
          </div>
          <div class="col1">
            <h4>programs</h4>
            <a @click="${() => this.navTo1('programs')}">8U division</a>
            <a @click="${() => this.navTo1('programs')}">10U division</a>
            <a @click="${() => this.navTo1('programs')}">12U division</a>
            <a @click="${() => this.navTo1('programs')}">14U division</a>
            <a @click="${() => this.navTo1('programs')}">18U division</a>
          </div>
          <div class="col1">
            <h4>contact</h4>
            <p>PO Box 2026<br>State College, PA 16801<br><br>info@elitehoopsalliance.org</p>
          </div>
        </div>
        <div class="btm1">&copy; 2026 Elite Hoops Alliance. all rights reserved.</div>
      </div>
    `;
  }
}

if (!customElements.get("eha-footer")) {
  customElements.define("eha-footer", EhaFooter);
}