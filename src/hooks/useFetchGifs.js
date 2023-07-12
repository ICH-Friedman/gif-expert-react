import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
      const newImage = await getGifs( category );
      setImages(newImage);
    }

    useEffect( () => {
        getImages();
    }, [] );

    return {
        images,
        isLoading: false
    }

}
