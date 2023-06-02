import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import backgroundImage  from '../assets/home.jpg';
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres, getUserLikedMovies } from '../store';
import Slider from '../components/Slider';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

export default function UserLiked() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [email,setemail]=useState(undefined);
    const movies = useSelector((state)=>state.netflix.movies);
    const genres = useSelector((state)=>state.netflix.genres);
    useEffect(()=>{
        if(email){
            dispatch(getUserLikedMovies(email));
        }
    },);
  
    const [isScrolled,setisScrolled]=useState(false);
    window.onscroll = ()=>{
        setisScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null);
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser){
            setemail(currentUser.email);
        }
        else{
            navigate('/login');
        }
    });
  return (
    <Container>
        <Navbar isScrolled={{isScrolled}}/>
         <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
                {movies.map((movie,index)=>{
                    return <Card moviedata={movie} index={index} key={movie.id} isLiked={true}/>
                })}
            </div>
         </div>
    </Container>
  )
}
const Container = styled.div`
    .content{
        margin:2.3rem;
        margin-top:8rem;
        gap:3rem;
        h1{
            margin-left:3rem;
        }
        .grid{
            flex-wrap:wrap;
            gap:1rem;

        }
    }
`;