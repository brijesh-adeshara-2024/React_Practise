function Random () {
    let number = Math.random() * 10
    return <h1 style={{'background-color' : "grey"}}>Random Number Is: {Math.round(number)}</h1>
}
export default Random