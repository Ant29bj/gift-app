import GiftItem from "./GiftItem";
import useFetchGifts from "../hooks/useFetchGifts";

function GiftGrid({ category }) {

  const { gifts, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando</h2>)
      }
      <div className="card-grid">
        {
          gifts.map(image => (
            <GiftItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

export default GiftGrid;