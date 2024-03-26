"use client"

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();

    // local states
    const [showPassword, setShowPassword] = useState(false);

    // handle submit
    function handleSubmit() {
        router.push('/analytics');
    }

    return (
        <form className='px-10 py-12 flex flex-col gap-4 border bg-white rounded-lg shadow-md'>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold'>Login</h1>
                <h3 className='text-gray-400'>Enter your username and password below to login. </h3>
            </div>

            <label className='w-full border-b'>
                <input type="text" name="username" placeholder='username' className='w-full py-2' />
            </label>

            <label className='w-full flex justify-between border-b'>
                <input type={showPassword ? "text" : "password"} name="password" placeholder='password' className='w-full py-2' />
                <button type='button' className='cursor-pointer text-gray-300' onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <EyeOff size={20} /> : <Eye size={20} />
                    }
                </button>
            </label>
            <button onClick={handleSubmit} type="button" className='w-full mt-1 px-4 py-2 rounded-lg bg-black text-white'>Submit</button>
        </form>
    )
}

export default LoginForm;