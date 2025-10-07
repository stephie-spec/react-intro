function Login(){
    return (
        <div className="login">
        <h2>Login</h2>
        <div className="form">
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button type="submit" id="submit-btn">Submit</button>
        </div>
        </div>
    );
}

export default Login;