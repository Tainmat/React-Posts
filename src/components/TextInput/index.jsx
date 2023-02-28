import './styles.css';

export const TextInput = ({ handleChange, searchValue, placeholderText }) => {
  return (
    <input
      className="textInput"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder={placeholderText}
    />
  );
};
