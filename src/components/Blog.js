import React, { useState } from "react";
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
    title: "11 ways to improve your graphic design skills",
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
      <h1 className="blog-title">Blog</h1>
      <p className="blog-description">
        This is where I share my writings on programming, tutorials, and my experiences.
      </p>

      <div className="search-bar">
      
        <input
          type="text"
          className="blog-search"
          placeholder="Search articles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="blog-list">
        {filteredPosts.map((post, index) => (
          <div key={index} className="blog-item">
            <div className="blog-meta">
              <span>{post.date}</span> • <span>{post.readTime}</span>
            </div>
            <h2 className="blog-heading">{post.title}</h2>
            <p className="blog-desc">{post.description}</p>
            <a href={`/blog${index + 1}`} className="blog-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
      <footer className="blog-footer">
        <p>
          Designed and Developed by <span className="highlight">Hari Prasad</span>.
        </p>
        <p>
          Built with <span className="highlight">Next.js</span> &{" "}
          <span className="highlight">Chakra UI</span>. Hosted on{" "}
          <span className="highlight">Vercel</span>.
        </p>
      </footer>
    </div>
  );
}

export default Blog;
