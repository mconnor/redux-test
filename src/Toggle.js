import React from 'react'
import { connect } from 'react-redux'


const Toggle = ({ messageVisibility, dispatch }) => (
        <div>
            {messageVisibility &&
                <p>redux action toggled</p>
            }
            <button onClick={() => dispatch(
                {
                    type: 'TOGGLE_MESSAGE'
                }
            )}>Toggle Me</button>
        </div>
);

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
})

export default connect(mapStateToProps)(Toggle)
