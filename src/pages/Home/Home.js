import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Kat, Sam } from '..'
import './home.css'

const Home = () => {

    return (
            <main className="h-screen bg-gray-500">
                <div className="flex">
                    <header className="w-full flex flex-row justify-around">
                    <Link to="/kat">
                        Kat
                    </Link>
                    <Link to="/sam">
                        Sam
                    </Link>
                    </header>
                </div>
            </main>
    )
}
export default Home