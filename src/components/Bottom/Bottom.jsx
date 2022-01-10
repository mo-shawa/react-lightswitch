import React from 'react'

export default function Bottom(props) {
    return (
        <div className='bottom'>
            <button onClick={() => props.flipSwitch()}>{props.lightSwitchedOn ? 'off' : 'on' }</button>   
        </div>
    )
}
