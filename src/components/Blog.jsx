import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../styles/Blog.css";

// Import image
import blogImg from "../assets/blog 1 .jpg";

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const blogs = [
    {
      id: 1,
      title: "What if life isn’t meant to be cracked in one moment?",
      excerpt:
        "Life = ∫ (Birth → Death) (Happiness / Time) d(Time). Lately, I’ve been thinking about life less as a single achievement and more as an accumulation...",
      date: "Recent Thought",
      readTime: "3 min read",
      image: blogImg,
      fullContent: `What if life isn’t meant to be cracked in one moment? 🤔
(And don’t worry, I think you won’t be confused by the equation.)

Life = ∫ (Birth → Death) (Happiness / Time) d(Time)

Lately, I’ve been thinking about life less as a single achievement and more as an accumulation 📈

Not every day stands out.
Some days feel noisy; some feel quiet.
But together, they shape the journey.

A bad day doesn’t ruin life.
A great day doesn’t define it either.

This thought keeps coming back to me when I think about careers, personal growth, and the way I’m upskilling day by day.

Nothing meaningful shows results instantly. Learning takes time ⏳
Understanding takes repetition. Growth moves slowly, often without us noticing, but it compounds.

Time is always part of the equation. We keep learning, adapting, and improving.

Mastery isn’t built in one breakthrough moment; it’s built by showing up consistently, even on the most ordinary days 💻

What seems to matter most is how much meaning, growth, and quiet happiness we collect along the way, even in small doses.

Just a realization:
Life, like any long journey, isn’t about chasing one defining moment.
It’s about respecting the process and trusting that things add up ✨

A small reminder:
Be patient with yourself. Keep trying. Time will take care of the rest.`,
    },
  ];

  return (
    <section className="blog-page">
      <div className="container" style={{ paddingTop: "20px" }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            color: "var(--primary-color)",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Tech Chronicles</h2>
          <p>
            Thoughts, tutorials, and insights on the evolving tech landscape.
          </p>
        </motion.div>

        {/* Blog Grid with Animation */}
        <div className="blog-grid" style={{ justifyContent: "center" }}>
          {blogs.map((blog, index) => {
            const isExpanded = expandedId === blog.id;
            return (
              <motion.article
                key={blog.id}
                className={`blog-card ${isExpanded ? "expanded" : ""}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="date">{blog.date}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <motion.div layout className="blog-text-container">
                    {isExpanded ? (
                      <div className="blog-full-content">
                        {blog.fullContent.split("\n").map((line, i) => (
                          <p key={i}>{line || <br />}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="blog-excerpt">{blog.excerpt}</p>
                    )}
                  </motion.div>
                  <div className="blog-footer">
                    <span
                      className="read-more"
                      onClick={() => toggleExpand(blog.id)}
                    >
                      {isExpanded ? "Show Less" : "Read Article"}{" "}
                      <FaArrowRight
                        style={{
                          transform: isExpanded
                            ? "rotate(-90deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
