import React from 'react'

export default function SectionWrapper(props) {
  const {children,header,title } = props;
  return (
      <section className='min-h-screen flex flex-col gap-10' >
        <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center'>
          <p className='uppercase font-medium'>{header}</p>
          <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-500'>{title[1]}</span> {title[2]}</h1>
          
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 '>
                {children}
            </div>
      </section>
  )
} 
