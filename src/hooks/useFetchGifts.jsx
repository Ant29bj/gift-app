import fetchGifts from "../helpers/getGifts";
import { useState, useEffect } from "react";

function useFetchGifts(category) {

  const [gifts, setGifts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newIMages = await fetchGifts(category)
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

export default useFetchGifts;