const LoginModal = () => {


    return (
        <form className="login">
        <h1>Sign In to Access Settings</h1>

        <div>
            <label for="username">Username</label>
            <input type="text" placeholder="Email" id="username" />
        </div>

        <div>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
        </div>

        <button>Sign In</button>

        <div className='footer'>
            <p>Forgot Password? <a href="#">Reset here</a></p>
            <p>Haven't registered? <a href="#">Create an account here</a></p>
        </div>
        </form>
    )
}

export default LoginModal