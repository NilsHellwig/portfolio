import { ArrowArcRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { BLOGS } from "../../data/blogs";
import { motion } from "framer-motion";
import BlogListElement from "./BlogListElement";

const BlogIndex: React.FC = () => {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <div className="flex justify-between bg-zinc-200 p-4 fixed top-0 w-screen bg-opacity-80 backdrop-blur-sm z-20 items-center gap-2">
        <div className="flex items-center">
          <p className="text-xl text-black font-bold" style={{ fontFamily: "RedditMono" }}>
            /blog/nilshellwig
          </p>
        </div>
        <Link to="/portfolio" className="p-1 px-2 bg-black rounded-xl font-bold hover:bg-zinc-700 cursor-pointer flex flex-row items-center gap-1 text-white bg-opacity-80 backdrop-blur">
          <span>see portfolio</span>
          <ArrowArcRight />
        </Link>
      </div>
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
