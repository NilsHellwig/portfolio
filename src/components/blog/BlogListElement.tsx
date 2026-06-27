import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
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
  const month = convertMonth[parseInt(blog.term.split("/")[1])];
  const day = blog.term.split("/")[0];
  const year = blog.term.split("/")[2];

  return (
    <Link to={`/portfolio/blog/${blog.url}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full border-[0.5px] border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-900/60 transition-all duration-200 flex flex-col"
      >
        {/* Colored accent strip */}
        <div className="h-1.5 flex-shrink-0" style={{ backgroundColor: blog.bgColor }} />

        <div className="p-6 flex flex-col flex-1">
          {/* Category + date */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${blog.bgColor}22`, color: blog.bgColor }}
            >
              {blog.category}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {month} {day}, {year}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
            {blog.title}
          </h2>

          {/* Footer pinned to bottom */}
          <div className="flex items-center justify-between pt-4 mt-auto border-t border-zinc-100 dark:border-zinc-700">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">By {blog.author}</span>
            <ArrowRight
              size={16}
              weight="bold"
              className="text-zinc-400 group-hover:translate-x-1 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-all duration-200"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogListElement;
