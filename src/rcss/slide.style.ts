
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

export{
    hfinal,hstyle,bstyle,textcenter
}