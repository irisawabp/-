export const Button = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={className + ' border px-2 py-1 rounded'}
  >
    {children}
  </button>
);
