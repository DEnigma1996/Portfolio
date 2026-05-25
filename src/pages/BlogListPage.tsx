import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../blog/posts';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './blog.css';

export default function BlogListPage() {
  useDocumentMeta(
    'Tech Blog | Emmanuel Nwachukwu',
    'Tech blog posts on Java, Spring Boot, system design, and developer learning workflows.'
  );

  return (
    <main className="blog-page">
      <section className="blog-container">
        <h1 className="blog-title">Tech Blog</h1>
        <p className="blog-subtitle">Notes, guides, and learning updates from my engineering journey.</p>

        <div className="blog-list">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
              <h2>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
