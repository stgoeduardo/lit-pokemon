import { LitElement, html, css } from 'lit';
import { Router } from '@lit-labs/router';
import { mainStyles } from './styles/styles.js';
import './components/dm/pokemon-manager.js';
import './pages/pokemon-home.js';
import './pages/pokemon-detail.js';

class PokemonApp extends LitElement {
  
  static properties = {
    _router: {
      attribute: false,
      type: Object
    }
  };

  static styles = [
    mainStyles,
    css`
      .toolbar p {
        padding: 0 1rem;
      }
      .toolbar img {
        width: 9.375rem;
      }
      .main-container {
        margin: 1rem 0;
      }
    `
  ];
  
  constructor() {
    super();
    this._initRouter();
  }

  connectedCallback() {
    super.connectedCallback();
    this._setListeners();
  }

  _setListeners() {
    this.addEventListener('card-click', (evt) => {
      this._navigateTo('detail', evt?.detail);
    });
    this.addEventListener('go-back', (evt) => {
      this._navigateTo('home', {});
    });
  }

  _initRouter() {
    this._router = new Router(this, [
      {
        path: '/',
        render: () => html`<pokemon-home></pokemon-home>`,
      },
      {
        path: '/detail/:id',
        render: (params) => html`<pokemon-detail .pokemonId="${params?.id || ''}"></pokemon-detail>`,
      }
    ]);
  }

  _navigateTo(type, data) {
    if (type === 'detail') {
      this._router.goto(`/detail/${data?.id}`);
    } else if (type === 'home') {
      this._router.goto('/');
    }
  }

  render() {
    return html`
      <div class="w-full toolbar d-flex d-flex-justify-between d-flex-items-center">
        <img src="src/assets/img/logo/pokemon.png">
        <p>Version 1.0.0</p>
      </div>
      <div class="main-container">
        ${this._router.outlet()}
      </div>
    `
  }
}

customElements.define('pokemon-app', PokemonApp);
