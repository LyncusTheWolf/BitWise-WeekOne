//Key is nulled out to avoid commiting private data
let keyRaw = "--------";

getMoviesBySearchTerm = async (searchTerm) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${keyRaw}&t=${searchTerm}`);
    let movieJSON = await response.json();

    return movieJSON;
}

getMovieDetailsById = async (searchID) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${keyRaw}&i=${searchID}`);
    let movieJSON = await response.json();

    return movieJSON;
}