import s from "./Movies.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Movies () {
    const [inValue, setInValue] = useState('')
    const [films,setFilms] = useState([]);
    const changeIn = (e) => {
        setInValue(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?query=${inValue}&api_key=7d61214dcfe5c109f8f207265ccc6da1`)
        .then(res =>{ 
            if (res.ok) {
            return res.json();
        }}
        )
        .then(films => {
            setFilms(films.results)
        });
        reset()
    }
    const reset = () => {
        setInValue("")
    }
    console.log('inValue :>> ', films);
    return(
        <>
        <form onSubmit={submit}>
            <input
            className={s.input}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={inValue}
            onChange={changeIn}
            required
            />
            <button type="submit" className={s.search}>search</button>
        </form>

        {films && films.length === 0 ? (
                    <p className={s.problem}> We do not have movie</p>
                ) : (
                    films &&
                    <ul>
                       { films.map(film => (
                        <li key={film.id} className={s.li}>
                            <img src={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`} alt="" />
                            <NavLink to={`/movies/${film.id}`} className={s.NavLink}>{film.title || film.name}</NavLink>
                        </li>
                        ))}
                    </ul>
                )}
        </>
    )
}