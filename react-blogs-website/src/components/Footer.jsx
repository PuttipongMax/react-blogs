import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='
            px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full 
            lg:max-w-screen-xl md:px-24 lg:px-4
        '>
            <div className="grid mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p 
                        className="font-medium tracking-wide 
                        text-gray-300">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >News</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >World</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Games</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >References</a>
                            </li>
                        </ul>
                    </div>

                    {/* category 2 */}
                    <div>
                        <p 
                        className="font-medium tracking-wide 
                        text-gray-300">
                            Apples
                        </p>
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Web</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >eCommerce</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Business</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Entertainment</a>
                            </li>
                            <li>
                                <a href="/"
                                className="text-gray-500 transition-colors
                                duration-300 hover:text-orange-500"
                                >Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/* category 3 */}
                    <div>
                        <p 
                        className="font-medium tracking-wide 
                        text-gray-300">
                            Cherry
                        </p>
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Media</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Brochure</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Nonprofit</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Education</a>
                            </li>
                            <li>
                                <a href="/"
                                className="text-gray-500 transition-colors
                                duration-300 hover:text-orange-500"
                                >Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* category 4 */}
                    <div>
                        <p 
                        className="font-medium tracking-wide 
                        text-gray-300">
                            Business
                        </p>
                        <ul className="mt-2 space-y-2 ">
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Infopreneur</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Personal</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Wiki</a>
                            </li>
                            <li>
                                <a
                                href='/' 
                                className='text-gray-500 transition-colora 
                                hover:text-orange-500 duration-300'
                                >Forum</a>
                            </li>
                            <li>
                                <a href="/"
                                className="text-gray-500 transition-colors
                                duration-300 hover:text-orange-500"
                                >Projects</a>
                            </li>
                        </ul>
                    </div>

                </div>

                 {/* subscription */}
                 <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p 
                        className="font-medium tracking-wide 
                        text-gray-300">
                            Subscribe for updates
                        </p>
                        <form className='mt-4 flex flexz-col md:flex-row'>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                            className="flex-grow w-full h-12 px-4 mb-3 transition
                            duration-200 bg-white border rounded shadow-sm
                            border-gray-300 aspect-auto md:mr-2 md:mb-0 
                            focus:border-purple-400 focus:outline-none 
                            "
                            />
                            <button 
                            type="submit"
                            className="inline-flex items-center justify-center
                            h-12 px-6 font-medium tracking-wide text-white
                            transition duration-200 rounded shadow-md
                            hover:bg-orange-500 focus:outline-none border"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p
                        className="mt-4 text-sm text-gray-500"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Modi ipsa ea magni sequi unde quia atque at officia, ratione 
                        esse optio animi maxime facilis tempora voluptatem molestiae 
                        eveniet nam dolores.
                        </p>
                    </div>
            </div>

            <div className="flex flex-col justify-between pt-5 pb-10 border-t
            border-gray-800 sm:flex-row">
                <p className="text-sm text-gray-500">Copyright 2023 | All right reserevedd.</p>
                <div className='flex flex-row items-center mt-4 space-x-4 sm:mt-0'>
                    <a 
                    href=""
                    className="text-gray-500 transition-all duration-300 hover:text-orange-500"
                    >
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a 
                    href=""
                    className="text-gray-500 transition-all duration-300 hover:text-orange-500"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a 
                    href=""
                    className="text-gray-500 transition-all duration-300 hover:text-orange-500"
                    >
                        <FaFacebook className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
