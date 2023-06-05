import React from 'react'

import './slide.css'


const textcenter = {
    textAlign : 'center' as const
}

const bstyle = {
fontSize : '2 em',
}

const hstyle ={
    fontSize : '4 em',
    

}

const hfinal = {
    ...hstyle,
    ...textcenter
}
const el = (
    <div className='slide'>
        <h1 style={hfinal}>Styling in React</h1>
        <hr/>

        <ul style={bstyle}>
            <li>Styling in CSS using React</li>
            <li>Both inline and classes used</li>
        </ul>
    </div>
)

export default el