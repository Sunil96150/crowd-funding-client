import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handelSignUp = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('form sign up' ,name,photo , email , password)
       

        createUser(email , password)
        .then(result =>{
            console.log('user create at ', result.user);
            const createdAt = result?.user?.metadata?.creationTime;

            const newUser = {name, photo, email , createdAt}

            // users data loaded here in backend

            fetch('http://localhost:5000/users' ,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('user create to db' , data)

                if(data.insertedId){
                     Swal.fire({
                        title: "Sign up Successfully!",
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
      <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
      <p className="py-6">
      Enter your email and password to access your dashboard and track your contributions. Stay updated on your campaigns and donations.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelSignUp} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" required />
          <label className="fieldset-label">Photo URL</label>
          <input type="text" className="input" name='photo' placeholder="Photo" required />
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
          <p>See all Campaigns : <Link className='text-red-600' to='/login'>Sign In</Link></p>

        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;