import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

import { connect } from 'react-redux';
import { getMovie, resetMovie } from './actions';
import { bindActionCreators } from 'redux';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

// match comes from React Router
const MovieDetail = ({ movie, match, getMovie, resetMovie,movieLoaded }) => {
	React.useEffect(
		() => {
			getMovie(match.params.id); // dispatches a thunk
		},
		[ getMovie, match.params.id ]
	);

	React.useEffect(
		() => {
			if (!movieLoaded) resetMovie(); // dispatches a thunk
		}, [resetMovie, movieLoaded]
	);

	return (
		<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
			<MovieInfo>
				<Overdrive id={`${movie.id}`}>
					<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
				</Overdrive>
				<div>
					{movie.title ? <h1>Hello</h1> : <h1>Hi</h1>}
					<h1>{movie.title}</h1>
					<h3>{movie.release_date}</h3>
					<p>{movie.overview}</p>
				</div>
			</MovieInfo>
		</MovieWrapper>
	);
};

const mapStateToProps = (state) => ({
	movie: state.movies.movie,
	isLoaded: state.movie.movieLoaded
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getMovie,
			resetMovie
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${(props) => props.backdrop}) no-repeat;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;
