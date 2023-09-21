import BlogCard from '../components/BlogCard';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <BlogCard
          title="Sample Blog Title"
          author="John Doe"
          date="September 21, 2023"
          content="This is a sample blog card created with Tailwind CSS in a Next.js application."
        />
      </div>
    </>
  )
}
