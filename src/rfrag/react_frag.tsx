import React, { Fragment} from 'react'

const fruitsEl = (
    <Fragment>
    <li> apples </li>
<li>oranges</li>    
</Fragment>
)

;

const vegEl = 

(
    <Fragment>
        <li> potato </li>
    <li>tomato</li>    
    </Fragment>);

const list = 
    
(
    <ul>
    {fruitsEl}
    {vegEl}
    </ul>
);

export default list;