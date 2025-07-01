const fetchGifts = async (category) => {
  const apiKey = 'aBlEUOTmi81fYki2jeSB7fjGO4H69AeE';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`
  const resp = await fetch(url)
  const { data } = await resp.json();
  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))
  return gifts;
}

export default fetchGifts;