import React from 'react'

function Login() {
    return (
        <div className="md:flex justify-center h-screen">
            <form className="flex-col space-y-2 p-10  bg-blue-200 md:w-1/3 m-auto h-4/6 rounded-lg border-2 shadow-lg">
                <h1 className="flex justify-center text-4xl font-bold mb-5">Login</h1>
                <input
                    type="email "
                    placeholder="Enter your email"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    email
                    required
                />
                <input
                    type="password "
                    placeholder="Enter password"
                    className="flex w-5/6  md:w-full mt-10 mx-auto h-16 text-2xl p-3 rounded-md shadow-md"
                    password
                    required
                />
                <button className="flex justify-center mx-auto items-center shadow-xl bg-indigo-100 w-5/6 md:w-full h-16 rounded-md">Login</button>
            </form>
        </div>
    )
}

export default Login
