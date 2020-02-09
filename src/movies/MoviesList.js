
import  React from "react";
import styled from 'styled-components';
import Movie from './Movie';
import { connect } from 'react-redux';
import { getMovies } from './actions';
import { bindActionCreators } from 'redux';

const MoviesList = ({ movies, getMovies, isLoaded, moviesLoadedAt }) => {
    
	React.useEffect(() => {
        const oneHour =29*1000;
        console.log(  new Date() - new Date(moviesLoadedAt) )
        if (!isLoaded || ((new Date() - new Date(moviesLoadedAt) ) > oneHour)){
            console.log('getMovies')
            getMovies();
        }
	}, [getMovies, isLoaded, moviesLoadedAt]);

	return  (<MovieGrid>
                {movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>);
};

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
    moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getMovies
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;
