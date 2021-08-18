//import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import React from 'react';
import {convertToLowerCase, getMovieDetailsById, retrieveStorageData, saveData} from './utils';
import {getMoviesBySearchTerm} from './utils';
import MovieDetailPanel from './components/MovieDetailPanel';

function App() {
  // let movie = {}
  // getMovieDetailsById()
  //   .then(res => res)
  //   .then(res => Object.assign(movie, {}, {
  //     title: res.Title,
  //     type: res.type,
  //     posterUrl: res.PosterUrl
  //   }));
  //   //.then(res => console.log(res.Title));

  let movie = null; //getMovieDetailsById();

  // console.log(movie);

  window.onload = async () => {
    console.log("Binding parsed properties");
    const movie = await getMovieDetailsById();
    //const convertData = await convertToLowerCase(movie);
    // convertData && saveData(convertData);

    console.log(movie);
    saveData(movie);
  }

  const {Title, Type, Poster, Rated, Ratings, Genre, Runtime, Plot, Actors} = retrieveStorageData("movie");

  //console.log(title);

  //<MovieCard title={Title} type={Type} posterUrl={Poster}/>

  return (
    //Parent wrapper for the purpose of jsx
    <>      
      <MovieDetailPanel title={Title} posterUrl={Poster} rated={Rated} runtime={Runtime} genre={Genre} plot={Plot} actors={Actors} rating={Ratings}/>
    </>
  );
}

export default App;
