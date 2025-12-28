import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import { formatDate, truncateText } from '../utils/helpers';
import Card from '../components/Common/Card';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      <div className="blog-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="page-description">
                Stay updated with the latest trends, tips, and insights from the tech world
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="blog-content section">
        <div className="container">
          <div className="blog-filters">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search"
            />
            <div className="blog-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
                <Link to={`/blog/${post.id}`}>
                  <Card className="blog-card">
                    <div className="blog-image-wrapper">
                      <img src={post.image} alt={post.title} />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-content-wrapper">
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{truncateText(post.excerpt, 150)}</p>
                      <div className="blog-meta">
                        <span className="blog-author">{post.author}</span>
                        <span className="blog-date">{formatDate(post.date)}</span>
                        <span className="blog-read-time">{post.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>No blog posts found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Blog;

