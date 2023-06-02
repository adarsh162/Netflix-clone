import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
    const getMoviesfromRange = (from,to)=>{
        return movies.slice(from,to);
    }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesfromRange(0,10)}/>
      <CardSlider title="New Releases" data={getMoviesfromRange(10,20)}/>
      <CardSlider title="Blockbusters" data={getMoviesfromRange(20,30)}/>
      <CardSlider title="Most Popular" data={getMoviesfromRange(30,40)}/>
      <CardSlider title="Action Movies" data={getMoviesfromRange(40,50)}/>
      <CardSlider title="Epics" data={getMoviesfromRange(50,60)}/>
    </div>
  )
}
