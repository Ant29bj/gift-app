import { ChangeEvent, FormEvent, useState } from "react";
type Props = {
  onAddCategory: (category: string) => void
}

function AddCategory({ onAddCategory }: Props) {
  const [inputValue, setInputValue] = useState<string>('');
  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputValue.length == 0) return;
    onAddCategory(inputValue.trim());
    setInputValue('')
  }

  return (
    <form aria-label="form" action="" onSubmit={onSubmit}>
      <input
        type="text"
        id="categoriesInput"
        placeholder="Buscar"
        value={inputValue}
        onChange={onInputChange} />
    </form>
  );
}

export default AddCategory;