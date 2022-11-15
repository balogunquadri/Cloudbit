import React from 'react'
import { CheckIcon, ChartPieIcon, DatabaseIcon, UserGroupIcon, ChatAltIcon, BookOpenIcon, ShieldCheckIcon, PaperAirplaneIcon } from '@heroicons/react/outline';

const Allinone = () => {
    return (
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>Start Building With CloudBit</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>Cloudbit is an open-source technology that is collectively developed by a large community of developers, researchers, and users who share the goal of building for the benefit of the entire blockchain ecosystem.</p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Developers</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Start Building With our Universally connected cloud platform
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <ChartPieIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Products</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Decentralized and highly quality  cloud storage for Defi, Dex, NFTs e.t.c
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <UserGroupIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Use Case </h3>
                            <p className='text-lg pt-2 pb-4'>
                                Start Building With our Universally connected cloud platform
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <DatabaseIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Ecosystem</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Leveraging on the cloudbit cloud storage to make your data accessible onchain directly through our nodes
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <ChatAltIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Community</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Events and Community grants are available for developers,contributors and enthusiast
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <BookOpenIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Resources</h3>
                            <p className='text-lg pt-2 pb-4'>
                                We're building a new era of sustainable growth, security and value capture
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <ShieldCheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Insurance</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Our platform is insured to mitigate against any potential harm
              </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <PaperAirplaneIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Automation</h3>
                            <p className='text-lg pt-2 pb-4'>
                                Reliable, high-performance, decentrantralized automation for cloud
              </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Allinone
