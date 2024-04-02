import React from 'react'

function SignUpForm() {
    const handleSubmit =  (e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-full h-full pt-10   overflow-hidden relative'>
    <div className='w-full my-4'>
        <h2 className='text-center text-[4vw] sm:text-[2vw] font-semibold text-[#084c6a]'>Create An Account</h2>
    </div>
    <form action="" onSubmit={handleSubmit}
    className='w-8/12 mx-auto flex flex-col mt-10 gap-10 text-black'>
        <input type="email" placeholder='Your Name'
        className='w-full h-10 bg-transparent border-2 pl-2 border-[#386a76] outline-none rounded-full bg-white placeholder-[#386a76]'/>
        <input type="password" placeholder='Your Email'
        className='w-full h-10 bg-transparent border-2 border-[#386a76] outline-none rounded-full pl-2 bg-white placeholder-[#386a76]' />
        <input type="password" placeholder='Password'
        className='w-full h-10 bg-transparent border-2 border-[#386a76] outline-none rounded-full pl-2 bg-white placeholder-[#386a76]' />
        <input type="password" placeholder='Confirm Password'
        className='w-full h-10 bg-transparent border-2 border-[#386a76] outline-none rounded-full pl-2 bg-white placeholder-[#386a76]' />
        <button type='submit'
        className='w-6/12 mx-auto shadow-gray-600 shadow-md  py-2 bg-[#347a99] rounded-full text-white mt-10 active:shadow-none'>Login</button>
    </form>
    </div>
  )
}

export default SignUpForm