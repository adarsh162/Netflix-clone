
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage  from '../assets/home.jpg';
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function Movies() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
    const movies = useSelector((state)=>state.netflix.movies);
    const genres = useSelector((state)=>state.netflix.genres);
    useEffect(()=>{
        dispatch(getGenres());//dispatching or calling the getgenres reducer which will call api backend and return response,assigns it to state.genres
    },[]);
    useEffect(()=>{
        if(genresLoaded)dispatch(fetchMovies({type:"movies"}));
    },[genresLoaded]);
    const [isScrolled,setisScrolled]=useState(false);
    window.onscroll = ()=>{
        setisScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null);
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        //if(currentUser)navigate("/");
    })
  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
        </div>
      
        <div className="data">
        <SelectGenre genres={genres} type="movie"/>
            {
                movies.length ? <Slider movies={movies}/> :
                <NotAvailable/>
            }
        </div>
    </Container>
  );
};
const Container=styled.div`
    .data{
        margin-top:8rem;
        .not-available{
            text-align:center;
            color:white;
            margin-top:4rem;
        }
    }
`;
