import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS_BY_SLUG } from '../blog/posts';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './blog.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? BLOG_POSTS_BY_SLUG.get(slug) : undefined;

  useDocumentMeta(
    post ? `${post.title} | Emmanuel Nwachukwu` : 'Post Not Found | Emmanuel Nwachukwu',
    post?.description ?? 'The requested blog post could not be found.'
  );

  if (!post) {
    return (
      <main className="blog-page">
        <section className="blog-container">
          <h1 className="blog-title">Post not found</h1>
          <p className="blog-subtitle">The requested article does not exist.</p>
          <Link className="blog-back" to="/blog">← Back to blog</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-page">
      <article className="blog-container blog-post">
        <Link className="blog-back" to="/blog">← Back to blog</Link>
        <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-subtitle">{post.description}</p>

        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>

        <div className="blog-content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
