import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
    const {signInUser} = useContext(AuthContext)

    const handelSignIn = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email , password)
        signInUser(email , password)
        .then(result => {
            console.log(result.user)

            //update user last sign in

            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const logInInfo = {email , lastSignInTime }

            fetch('http://localhost:5000/users' , {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(logInInfo)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('sign in info updated db' , data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: "Log In Successfully!",
                        icon: "success",
                        draggable: true
                      });
                }
            })

        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">Log In now!</h1>
            <p className="py-6">
            Enter your email and password to access your dashboard and track your contributions. Stay updated on your campaigns and donations.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelSignIn} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Log In</button>
                <p>See all Campaigns : <Link className='text-red-600' to='/signup'>Sign Up</Link></p>
              </fieldset>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;