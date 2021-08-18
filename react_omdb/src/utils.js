//Key is nulled out to avoid commiting private data
//const apiKey = "ffe01f6a";
const apiString = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

//#region Get search terms
export const getMoviesBySearchTerm = async (searchTerm) =>
    await fetch(`${apiString}&s=${searchTerm}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);

export const getMovieDetailsById = async (movieId="tt3896198") =>
    await fetch(`${apiString}&i=${movieId}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
//#endregion

//#region Data management fucntions
export const saveData = (newData) => sessionStorage.setItem(newData.length ? "movies" : "movie", JSON.stringify(newData));

export const retrieveStorageData = (key) => {
    const dataKey = sessionStorage.getItem(key);
    return JSON.parse(dataKey);
}
//#endregion

export const convertToLowerCase = (data) => {
    if(data.length){
        data.map((obj) =>
            Object.keys(obj).reduce((value, key) => {                
                value[key.toLowerCase()] = obj[key];
                return value;
            })
        )
    } else {
        Object.keys(data).reduce((value, key) => {
            //console.log(key);
            value[key.toLowerCase()] = data[key];
            console.log(value);
            return value;
        }, {})
    }

    console.log(data);
}

//#region Legacy Code
// export const getMoviesBySearchTerm = async (searchTerm) =>{
//     const response = await fetch(`${apiString}&s=${searchTerm}`);
//     let movieJSON = await response.json();

//     return movieJSON;
// }

// export const getMovieDetailsById = async (searchID="tt3896198") =>{
//     const response = await fetch(`${apiString}&i=${searchID}`);
//     let movieJSON = await response.json();

//     return movieJSON;
// }
//#endregion
