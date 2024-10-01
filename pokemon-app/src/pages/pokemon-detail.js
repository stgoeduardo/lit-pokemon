import { html, LitElement } from "lit";
import { mainStyles } from "../styles/styles.js";
import { detailStyles } from "../styles/detail-styles.js";
import '../components/ui/pokemon-chip.js';
import '../components/ui/pokemon-list.js';
import '../components/ui/pokemon-card.js';
import '../components/ui/pokemon-alert.js';
import '../components/ui/pokemon-drawer-form.js';

export class PokemonDetail extends LitElement {

  static properties = {
    pokemonId: {
      type: String
    },
    _pokemon: {
      attribute: false,
      type: Object
    },
    _dataEvolution: {
      attribute: false,
      type: Object
    },
    _isOpenEvolutionForm: {
      attribute: false,
      type: Boolean
    }
  };

  static styles = [
    mainStyles,
    detailStyles
  ];

  constructor() {
    super();
    this._setListeners();
    this.pokemonId = '';
    this._isOpenEvolutionForm = false;
    this._pokemon = {};
    this._dataEvolution = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this._getPokemonById();
  }

  _setListeners() {
    this.addEventListener('list-item-action', (evt) => {
      this._openDrawerForm(evt?.detail);
    });
    this.addEventListener('send-form-data', (evt) => {
      this._updateData(evt?.detail);
    });
    this.addEventListener('close-drawer-form', (evt) => {
      this._closeDrawerForm();
    });
  }

  _openDrawerForm(data) {
    let isPokemonDuplicate = false;
    if (sessionStorage.getItem('pokemon-data') !== null) {
      const data = JSON.parse(sessionStorage.getItem('pokemon-data'));
      const filterPokemons = data.filter(item => item.name === this._pokemon?.name);
      isPokemonDuplicate = filterPokemons?.length > 1;
    }
    this._isOpenEvolutionForm = true;
    this._dataEvolution = {
      id: data?.id,
      name: data?.name,
      image: data?.image,
      types: data?.types.join(','),
      pokemon: this._pokemon.name,
      duplicate: {
        status: isPokemonDuplicate,
        alert: {
          title: isPokemonDuplicate ? 'Este pokemón está repetido, puede cambiarlo en el punto mas cercano' : 'Este pokemón no está repetido',
          type: isPokemonDuplicate ? 'warning' : 'success'
        }
      }
    };
  }

  _closeDrawerForm() {
    this._isOpenEvolutionForm = false;
    this._dataEvolution = {};
  }

  _updateData(result) {
    if (sessionStorage.getItem('pokemon-data') !== null) {
      const data = JSON.parse(sessionStorage.getItem('pokemon-data'));
      sessionStorage.removeItem('pokemon-data');
      const findIndex = data?.findIndex(item => item.id === this.pokemonId);
      if (findIndex > -1) {
        const evolutions = data[findIndex]?.evolutions || [];
        const indexEvolution = evolutions.findIndex(elem => elem.id === result.id);
        if (indexEvolution > -1) {
          evolutions[indexEvolution] = result;
          data[findIndex].evolutions = evolutions;
          this._pokemon = data[findIndex];
          sessionStorage.setItem('pokemon-data', JSON.stringify(data));
        }
      }
    }
  }

  _getPokemonById() {
    if (sessionStorage.getItem('pokemon-data') !== null) {
      const data = JSON.parse(sessionStorage.getItem('pokemon-data'));
      const find = data.find(item => item.id === this.pokemonId);
      if (find) {
        this._pokemon = find;
      }
    }
  }
  
  _goBack() {
    this.dispatchEvent(new CustomEvent('go-back', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="w-full d-flex container-back">
        <button
          class="cursor-pointer font-w-700 container-back-button"
          @click="${() => this._goBack()}">
          Regresar a la lista
        </button>
      </div>
      <section class="container-detail w-full border-box d-flex d-flex-justify-center">
        <div class="container-detail__main-profile d-flex d-flex-justify-center">
          <pokemon-card .item=${this._pokemon}></pokemon-card>
        </div>
        <div class="container-detail__main-features">
          <h2>Evoluciones</h2>
          ${this._pokemon?.evolutions?.length
            ?
              html`<pokemon-list .data=${this._pokemon?.evolutions}></pokemon-list>`
            :
              html`
                <div class="container-detail__main-features-alert">
                  <pokemon-alert
                    .type=${'danger'}
                    .title="${'No hay datos para mostrar'}"
                    .description="${'Intente nuevamente mas tarde.'}">
                  </pokemon-alert>
                </div>
              `
          }
        </div>
      </section>
      <pokemon-drawer-form
        .isOpen=${this._isOpenEvolutionForm}
        .data="${this._dataEvolution}">
      </pokemon-drawer-form>
    `
  }
}

customElements.define('pokemon-detail', PokemonDetail);
