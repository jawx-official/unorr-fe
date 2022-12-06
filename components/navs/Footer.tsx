import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='px-10 md:px-20 lg:px-56 h-32 min-h-32 py-10 flex flex-col'>
            <div className='flex space-x-2 mb-2'>
                <img className='h-6 w-7' src="/unorr_icon.png" alt="icon" />
            </div>
            <div className='flex space-x-2'>
                <Link href="/">Pricing</Link>
                <Link href="/">Privacy</Link>
                <Link href="/">I'm selling</Link>
                <div>
                    © 2022 Unorr.co
                </div>
            </div>
        </div>
    )
}
