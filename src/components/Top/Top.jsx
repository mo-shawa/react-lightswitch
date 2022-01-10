import React from 'react'
import {useSpring,animated} from 'react-spring'

export default function Top(props) {
    return (
            <animated.div className='top' style={props.lightSwitchedOn ? {backgroundColor: 'white'} : {backgroundColor: 'black'} }>
            </animated.div>
    )
}
