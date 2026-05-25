import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta('Page Not Found | Emmanuel Nwachukwu', 'The requested page was not found.');

  return (
    <main style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>The page you requested does not exist.</p>
      <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Go back home</Link>
    </main>
  );
}
