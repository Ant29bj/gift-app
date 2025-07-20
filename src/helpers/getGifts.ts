const fetchGifs = async (category: string) => {
  const apiKey = 'aBlEUOTmi81fYki2jeSB7fjGO4H69AeE';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`
  const resp = await fetch(url)
  const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }))
  return gifs;
}

export default fetchGifs;