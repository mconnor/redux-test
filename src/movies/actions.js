

export const GET_MOVIES = 'GET_MOVIES';

export const getMovies = () => {
    return async function(dispatch){
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
       
        //this works too
        // await fetch(url)
        //     .then( res => res.json())
        //     .then( res => dispatch({
        //         type: GET_MOVIES,
        //         data: res.results,
        //     }))
        //     .catch((e) => console.error('fetch error ' +e.message))

        const res = await fetch(url)
        const movies = await res.json()
        return dispatch({
            type: GET_MOVIES,
            data: movies.results,
        });
    }
        
}