import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { convertMonth } from "../../data/blogs";

interface BlogType {
  id: string;
  url: string;
  category: string;
  author: string;
  term: string;
  textColor: string;
  bgColor: string;
  title: string;
}

interface BlogListElementProps {
  blog: BlogType;
}

const BlogListElement: React.FC<BlogListElementProps> = ({ blog }) => {
  return (
    <Link to={`/portfolio/blog/${blog.url}`} className="block group">
      <motion.div 
        whileHover={{ x: 4 }} 
        transition={{ duration: 0.2 }}
        className="py-8 border-b border-zinc-200 cursor-pointer"
        style={{ textDecoration: "none" }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span>{convertMonth[parseInt(blog.term.split("/")[1])]} {blog.term.split("/")[0]}, {blog.term.split("/")[2]}</span>
            <span>•</span>
            <span>{blog.category}</span>
          </div>
          
          <h2 className="text-2xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {blog.title}
          </h2>
          
          <div className="flex items-center text-sm text-zinc-500">
            <span>By {blog.author}</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">Read more →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogListElement;
