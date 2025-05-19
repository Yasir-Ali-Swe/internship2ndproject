import React from 'react'

const Header = () => {
    return (
        <div className='bg-blue-50 w-screen'>
        <div className='w-[80%] mx-auto flex justify-between items-center py-5'>
            <div className='logo'>
                <h1 className='text-2xl font-bold'>Knock Solutions</h1>
            </div>
            <div className='Links'>
                <ul className='flex gap-8'>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>HOME</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>ABOUT</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>SERVICES</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>PORTFOLIO</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>TEAM</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>CONTACT</li>
                </ul>
            </div>
            <div className='Button'>
                <button className='bg-[#3a69ff] text-[#ffffff] py-2 px-4 rounded cursor-pointer hover:bg-purple-600 font-medium' >GET STARTED</button>
            </div>
        </div>
       </div>
    )
}

export default Header;



{/* <ul className='flex gap-10'>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>Services</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>Success Stories</li>
                    <li className='text-[#454650] cursor-pointer hover:font-normal hover:text-black'>About Us</li>
                </ul> */}