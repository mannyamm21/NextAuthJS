'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function Profile() {
    const router = useRouter();
    const [data, setData] = useState("nothing")

    const getuserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout Successfully")
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2 className="p-1 rounded bg-green-500">
                {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2><hr />
            <button onClick={logout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
            <button onClick={getuserDetails} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get user details</button>
        </div>
    )
}
