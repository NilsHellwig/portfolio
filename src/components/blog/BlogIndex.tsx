import { BLOGS } from "../../data/blogs";
import { motion } from "framer-motion";
import BlogListElement from "./BlogListElement";
import Footer from "../Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogIndex: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ fontFamily: "Inter" }}
      className="pb-8"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="border-b border-zinc-200 dark:border-zinc-700 pb-3 mb-8 mt-10"
      >
        <div className="flex items-baseline gap-2.5">
          <span className="text-base sm:text-lg font-mono font-bold text-zinc-400 dark:text-zinc-500 tabular-nums">
            01
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Blog
          </h1>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
          Thoughts on my academic journey, software engineering, and innovation
        </p>
      </motion.div>

      {/* Card grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BLOGS.map((blog) => (
          <motion.div key={blog.id} variants={itemVariants}>
            <BlogListElement blog={blog} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12">
        <Footer />
      </div>
    </motion.div>
  );
};

export default BlogIndex;
