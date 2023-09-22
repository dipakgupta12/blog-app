import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Layout from "../components/layout/Layout";
import { fetchData } from "../utils/api";
import NoDataFound from "../components/noDataFoundCard";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const data = fetchData().then((result) => {
      setData(result?.blogs);
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="max-w-[1200px] flex justify-between mx-auto items-center mb-4">
          <h2 className="text-2xl font-semibold text-black"> Blogs</h2>
        </div>
        {data?.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-between">
              {data?.map((item) => {
                console.log(item);
                return (
                  <BlogCard
                    key={item?._id}
                    title={item?.title}
                    author={item?.authorName}
                    date={item?.createdAt}
                    content={item?.description}
                    image={item?.image?.data}
                    isEditPage={false}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <NoDataFound />
        )}
      </div>
    </Layout>
  );
}
