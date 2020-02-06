
import  React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Movie from './Movie';
import { getMovies } from './actions';
import { bindActionCreators } from 'redux';

const MoviesList = ({ movies, getMovies }) => {

	React.useEffect(() => {
        getMovies();
	}, [getMovies]);

	return  (<MovieGrid>
                {movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>);
};

const mapStateToProps = (state) => ({
	movies: state.movies.movies
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
