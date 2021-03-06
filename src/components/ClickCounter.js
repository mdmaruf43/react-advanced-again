import React from 'react'
import withCounter from './HOC/withCounter'

const ClickCounter = ({ count, incrementCount }) => {
    return (
        <div>
            <button type='button' onClick={incrementCount}>Click {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter);