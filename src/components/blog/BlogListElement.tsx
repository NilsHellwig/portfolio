import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { convertMonth } from "../../data/blogs";

interface BlogType {
  id: string;
  url: string;
  category: string;
  author: string;
  term: string;
  iconPath: string;
  title: string;
}

interface BlogListElementProps {
  blog: BlogType;
}

const BlogListElement: React.FC<BlogListElementProps> = ({ blog }) => {
  return (
    <Link to={`/portfolio/blog/${blog.url}`}>
      <motion.div whileHover={{ scale: 1.03 }} className="w-screen h-screen border-b-[1.5px] flex flex-col justify-between cursor-pointer" style={{ textDecoration: "none" }}>
        <div></div>
        <div style={{ fontFamily: "RedditMono" }} className="flex text-4xl justify-center">
          <span>{blog.title}</span>
        </div>
        <div className="flex flex-row gap-8 p-8">
          <div className="flex flex-col">
            <span className="font-regular">Post #{blog.id}</span>
            <span className="text-zinc-400 text-light">{blog.category}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-regular">{blog.author}</span>
            <span className="text-zinc-400 text-light">Author</span>
          </div>
          <div className="flex flex-col">
            <span className="font-regular">
              {convertMonth[parseInt(blog.term.split("/")[1])]} {blog.term.split("/")[0]}
            </span>
            <span className="text-zinc-400 text-light">{blog.term.split("/")[2]}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogListElement;