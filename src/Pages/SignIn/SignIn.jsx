import React, { use } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import registerLottie from "../../assets/register.json"
import Lottie from 'lottie-react';

const SignIn = () => {
    const { signIn } = use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-screen flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* animtation */}
                    <Lottie style={{ width: 400 }} animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;