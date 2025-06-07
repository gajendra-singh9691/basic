function Event(){
    function eventwork(){
        alert("Hello, kapish")
    }
    return(
        <>
            <h1>Events</h1>
            <button onClick={eventwork}>Click me</button>
        </>
    )
}

export default Event