import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase'
import { login } from '../utils/userSlice'
import { signin } from 'next-auth/client'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                useDispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.profileUrl,
                })
                )
            }).catch(error => console.log(error));

    }

    return (
        <div className="md:flex-col justify-center mt-40 mb-10">

            <form className="flex-col space-y-2 p-10 bg-gradient-to-br from-indigo-400 via-indigo-500 to-pink-500 md:w-1/3 m-10  md:m-auto h-1/2 md:h-4/6 rounded-lg  shadow-xl">
                <h1 className="flex justify-center text-4xl font-bold mb-5 text-white">Login</h1>
                <input
                    type="email "
                    placeholder="Enter your email"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password "
                    placeholder="Enter password"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button
                    className="flex justify-center mx-auto items-center shadow-xl bg-blue-400 text-white text-2xl w-5/6 md:w-full h-16 rounded-md"
                    onSubmit={() => loginToApp(email, password)}
                >
                    Login
                </button>
            </form>

            <h3 className="flex justify-center mx-auto p-10 font-bold md:font-semibold text-xl md:text-3xl ">OR</h3>

            <div className="grid space-y-2">
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center " onClick={signin}>Sign in with Google</button>
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center" onClick={signin}>Sign in with Facebook</button>
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center" onClick={signin}>Sign in with Instagram</button>
            </div>

        </div>
    )
}

export default Login
