import React from 'react'

import './slide.css'

const hstyle ={
    fontSize : '4 em',


}

const textcenter = {
    textAlign : 'center'
}

const bstyle = {
fontSize : '2 em',
}

const el = (
    <div className='slide'>
        <h1 style={hstyle}>Styling in React</h1>
        <hr/>

        <ul style={bstyle}>
            <li>Styling in CSS using React</li>
            <li>Both inline and classes used</li>
        </ul>
    </div>
)

export default el