import { BLOGS } from "../../data/blogs";
import { motion } from "framer-motion";
import BlogListElement from "./BlogListElement";

const BlogIndex: React.FC = () => {
  return (
    <div style={{ fontFamily: "Inter" }}>
      
      <div className="mt-16">
        {BLOGS.map((blog) => (
          <motion.div key={blog.id} initial={{ opacity: 0, scale: 0.8, y: -50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <BlogListElement blog={blog} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
