import React from 'react'
import { Agent, agents } from '../../../stores/utils/consts'


const AgentComponent = function ({ name, logo, market }: Agent) {
    return (
        <div className='md:text-center w-100 lg:w-40 md:w-40 text-left flex flex-row items-center md:flex-col lg:flex-col space-x-5 md:space-x-0  lg:space-x-0 hover:bg-brand-primary/10 border border-transparent rounded-md py-3 pb-5 px-2'>
            <div className='pb-0 md:pb-3 lg:pb-3'>
                <img className='h-16 w-16 rounded-full' src={logo} alt={name + '-logo'} />
            </div>
            <div>
                <div className='font-bold text-brand-primary tracking-wider'>{name}</div>
                <div className='text-brand-primary/30 text-sm'>{market}</div>
            </div>
        </div>
    )
}

export default function TopAgents() {
    return (
        <div className='px-5 text-center'>
            <div className='text-brand-primary/60 font-bold text-2xl lg:text-3xl md:text-3xl'>Top property brokers selling on Unorr</div>
            <div className='lg:h-36 md:h-36 flex flex-col sm:flex-row md:justify-center md:space-x-5 w-100 mt-5'>
                {agents.map((agent: Agent, index: number) => {
                    return <AgentComponent key={index} {...agent} />
                })}
            </div>
        </div>
    )
}
