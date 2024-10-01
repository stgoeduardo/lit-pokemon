import { css } from 'lit';

export const cardStyles = css`
  .card {
    max-width: 17.813rem;
    border-radius: 16px;box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  .card__container {
    width: auto;
    padding: 1rem;
  }

  .card__container-img {
    width: 13.438rem;
    height: 13.438rem;
  }

  .card__container-img img {
    width: 100%;
    height: 13.438rem;
  }

  .card__container-title {
    margin: 0 0 0.5rem 0;
  }

  .card__container-title-text {
    font-size: 1.125rem;
  }

  .card__container-features {
    padding: 0.5rem 0;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .card__container-features-item {
    background: #ffc93c;
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
`;