import BlogCard from '../components/BlogCard';
import Layout from '../components/layout/Layout';
import PostModal from '../components/modal/PostModal';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <PostModal />
        <BlogCard
          title="Sample Blog Title"
          author="John Doe"
          date="September 21, 2023"
          content="This is a sample blog card created with Tailwind CSS in a Next.js application."
          isEditPage={true}
        />
      </div>
    </Layout>
  )
}
