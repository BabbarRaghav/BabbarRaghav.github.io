import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className="px-20 py-2 flex justify-center lg:space-x-4 my-3">
                <li className="cursor-pointer">
                    <Link className="nav-link text-black" aria-current="page" to="/">Home</Link>
                </li>
                <li className="cursor-pointer">
                    <Link className="nav-link text-black" to="resume">Resume</Link>
                </li>
                <li className="cursor-pointer">
                    <Link className="nav-link text-black" to="project">Projects</Link>
                </li>
                <li className="cursor-pointer">
                    <Link className="nav-link text-black" to="about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar