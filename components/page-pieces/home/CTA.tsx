import React from 'react'

export default function CTA() {
    return (
        <div className='bg-brand-primary h-96 min-h-96 w-screen py-20 flex justify-center text-center'>
            <div className='lg:w-1/3 md:w-2/3 w-full text-center text-white'>
                <div className='font-bold text-3xl '>Your next 🌟 big acquisition</div>
                <div className='font-bold text-3xl'>is waiting for you on Unorr</div>
                <div className='font-bold text-xl text-zinc-300'>Explore 50K+ top property brokers from 🇳🇬 Nigeria.</div>
                <div className='text-center space-x-3 flex justify-center my-3'>
                    <button className='bg-brand-accent-400 select-none rounded-md px-5 py-2 hover:bg-brand-accent-500 text-white'>Find property 🔎</button>
                    <button className='bg-brand border-brand-accent-300 select-none border rounded-md px-5 py-2 hover:bg-brand-accent-300 text-white'>Post property</button>
                </div>
            </div>
        </div>
    )
}
