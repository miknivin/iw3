import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | iW3',
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0e1a',
            color: '#fff',
            fontFamily: 'Segoe UI, sans-serif',
            textAlign: 'center',
            padding: '20px',
        }}>
            <h1 style={{ fontSize: '6rem', fontWeight: 800, color: '#ff8c00', margin: 0 }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', margin: '16px 0' }}>Page Not Found</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
                The page you are looking for does not exist.
            </p>
            <Link href="/" style={{
                background: '#ff8c00',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
            }}>
                Back to Home
            </Link>
        </div>
    );
}
