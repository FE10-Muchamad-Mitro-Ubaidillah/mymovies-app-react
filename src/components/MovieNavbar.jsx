import React from "react";

class MovieNavbar extends React.Component {

    render() {
        return (
            <div className="navbar bg-gray-800 px-20 py-4">
                <div className="flex-1">
                    <a className="btn btn-ghost hover:bg-transparent text-white hover:text-white normal-case text-3xl">Movie&nbsp; <span className="text-red-600">77</span></a>
                    <ul className="flex text-white">
                        <li className="ml-10"><a href="" className="hover:text-red-700">Favorite Movies</a></li>
                        <li className="ml-10"><a href="" className="hover:text-red-700">New Movies</a></li>
                        <li className="ml-10"><a href="" className="hover:text-red-700">Popular Movies</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a className="hover:text-red-700 hover:bg-slate-300">Profile</a></li>
                            <li><a className="hover:text-red-700 hover:bg-slate-300">Favorite</a></li>
                            <li><a className="hover:text-red-700 hover:bg-slate-300">Settings</a></li>
                            <li><a className="hover:text-red-700 hover:bg-slate-300">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieNavbar;