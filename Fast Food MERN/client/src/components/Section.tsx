import React from 'react';
import TitleBar from '../assets/images/titleBar2.png'

interface SectionInterface {
  children?: React.ReactNode,
  title?: string,
  classname?: string
}
const Section: React.FC<SectionInterface> = ({ children, title, classname }) => {
  return (
    <section className={classname + ' mb-10 text-center'}>
      <div className='relative h-10'>
        <div className='absolute h-10 z-0'>
          <img className='h-full drop-shadow-md' src={TitleBar} alt="" />
        </div>
        <p className='z-10 absolute left-10 top-2 h-10  text-white'>{title}</p>
      </div>
      <div className='my-3'>
        {children}
      </div>
    </section>
  )
}

export default Section