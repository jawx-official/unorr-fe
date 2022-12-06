import { Link } from '@chakra-ui/react'
import React from 'react'

export default function MainNav() {
    return (
        <div className='text-white w-full h-14 py-3 flex justify-between md:px-32 px-5 sm:px-10 xs:px-0 items-center bg-brand-primary font-brand'>
            <div>
                <img className='h-6 select-none' src="/logo-white.png" alt="app logo" />
            </div>

            <div className='space-x-4'>
                <button className='border-brand-accent-300 border hover:bg-brand-accent-300 px-5 py-2 select-none rounded-md'>I'm selling</button>
                <button className='bg-brand-accent-400 hover:bg-brand-accent-500 px-5 py-2 select-none rounded-md'>Sign in</button>
            </div>
        </div>
    )
}
