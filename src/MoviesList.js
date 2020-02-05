
import  React from "react";
import styled from 'styled-components';
import Movie from './Movie';

const MoviesList = ({ match }) => {
	const [ movies, setMovies ] = React.useState([]);

	React.useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
        fetch(url)
            .then( res => res.json())
            .then( res => setMovies(res.results))
            .catch((e) => console.error('fetch error ' +e.message))
	});

	return <MovieGrid>{movies.map((movie) => <Movie key={movie.id} movie={movie} />)}</MovieGrid>;
};

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
