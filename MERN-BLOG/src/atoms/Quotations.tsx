import React from 'react'
import { Carousel, Blockquote } from 'flowbite-react'

const Quotations = () => {
    return (
        <div className="my-5 h-24">
            <Carousel>
                <div className="flex h-full items-center justify-center">
                    <div>
                        <Blockquote className='text-secondary'>
                            “Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.”
                        </Blockquote>
                        <p className='text-primary'>
                            –<b>Brian Clark</b>
                        </p>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <div>
                        <Blockquote className='text-secondary'>
                            “Success is the ability to go from failure to failure without losing your enthusiasm.”
                        </Blockquote>
                        <p className='text-primary'>

                            –<b>Winston Churchill</b>
                        </p>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <div>
                        <Blockquote className='text-secondary'>
                            “What you do after you create your content is what truly counts.”
                        </Blockquote>
                        <p className='text-primary'>
                            –<b>Gary Vaynerchuk</b>
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Quotations
