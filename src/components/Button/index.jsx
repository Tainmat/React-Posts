import './styles.css';

export const Button = props => {
  const { disabled, onClick, text } = props;

  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
};
