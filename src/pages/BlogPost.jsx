import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/helpers';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-hero">
        <div className="blog-post-hero-overlay"></div>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="blog-post-header">
              <span className="blog-post-category">{post.category}</span>
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span>By {post.author}</span>
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="blog-post-content section">
        <div className="container">
          <div className="blog-post-wrapper">
            <AnimatedSection direction="up">
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-body">
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-text">
                  <p>{post.content}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="blog-post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default BlogPost;

