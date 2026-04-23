import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class EhaFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "eha-footer";
  }

  static get styles() {
    return [super.styles,
    css`
      :host { display: block; }

      .ft1 {
        background: #050505;
        border-top: 2px solid #c9a84c;
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
        color: #c9a84c;
        font-size: 12px;
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      .col1 a {
        display: block;
        color: #888;
        font-size: 13px;
        font-family: var(--ddd-font-navigation);
        text-decoration: none;
        margin-bottom: var(--ddd-spacing-2);
        cursor: pointer;
      }

      .col1 a:hover { color: #c9a84c; }

      .col1 p {
        color: #888;
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
        background: #c9a84c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: bold;
        color: #0a0a0a;
      }

      .logoTxt1 {
        color: #f5f5f5;
        font-size: 14px;
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .btm1 {
        border-top: 1px solid #111;
        padding-top: var(--ddd-spacing-4);
        text-align: center;
        color: #444;
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
              <div class="logoCirc1">EHA</div>
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

customElements.define("eha-footer", EhaFooter);