

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';



export const getMovies = () => {
    return async function(dispatch){
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

        const res = await fetch(url)
        const movies = await res.json()
        return dispatch({
            type: GET_MOVIES,
            data: movies.results,
        });
    }
        
}

export const getMovie = (id) => {
    return async function(dispatch){
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`;

        const res = await fetch(url)
        const movie = await res.json()
        return dispatch({
            type: GET_MOVIE,
            data: movie,
        });
    }    
}

export const resetMovie = () => {
    // return (dispatch) => {
    //     return dispatch({
    //         type: RESET_MOVIE,
    //     });
    // }
    return {
        type: RESET_MOVIE,
      };
}