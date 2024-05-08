import React from 'react'
import { BiLogoPinterest } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { CiText } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { TfiMicrosoft } from "react-icons/tfi";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
export default function App() {
  return (
    <>
      {/* Hero Section */}
      <section className='hero'>
          <div className=' section-container '>
            <BiLogoPinterest className='w-40 h-40 mx-auto' />
            <h2 className=''>A history of everything you copy</h2>
            <p className='max-w-3xl mb-16 mx-auto text-2xl text-gray-400  '>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on every devices</p>
            <div className='flex flex-col justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5  font-semibold'>
              <button className='w-full px-5 p-4 border bg-green-500 rounded-full hover:bg-green-600 duration-200 md:w-auto'>Download for iOS</button>
              <button className='w-full px- p-4 border bg-blue-500 rounded-full hover:bg-blue-600 duration-200 md:w-auto'>Download for Mac</button>
            </div>
          </div>
      </section>
      {/* snippets sections */}
      <section id='snippets'>
        <div className=' section-container my-10'>
          <h2> Keep track of Snippets</h2>
          <p className='max-w-3xl text-xl text-gray-400 mb-10  mx-auto'>Clipboard instantly stores any item you copy in the cloud, meaning your
            can access your snippets immediately on all your devices. Our Mac and iOs apps will help your organize everything.
           </p>  
        </div>
      </section>
      {/* feature */}
      <section id='feature'>
        <div className=' section-container py-4 mb-10 flex flex-col text-center md:flex-row '>
          {/* image */}
          <img src="/src/assets/laptop3.jpg" className='md:w-1/2' alt="" />
          {/* content */}
          <div className='flex flex-col md:ml-20 md:text-left'>
            <div className=''>
            <h3 className='text-2xl text-gray-800 font-bold mt-10 md:px-4 md:text-left '>Quick Search</h3>
            <p className='text-gray-400 max-w-sm text-lg mt-4 md:px-4 mx-auto' >Clipboard allows you to track and organize everything you copy.s</p>
            </div>

            <div className=''>
            <h3 className='text-2xl text-gray-800 font-bold mt-10 md:px-4 md:text-left '>iCloud Sync</h3>
            <p className='text-gray-400 max-w-sm text-lg mt-4 md:px-4 mx-auto' >Clipboard allows you to track and organize everything you copy.s</p>
            </div>

            <div className=''>
            <h3 className='text-2xl text-gray-800 font-bold mt-10 md:px-4 md:text-left '>Completely History</h3>
            <p className='text-gray-400 max-w-sm text-lg mt-4 md:px-4 mx-auto' >Clipboard allows you to track and organize everything you copy.s</p>
            </div>
          </div>
        </div>
      </section>
        {/* access section */}
      <section id='access'>
        <div className='section-container text-center my-10'>
          <h2>Access clipboard anywhere</h2>
          <p className='max-w-3xl text-xl text-gray-400 mx-auto mb-10'>
            Access allows you to track and organize everything you copy. Instantly access your clipboard on every devices
             allows you to track and organize everything you copy. Instantly access your clipboard on every devices
          </p>
          {/* image */}
          <img src="/src/assets/laptop5.jpg" alt="" className='mx-auto md:w-5/6' />
        </div>

      </section>
      {/* supper section */}
      <section className='supper'>
      <div className='section-container text-center mx-auto my-20'>
        <h2>Supercharge your workflow</h2>
        <p className=' max-w-3xl text-xl mb-10 text-gray-400 mx-auto'>Supercharging your workflow involves implementing strategies and tools that enhance productivity and efficiency. By leveraging automation,</p>

        <div className='flex flex-col text-center mx-auto'>
          <div className='flex flex-col space-y-4 md:space-y-0 my-3 mb-5'>
            <BsCardChecklist className='w-10 h-10 mx-auto' />
            <h3>Create Blacklists</h3>
            <p className='text-gray-400 max-w-xs text-md text-center mx-auto'>Easily search your snippets by content, catagories, web </p>
          </div>
          <div className='flex flex-col space-y-4 md:space-y-0 my-3 mb-4'>
            <CiText className='w-10 h-10 mx-auto' />
            <h3>Plain Text Snippets</h3>
            <p className='text-gray-400 max-w-xs text-md text-center mx-auto'>Easily search your snippets by content, catagories, web </p>
          </div>
          <div className='flex flex-col space-y-4 md:space-y-0 my-3 mb-5'>
            <FaRegEye className='w-10 h-10 mx-auto' />
            <h3>Sneak Preview</h3>
            <p className='text-gray-400 max-w-xs text-md text-center mx-auto'>Easily search your snippets by content, catagories, web </p>
          </div> 
        </div>
      </div>
      </section>
      {/* advertise section */}
      <section className='advertise'>
        <div className='flex flex-col px-10'>
          <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-36 mb-16 mx-auto'>
            <TfiGoogle className='w-20 h-20' />
            <TfiMicrosoft className='w-20 h-20' />
            <IoLogoClosedCaptioning className='w-20 h-20' />
            <IoLogoSass className='w-20 h-20' />
          </div>
          <div className='section-container'>
            <h2 className='text-3xl'>Clipboard for iOS and Mac OS</h2>
            <p className='max-w-3xl text-xl text-gray-400 mb-10'>Clipboard instantly stores any item you copy in the cloud, meaning your
              can access your snippets immediately on all your devices.
            </p>
            <div className='flex flex-col justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5  font-semibold mb-10'>
              <button className='w-full px-5 p-4 border bg-green-500 rounded-full hover:bg-green-600 duration-200 md:w-auto'>Download for iOS</button>
              <button className='w-full px- p-4 border bg-blue-500 rounded-full hover:bg-blue-600 duration-200 md:w-auto'>Download for Mac</button>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className='bg-gray-50 p-6'>
        <BiLogoPinterest className='mx-auto w-10 h-10 mb-2 hover:text-green-500 text-green-200' />
        <div className='flex flex-col mb-2 items-center justify-center'>
          <div className='text-gray-400 text-sm font-semibold'>FAQs</div>
          <div className='text-gray-400 text-sm font-semibold'>Contact us</div>
          <div className='text-gray-400 text-sm font-semibold'>Privacy policy</div>
          <div className='text-gray-400 text-sm font-semibold'>Press kit</div>
          <div className='text-gray-400 text-sm font-semibold'>Install guid</div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex space-x-4'>
          <FaFacebook  className='w-5 h-5 text-blue-600 mx-auto  cursor-pointer'/>
          <IoLogoYoutube  className='w-5 h-5 text-red-600 mx-auto  cursor-pointer'/>
          <IoLogoTwitter  className='w-5 h-5 text-blue-600 mx-auto  cursor-pointer'/>
          </div>
        </div>
      </footer>
    </>
  )
}
//A history of everything you copy
//Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on every devices
//Clipboard instantly stores any item you copy in the cloud, meaning your
//can access your snippets immediately on all your devices. Our Mac and iOs apps will help your organize everything.