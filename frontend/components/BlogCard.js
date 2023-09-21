// components/BlogCard.js
import React from 'react';

const BlogCard = ({ title, author, date, content }) => {
    return (
        <div className='max-w-[1200px] w-full mx-auto'>
            <div className='flex gap-5 flex-wrap flex-col'>
                <div className='flex w-1/2 bg-white shadow-lg rounded-lg my-5 overflow-hidden'>
                    <div className="overflow-hidden w-[30%]">
                        <img
                            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog-2.webp"
                            alt="Blog Image"
                            className="w-full h-48 object-cover object-center"
                        />
                    </div>
                    <div className="overflow-hidden w-[70%]">

                        <div className="p-6 relative w-full h-full">
                            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                            <p className="text-sm text-gray-600 flex gap-2 items-center absolute right-0 bottom-0 w-full bg-[#faebd7] flex justify-end p-3"><img className='w-10 h-10 rounded-full' src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"></img><span className='border-r flex items-center border-[#d1d1d1] pr-2 h-8'>By {author}</span>  <img className='w-10 h-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"></img> {date}</p>
                            <p className="mt-4 text-gray-700">{content}</p>
                        </div></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;