type Props = {
  title: string,
  url: string
}

function GiftItem({ title, url }: Props) {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  )
}


export default GiftItem;