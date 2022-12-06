import React from 'react'
import MainNav from '../../navs/MainNav'

export default function Hero() {
    return (
        <div className='w-screen relative'>
            <div className='w-full bg-brand-primary min-h-screen h-screen absolute top-0 left-0'>

            </div>
            <div className='absolute top-0 left-0 w-full'>
                <MainNav />
                <div className='min-h-96 h-96'>
                    <div className='text-white lg:px-52 md:px-24 sm:px-16 px-5 pt-36 text-center font-bold'>
                        <div className='lg:text-4xl sm:text-2xl md:text-3xl text-xl'>Unorr is the fastest & most cost-effective way to</div>
                        <div className='lg:text-4xl sm:text-2xl md:text-3xl text-xl mt-1'>
                            buy and sell real-estate in 🇳🇬 Nigeria.
                        </div>
                    </div>
                    <div className='lg:px-52 md:px-36 sm:px-20 px-5 text-center text-white/60 my-3'>
                        Immediate access to over 50k+ property brokers across Nigeria's popular cities.
                    </div>
                    <div className='lg:px-52 md:px-36 sm:px-20 px-5  text-center space-x-3'>
                        <button className='bg-brand-accent-400 select-none rounded-md px-5 py-2 hover:bg-brand-accent-500 text-white'>Find property 🔎</button>
                        <button className='bg-brand border-brand-accent-300 select-none border rounded-md px-5 py-2 hover:bg-brand-accent-300 text-white'>Post property</button>
                    </div>
                </div>
                <div className='lg:px-52 md:px-36 sm:px-20 px-5'>
                    <div className='bg-white min-h-96 border  rounded-lg h-96 w-100'>

                    </div>
                </div>
            </div>
        </div>
    )
}
