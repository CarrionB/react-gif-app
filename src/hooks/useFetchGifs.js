import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    isLoading: true
  })

  useEffect(() => {
    getGifs(category).then(imgs => setstate({
      data:imgs,
      isLoading: false
    }))
  }, [category]);

  return state;
}
