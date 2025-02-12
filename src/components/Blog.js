import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";

const blogPosts = [
  {
    date: "Jan 21 2025",
    readTime: "6 min read",
    title: "The ABC of design: Five principles of graphic design",
    description:
      "Design principles underpin everything we create as designers. ",
  },
  {
    date: "Apr 2 2024",
    readTime: "3 min read",
    title: "48 essential free resources for graphic designers",
    description:
      "Turn your GitHub Issues into a powerful Next.js blog to write more and publish faster!",
  },
  {
    date: "Jul 18 2022",
    readTime: "2 min read",
    title: "4 ways to improve your graphic design skills",
    description: "Never leave your hands on your keyboard again.",
  },
  {
    date: "Sep 22 2021",
    readTime: "3 min read",
    title: "Use Case vs User Story: Key Differences in UX Explained",
    description: "No more typing the same thing over and over again with Code Snippets!",
  },
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <motion.h1
        className="blog-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blog
      </motion.h1>
      <motion.p
        className="blog-description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        This is where I share my writings on programming, tutorials, and my experiences.
      </motion.p>

      <motion.div
        className="search-bar"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <input
          type="text"
          className="blog-search"
          placeholder="Search articles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>

      <motion.div
        className="blog-list"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={index}
            className="blog-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="blog-meta">
              <span>{post.date}</span> • <span>{post.readTime}</span>
            </div>
            <h2 className="blog-heading">{post.title}</h2>
            <p className="blog-desc">{post.description}</p>
            <a href={`/blog${index + 1}`} className="blog-link">
              Learn more →
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.footer
        className="blog-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>
          Designed and Developed by <span className="highlight-contact">Hari Baskar</span>.
        </p>
      </motion.footer>
    </div>
  );
}

export default Blog;