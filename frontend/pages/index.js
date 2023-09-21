import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <BlogCard 
        title="Sample Blog Title"
        author="John Doe"
        date="September 21, 2023"
        content="This is a sample blog card created with Tailwind CSS in a Next.js application."
      />
    </div>
  )
}
