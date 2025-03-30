'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            <span role="img" aria-label="smiley">😊</span>
          </Link>
          <div className="nav-links">
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/download" 
              className={`nav-link ${pathname === '/download' ? 'active' : ''}`}
            >
              Download
            </Link>
            <Link 
              href="/team" 
              className={`nav-link ${pathname === '/team' ? 'active' : ''}`}
            >
              Team
            </Link>
            <Link 
              href="/features" 
              className={`nav-link ${pathname === '/features' ? 'active' : ''}`}
            >
              Features
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}