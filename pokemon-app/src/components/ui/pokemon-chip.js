import { LitElement, html, css } from "lit";

export class PokemonChip extends LitElement {
  static properties = {
    title: {
      type: String
    }
  }
  
  static styles = css`
    .chip {
      background: #ffc93c;
      font-size: 14px;
      padding: 4px 12px;
      border-radius: 16px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <span class="chip">
        ${this.title}
      </span>
    `
  }
}

customElements.define('pokemon-chip', PokemonChip);