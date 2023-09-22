// pages/blog-details/[slug].js
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

export default function Post(props) {
  const router = useRouter();

  return (
    <Layout>
      <div className='max-w-[1200px] w-full mx-auto mt-10 mb-10'>
        <div className="max-w-[1200px] flex mx-auto items-center mb-10 gap-2">
          <Link href="/" className="">
            <img className='w-6 cursor-pointer' alt="Back Image" src='https://cdn-icons-png.flaticon.com/512/93/93634.png' />
          </Link>
          <h2 className="text-2xl font-semibold text-black"> Blog Detail</h2>
        </div>
        <div className='w-full bg-[#faebd7] rounded-xl overflow-hidden'>
          <div className="overflow-hidden w-full h-[300px] flex justify-center bg-black">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/how-to-start-a-blog-2.webp"
              alt="Blog Image"
              className="w-auto h-full object-cover object-center"
            />
          </div>
          <div className="p-6 relative w-full h-full">
            <div className='flex justify-between items-center'>
              <h3 className="text-xl font-semibold text-gray-800">title</h3>
              <p className="text-sm text-gray-600 flex gap-2 items-center flex justify-end p-3"><img className='w-10 h-10 rounded-full' alt="Blog author" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"></img><span className='border-r flex items-center border-[#d1d1d1] pr-2 h-8'>By author</span>  <img className='w-10 h-10 rounded-full' alt="Blog date" src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png"></img> date</p>
            </div><p className="mt-4 text-gray-700">content</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Access the slug from context.params

  return {
    props: {
      id,
    },
  };
}