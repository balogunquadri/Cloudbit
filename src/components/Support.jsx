import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/Customerservice.jpg'


const Support = () => {
    return (
        <div name="" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className="px-4 py-12">
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>24/7 Support Available</h3>
                    <p className='py-4 text-3xl text-slate-300'>Our Managed Service Helpdesk is ready to assist you on anything from the simplest procedures to complex configuration problems and we will aim to address any issues that arise promptly.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>We Offer Personalised sales and price for large B2B ,educational and Institutional Organizations that fits your specification</p>
                        </div>
                        <div>
                            <p className='flex items-center text-indigo-600 mx-6 '>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>

                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>OffChain</h3>
                            <p className='text-gray-600 text-xl'>We provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain</p>
                        </div>
                        <div>
                            <p className='flex items-center text-indigo-600 mx-6 '>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>

                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Automation</h3>
                            <p className='text-gray-600 text-xl'>We Offer a decentralized Automated nodes to automate contracts, mitigating risk of manual interventions and centralized servers.</p>
                        </div>
                        <div>
                            <p className='flex items-center text-indigo-600 mx-6 '>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>




    )
}

export default Support
