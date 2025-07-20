import GiftItem from "./GifItem";
import useFetchGifts from "../hooks/useFetchGifs";

type Props = {
  category: string
}

function GiftGrid({ category }: Props) {

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