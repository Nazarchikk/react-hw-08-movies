import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Home.module.css";

export default function Home () {
    const [images, setImages] = useState([])
      useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7d61214dcfe5c109f8f207265ccc6da1&language=en-US')
        .then(res =>{ 
           if (res.ok) {
            return res.json();
          }}
        )
        .then(images => {
            setImages(images.results)
        })
      },[])
    return(
        <>
            <h1 className={s.h1}>Trending Today</h1>
            <ul>
                {images.map(image => (
                    <li key={image.id} className={s.items}>
                        <NavLink to={`/movies/${image.id}`} className={s.NavLink}>{image.title || image.name}</NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}