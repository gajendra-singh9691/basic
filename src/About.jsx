import Person from "./person"

function About({name , city}){
    return( 
        <>
            <h1>Name : {name}</h1>
            <h1>City : {city}</h1>
            <Person name="kapish" city="indore" email="kp@gmail.com" age="55" />
        </>
    )
}

export default About
