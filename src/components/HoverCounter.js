import React from 'react'
import withCounter from './HOC/withCounter'

const HoverCounter = ({ count, incrementCount }) => {
    return (
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
    )
}

export default withCounter(HoverCounter);