import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GifGrid";


function GifExpertApp() {

  const [categories, setCategories] = useState<string[]>([]);

  function onAddCategory(newCategory) {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <div className="GiftExpertApp">
      <h1>Gift Expert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))
      }
    </div >
  );
}

export default GifExpertApp;