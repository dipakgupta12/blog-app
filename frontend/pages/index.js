import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Layout from '../components/layout/Layout';
import { fetchData } from '../utils/api';
import NoDataFound from '../components/noDataFoundCard';


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const data = fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="max-w-[1200px] flex justify-between mx-auto items-center mb-4">
          <h2 className="text-2xl font-semibold text-black"> Blogs</h2>
        </div>
        {true ? <>

          <div className='flex flex-wrap justify-between'>
          <BlogCard
          title="Sample Blog Title"
          author="John Doe"
          date="September 21, 2023"
          content="This is a sample blog card created with Tailwind CSS in a Next.js application."
          isEditPage={false}
        />
          <BlogCard
          title="Sample Blog Title"
          author="John Doe"
          date="September 21, 2023"
          content="This is a sample blog card created with Tailwind CSS in a Next.js application.This is a sample blog card created with Tailwind CSS in a Next.js application.This is a sample blog card created with Tailwind CSS in a Next.js application."
          isEditPage={false}
        />
        
        </div>
        </> :
          <NoDataFound />}
      </div>
    </Layout>
  )
}
