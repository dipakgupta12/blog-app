import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import Layout from '../components/layout/Layout';
// import fetchData from '../utils/api';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    // fetchData().then((result) => {
    //   setData(result);
    // });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <BlogCard
          title="Sample Blog Title"
          author="John Doe"
          date="September 21, 2023"
          content="This is a sample blog card created with Tailwind CSS in a Next.js application."
          isEditPage={false}
        />
      </div>
    </Layout>
  )
}
