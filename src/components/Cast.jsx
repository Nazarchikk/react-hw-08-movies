
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDYxMjE0ZGNmZTVjMTA5ZjhmMjA3MjY1Y2NjNmRhMSIsInN1YiI6IjY0Y2E2Nzc2ODViMTA1MDBhYzE2ODNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZb1lXYtFJ8myKm3kum7S4M1e5xbrWdW91HnYqBtMy8'
    }
  };
  

export default function Cast () {
      const {id} = useParams()
      const [mores,setMores] = useState([]);
      useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
              .then(res =>{ 
                  if (res.ok) {
                  return res.json();
              }}
              )
              .then(mores => {
                  setMores(mores.cast)
              });
        },[id]);
        console.log('mores :>> ', mores);
        if(mores !== []){
          return(
            <>
              <ul>
                  {mores.map(more => (
                    <li key={more.id}>
                      <img src={`https://image.tmdb.org/t/p/w300/${more.profile_path}`} alt={`img:${more.name}`} width="100" height="100" />
                      <p>{more.name}</p>
                      <p>Character:{more.character}</p>
                    </li>
                  
                ))}
              </ul>
            </>
        )
        }
}