export default function Login() {
    return (
        <>
            <div className="login">
                <div className="login__container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                        <h5>Password</h5>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                        <button type="submit" className="login__signInButton">Sign In</button>
                    </form>
                    <p>
                        By signing-in you agree to the Amante-Tassels Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login__registerButton">Create your Amante-Tassels Account</button>
                </div>
            </div>
        </>
    );
}