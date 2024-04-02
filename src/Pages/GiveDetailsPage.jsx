import React from 'react'

function GiveDetailsPage() {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div className='w-full h-screen'>
        <div className='w-full sm:my-10 '>
            <h2 className='w-full text-center font-semibold text-[2vw] text-[#386a76]'>Give details</h2>
        </div>
        <div className='w-full h-5/6 mt-10 '>
            <form action=""
            onSubmit={handleSubmit}
            className='w-full gap-12 grid grid-cols-2 sm:w-8/12 sm:mx-auto  '>
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />
                <input type="text" 
                placeholder='your name'
                className='grid-row-3 mx-auto w-8/12 h-10 border-2 border-[#386a76] outline-none rounded-full pl-4 placeholder-[#386a76]'
                 />

                 <button type='submit'
                 className='w-2/12 py-2 rounded-full shadow-gray-600 shadow-md mx-auto bg-[#386a76]  col-start-1 col-end-3 active:shadow-none
                 text-white'>Prdict</button>
                
            </form>
        </div>
    </div>
  )
}

export default GiveDetailsPage