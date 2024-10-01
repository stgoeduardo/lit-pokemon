import { LitElement, html } from "lit";
import { mainStyles } from "../../styles/styles";
import { listStyles } from "../../styles/list-styles";
import './pokemon-chip.js';

export class PokemonList extends LitElement {
  
  static properties = {
    data: {
      type: Array
    }
  };
  
  static styles = [
    mainStyles,
    listStyles
  ];

  constructor() {
    super();
    this.data = new Array();
  }

  _itemClick(data) {
    this.dispatchEvent(new CustomEvent('list-item-action', {
      detail: data,
      bubbles: true,
      composed: true
    }))
  }

  render() {
    return html`
      <ul class="container-list">
        ${this.data.map(
          (item) => html`
            <li class="container-list__item cursor-pointer">
              <div class="w-full d-flex d-flex-items-center container-list__item-content gap-16">
                <div class="container-list__item-content-icon">
                  <img src="${item?.image}" alt="">
                </div>
                <div class="container-list__item-content-description w-full d-flex d-flex-items-center d-flex-justify-between gap-16">
                  <div class="w-full">
                    <p>${item?.name}</p>
                    <div class="container-list__item-content-description-chips w-full border-box d-flex d-flex-wrap">
                      ${item?.types?.map(
                        (type) => html`
                          <pokemon-chip .title=${type}></pokemon-chip>
                        `
                      )}
                    </div>
                  </div>
                  <button
                    class="container-list__item-content-description-action font-w-700 cursor-pointer"
                    @click="${() => this._itemClick(item)}">
                    Editar
                  </button>
                </div>
              </div>
            </li>
          `
        )}
      </ul>
    `
  }
}

customElements.define('pokemon-list', PokemonList);
