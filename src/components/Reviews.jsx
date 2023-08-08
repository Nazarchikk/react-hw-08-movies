import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDYxMjE0ZGNmZTVjMTA5ZjhmMjA3MjY1Y2NjNmRhMSIsInN1YiI6IjY0Y2E2Nzc2ODViMTA1MDBhYzE2ODNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZb1lXYtFJ8myKm3kum7S4M1e5xbrWdW91HnYqBtMy8'
    }
  };
  

export default function Reviews () {
    const {id} = useParams()
    const [about,setAbout] = useState([]);
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`, options)
            .then(res =>{ 
                if (res.ok) {
                return res.json();
            }}
            )
            .then(about => {
                setAbout(about)
            });
      },[id]);
      console.log('about :>> ', about);
      if(about !== undefined){
        return(
            <>
                <ul>
                {about.results && about.results.length === 0 ? (
                    <p> We do not have any review for this movie</p>
                ) : (
                    about.results &&
                    about.results.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                    ))
                )}
                </ul>
            </>
        )
      }

}