import { useState } from "react";

function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!inputValue) return;
    onAddCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form action="" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        id="categoriesInput"
        placeholder="Buscar"
        value={inputValue}
        onChange={() => onInputChange(event)} />
    </form>
  );
}

export default AddCategory;