function Login(){
    return (
        <div>
            <h1>This is the login page </h1>
        </div>
    )
}

export function Profile(){
    return(<div>
        <h2>This is user's profile</h2>
        <button onClick={()=>alert("don't click me")}>click me</button>
    </div>)
    
}
export function Setting(){
    return(
        <div>
            <h2>Here is setting</h2>
        </div>
    )
}
export default Login;