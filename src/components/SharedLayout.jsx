import { NavLink,Outlet } from "react-router-dom";
import s from "./SharedLayout.module.css";

export default function SharedLayout(){
  return (
    <header>
    <nav>
          <NavLink to="/" className={s.home}>Home</NavLink>
          <NavLink to="/movies" className={s.movies}>Movies</NavLink>
    </nav>
    <Outlet />  
    </header>
  )
};
