//Key is nulled out to avoid commiting private data
//const apiKey = "ffe01f6a";
const apiString = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

/*
export const getMoviesBySearchTerm = async (searchTerm) =>
    await fetch(apiString)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);

export const getMovieDetailsById = async (movieId="tt3896198") =>
    await fetch(apiString)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
*/

export const getMoviesBySearchTerm = async (searchTerm) =>{
    const response = await fetch(`${apiString}&s=${searchTerm}`);
    let movieJSON = await response.json();

    return movieJSON;
}

export const getMovieDetailsById = async (searchID="tt3896198") =>{
    const response = await fetch(`${apiString}&i=${searchID}`);
    let movieJSON = await response.json();

    return movieJSON;
}

