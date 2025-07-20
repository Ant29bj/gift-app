import fetchGifs from "../helpers/getGifts";
import { useState, useEffect } from "react";

function useFetchGifs(category: string) {

  const [gifts, setGifts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async () => {
    const newIMages = await fetchGifs(category)
    setGifts(newIMages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifts,
    isLoading
  }
}

export default useFetchGifs;