import React, { useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import './LegalPage.css';

export default function LegalPage({ title, children }) {
  useEffect(() => {
    document.title = `${title} | PeakTew`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
    <DarkModeToggle />
    <main className="legal-page">
      <article className="legal-document">
        <h1>PeakTew {title}</h1>
        <div className="legal-dates">
          <p>Effective Date: <time dateTime="2025-12-08">December 8, 2025</time></p>
          <p>Last Updated: <time dateTime="2025-12-08">December 8, 2025</time></p>
        </div>
        {children}
      </article>
    </main>
    </>
  );
}
