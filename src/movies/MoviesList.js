
import  React from "react";
import styled from 'styled-components';
import Movie from './Movie';
import { connect } from 'react-redux';
import { getMovies } from './actions';
import { bindActionCreators } from 'redux';

const MoviesList = ({ movies, getMovies, isLoaded }) => {
    
	React.useEffect(() => {
        if (!isLoaded)  getMovies();
	}, [getMovies, isLoaded]);

	return  (<MovieGrid>
                {movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>);
};

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
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
