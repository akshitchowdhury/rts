import React from 'react'

import './slide.css'
import {hfinal,hstyle,bstyle,textcenter} from
'./slide.style'

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