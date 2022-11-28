import React, {useState} from 'react';
import logo from './assets/books-stack-of-three.png';


function LoginForm({Login, error}) {
    
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);

    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <div className="Log">
            <h2>Login</h2>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>

            {(error !== "") ? ( 
            <div className="error">
                {error}
            </div>
            ) : ""}

            <input type="submit" value="LOGIN" />

            <div className="form-logo">
                <img src={logo} alt="Login page logo"/>
            </div>

        </div>
    </form>
  )
}

export default LoginForm
