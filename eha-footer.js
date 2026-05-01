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
        border-top: var(--ddd-border-sm) solid var(--eha-border);
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6) var(--ddd-spacing-6);
      }

      .ftTop1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: var(--ddd-spacing-8);
        max-width: var(--ddd-spacing-max-width);
        margin: 0 auto var(--ddd-spacing-8);
      }

      .col1 h4 {
        color: var(--eha-accent);
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        text-transform: uppercase;
        letter-spacing: var(--ddd-ls-sm);
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      .col1 a {
        display: block;
        color: var(--eha-page-text);
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        text-decoration: none;
        margin-bottom: var(--ddd-spacing-2);
        cursor: pointer;
      }

      .col1 a:hover { color: var(--eha-accent); }

      .col1 p {
        color: var(--eha-page-text);
        font-size: var(--ddd-font-size-xs);
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

      .img1 { width: var(--ddd-spacing-7); height: var(--ddd-spacing-7); border-radius:var(--ddd-radius-circle); object-fit:cover; }

      .logoCirc1 {
        width: var(--ddd-spacing-7);
        height: var(--ddd-spacing-7);
        border-radius: var(--ddd-radius-circle);
        background: var(--eha-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--ddd-font-size-xs);
        font-weight: bold;
        color: var(--eha-surface);
      }

      .logoTxt1 {
        color: var(--eha-page-text);
        font-size: var(--ddd-font-size-s);
        font-weight: bold;
        font-family: var(--ddd-font-navigation);
      }

      .btm1 {
        border-top: var(--ddd-border-sm) solid var(--eha-border);
        padding-top: var(--ddd-spacing-4);
        text-align: center;
        color: var(--eha-page-text);
        font-size: var(--ddd-font-size-xs);
        font-family: var(--ddd-font-navigation);
        max-width: var(--ddd-spacing-max-width);
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
              <img src="${logoUrl1}" alt="EHA logo" class="img1" />
              <div class="logoTxt1">Elite Hoops Alliance</div>
            </div>
            <p>where champions are made. developing youth basketball players since 2010.</p>
          </div>
          <div class="col1">
            <h4>quick links</h4>
            <a href="?page=home" @click="${(e) => { e.preventDefault(); this.navTo1('home'); }}">home</a>
            <a href="?page=schedule" @click="${(e) => { e.preventDefault(); this.navTo1('schedule'); }}">schedule</a>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">programs</a>
            <a href="?page=about" @click="${(e) => { e.preventDefault(); this.navTo1('about'); }}">about us</a>
          </div>
          <div class="col1">
            <h4>programs</h4>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">8U division</a>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">10U division</a>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">12U division</a>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">14U division</a>
            <a href="?page=programs" @click="${(e) => { e.preventDefault(); this.navTo1('programs'); }}">18U division</a>
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