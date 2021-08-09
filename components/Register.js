import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileUrl, setProfileUrl] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profileUrl,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profileUrl,
                        })
                        );
                    });
            }).catch((error) => alert(error))
    };


    return (
        <div className="md:flex-col justify-center mt-40 mb-10">
            <form className="flex-col space-y-2 p-10 bg-gradient-to-bl from-indigo-400 via-indigo-500 to-pink-500 md:w-1/3 m-auto h-1/2 md:h-4/6 rounded-lg shadow-xl">
                <h1 className="flex justify-center text-4xl font-bold mb-5 text-white">Register</h1>
                <input
                    type="text "
                    placeholder="Enter First and Last Name"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text "
                    placeholder="Enter the url of the image"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    value={profileUrl}
                    onChange={e => setProfileUrl(e.target.value)}
                    required
                />
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
                    onSubmit={register}
                >
                    Register
                </button>
            </form>

            <h3 className="flex justify-center mx-auto p-10 font-bold md:font-semibold text-xl md:text-3xl ">OR</h3>

            <div className="grid space-y-2">
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center ">Sign in with Google</button>
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center ">Sign in with Facebook</button>
                <button className="flex mx-auto p-5 shadow-xl bg-white w-3/5 md:w-1/5 rounded-md justify-center ">Sign in with Instagram</button>
            </div>
        </div>
    )
}

export default Register;
