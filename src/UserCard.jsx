import "./UserCard.css"
function 
UserCard({name, age, location}){
    return(
        <section>
            <h1 className="name">Name : {name}</h1>
            <p>Age : {age}</p>
            <p>Location : {location}</p>
        </section>
    )
}

export default UserCard