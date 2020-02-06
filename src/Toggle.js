import React from 'react';
import { connect } from 'react-redux';
import { toggleMessage, getMovies } from './actions';
import { bindActionCreators } from 'redux';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
	<div>
		{messageVisibility && <p>redux action toggled</p>}
        <button onClick={toggleMessage}>Toggle Me</button>
		<button onClick={getMovies}>Load Movies</button>
	</div>
);

const mapStateToProps = (state) => ({
	messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
		{
            toggleMessage,
            getMovies
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
