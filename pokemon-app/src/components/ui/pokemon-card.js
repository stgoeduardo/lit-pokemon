import { LitElement, html } from "lit";
import { mainStyles } from "../../styles/styles";
import { cardStyles } from "../../styles/card-styles";
import './pokemon-chip.js';

export class PokemonCard extends LitElement {
  static properties = {
    item: {
      type: Object
    }
  }
  
  static styles = [
    mainStyles,
    cardStyles
  ];

  constructor() {
    super();
  }

  _cardClick(item) {
    this.dispatchEvent(new CustomEvent('card-click', {
      detail: item,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <section
        class="border-box card cursor-pointer"
        @click="${() => this._cardClick(this.item)}">
        <div class="card__container d-flex d-flex-col d-flex-items-center border-box">
          <div class="card__container-img">
            <img
              src="${this.item.image}"
              alt="${this.item.id}"
              onerror="this.onerror=null;this.src='./src/assets/img/logo/unknown-pokemon.png';"
            >
          </div>
          <div class="card__container-title w-full border-box">
            <p class="card__container-title-text font-w-700">
              ${this.item?.name}
            </p>
          </div>
          <div class="card__container-features w-full border-box d-flex d-flex-wrap">
            ${this.item?.powers?.map(
              (power) => html`
                <pokemon-chip .title=${power}></pokemon-chip>
              `
            )}
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('pokemon-card', PokemonCard);