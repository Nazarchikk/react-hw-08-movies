import { useParams } from "react-router-dom";
import { NavLink,Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
import s from "./MovieDetails.module.css"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDYxMjE0ZGNmZTVjMTA5ZjhmMjA3MjY1Y2NjNmRhMSIsInN1YiI6IjY0Y2E2Nzc2ODViMTA1MDBhYzE2ODNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZb1lXYtFJ8myKm3kum7S4M1e5xbrWdW91HnYqBtMy8'
    }
  };
  
export default function MoviesItem () {
    const {id} = useParams()
    const [parametr,setParametr] = useState();
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res =>{ 
                if (res.ok) {
                return res.json();
            }}
            )
            .then(parametr => {
                setParametr(parametr)
            });

      },[id]);
    if(parametr !== undefined){
        return(
            <>
                <NavLink to={'/'}><button className={s.goBack}>Go Back</button></NavLink>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300/${parametr.poster_path}`} alt="" />
                </div>
                <div>
                    <h2 className={s.h2}>{parametr.original_title}</h2>
                    <p className={s.h2}>User Score:{Math.round(parametr.vote_average)}</p>
                    <h3 className={s.h2}>Overview</h3>
                    <p className={s.h2}>{parametr.overview}</p>
                    <h3 className={s.h2}>Genres</h3>
                    <ul className={s.h2}>
                        {parametr.genres.map((gener)=>(
                            <li key={gener.id} className={s.h2}>{gener.name}</li>
                        ))}
                    </ul>
                    <p className={s.h2}>Additional information</p>
                </div>
                <NavLink to={"cast"} className={s.NavLink}>Cast</NavLink>
                <br />
                <NavLink to={"reviews"} className={s.NavLink}>Reviews</NavLink>
                <Outlet /> 
            </>
        )
    }
}