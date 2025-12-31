import { BLOGS } from "../../data/blogs";
import { motion } from "framer-motion";
import BlogListElement from "./BlogListElement";

const BlogIndex: React.FC = () => {
  return (
    <div style={{ fontFamily: "Inter" }} className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Blog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Thoughts on my academic journey, software engineering, and innovation
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {BLOGS.map((blog, index) => (
            <motion.div 
              key={blog.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1
              }}
            >
              <BlogListElement blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
