import React from "react";
import { useSelector } from "react-redux";

const LoginInput = ({ onSubmitLogin, onChangePassword, onChangeUsername, username, password }) => {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={`card w-96 ${theme === `dark` ? `bg-gray-800 text-white` : `bg-gray-200 text-black`} my-[50px]`}>
            <div className="card-body items-center text-center">
                <h2 className="text-5xl font-bold mb-10">L<span className="text-red-700">o</span>gin</h2>
                <p>You can login for watch movie in Movie 77</p>
                <form onSubmit={onSubmitLogin}>
                    <div className="flex mt-5 items-center">
                        <label className="mr-5">Username</label>
                        <input type="text" className="w-48 rounded h-10 p-3 text-gray-700" name="username" value={username} placeholder="Username" onChange={onChangeUsername} />
                    </div>
                    <div className="flex mt-5 items-center">
                        <label className="mr-6">Password</label>
                        <input type="password" className="w-48 rounded h-10 p-3 text-gray-700" name="password" value={password} placeholder="Password" onChange={onChangePassword} />
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="btn w-full bg-red-700 border-0">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginInput;