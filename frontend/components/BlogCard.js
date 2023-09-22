// components/BlogCard.js

import Link from 'next/link';
import React, { useState } from 'react';

const BlogCard = ({ title, author, date, content, isEditPage }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className='flex h-[260px] md:w-[49%] sm:w-full bg-white relative shadow-lg rounded-lg my-5 overflow-hidden'>
            <div className="overflow-hidden w-[30%]  cursor-pointer">
                <Link href="/blog-details/1">
                    <img
                        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog-2.webp"
                        alt="Blog Image"
                        className="w-full h-48 object-cover object-center"
                    />
                </Link>
            </div>
            <div className="overflow-hidden w-[70%]">
                <div className="p-6 relative w-full h-full min-h-[100px]">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className={`mt-4 text-gray-700 overflow-hidden ${isReadMore ? 'max-h-[90px]' : 'max-h-[50px]'}`}>
                        {content}
                    </p>
                    <span className='text-yellow-500 ml-1' onClick={toggleReadMore}>{isReadMore ? 'Read Less' : 'Read More'}</span>

                    {isEditPage && <div className='my-5 flex gap- justify-end'>
                        <span className='flex gap-2 text-gray-700 items-center pr-2 mr-2 border-r border-[#d1d1d1] cursor-pointer'><img className='w-8 h-8' alt="edit" src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png" />Edit</span>
                        <span className='flex gap-2 text-gray-700 items-center  cursor-pointer'><img className='w-8 h-8' alt="delete" src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/127-512.png" />Delete</span>
                    </div>}
                </div>
            </div>
            <p className="text-sm text-gray-600 flex gap-2 items-center absolute right-0 bottom-0 w-full bg-[#faebd7] flex justify-center p-3"><img alt="Blog author" className='w-10 h-10 rounded-full' src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"></img><span className='border-r flex items-center border-[#d1d1d1] pr-2 h-8'>By {author}</span>  <img alt='date' className='w-10 h-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"></img> {date}</p>
        </div>
    );
};

export default BlogCard;