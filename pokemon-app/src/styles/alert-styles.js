import { css } from 'lit';

export const alertStyles = css`
  p { margin: 0; }

  .alert {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid lightgray;
  }

  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  .danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    
  }
`;