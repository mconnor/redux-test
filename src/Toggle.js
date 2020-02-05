import React from 'react'
import { connect } from 'react-redux'

const Toggle = () => {
    return (
        <div>
            <button>Toggle Me</button>
        </div>
    )
}


export default connect()(Toggle)
