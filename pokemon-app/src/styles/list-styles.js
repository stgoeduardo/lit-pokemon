import { css } from 'lit';

export const listStyles = css`
  .container-list {
    list-style: none;
    padding: 0;
  }
  
  .container-list__item {
    width: auto;
    padding: 1rem;
    border: 1px solid lightgrey;
    border-radius: 1rem;
    margin: 0.5rem 0;
  }
  
  .container-list__item-content-icon {
    width: 3rem;
    height: 3rem;
    border: 1px solid lightgrey;
    border-radius: 50%;
    padding: 0.5rem;
  }
  
  .container-list__item-content-icon img {
    width: 3rem;
  }
  
  .container-list__item-content-description-action {
    border: none;
    padding: 0.5rem;
    background: transparent;
  }

  .container-list__item-content-description-chips {
    padding: 0.5rem 0;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .gap-16 {
    gap: 1rem;
  }
`;