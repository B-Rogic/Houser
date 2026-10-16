import React, { useState } from 'react';

// Define the shape of each category item
interface CategoryItem {
  id: string;
  title: string;
  videoUrl: string;
}

const categories: CategoryItem[] = [
  { id: '1', title: 'UGC', videoUrl: 'https://www.pexels.com/download/video/14221297/' },
  { id: '2', title: 'DOCUMENTARY', videoUrl: 'https://www.pexels.com/download/video/2882950/' },
  { id: '3', title: 'CORPORATE', videoUrl: 'https://www.pexels.com/download/video/3195394/' },
  { id: '4', title: 'COMMERCIAL', videoUrl: 'https://www.pexels.com/download/video/4763853/' },
  { id: '5', title: 'EVENT', videoUrl: 'https://www.pexels.com/download/video/3195394/' },
  { id: '6', title: 'SOCIAL MEDIA', videoUrl: 'https://www.pexels.com/download/video/14221297/' },
  { id: '7', title: 'BRAND FILM', videoUrl: 'https://www.pexels.com/download/video/2882950/' },
  { id: '8', title: 'PRODUCT', videoUrl: 'https://www.pexels.com/download/video/4763853/' },
];

export default function CreativeObsessionGallery() {
  // Track which category is currently active (defaults to index 3: COMMERCIAL)
  const [activeIndex, setActiveIndex] = useState<number>(3);

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <header style={styles.header}>
        <div style={styles.logoGroup}>
          <span style={styles.logoText}>CREATIVE OBSESSION</span>
          <div style={styles.sequenceBadge}>
            {/* Arrow Turn Down Right / Corner Down Right Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 10 4 15 9 20"></polyline>
              <path d="M4 15h11a4 4 0 0 0 4-4V4"></path>
            </svg>
            <span>SEQUENCE</span>
          </div>
        </div>
        <div style={styles.menuButton}>MENU</div>
      </header>

      {/* Main Content Layout */}
      <div style={styles.mainContent}>
        {/* Left Section: Title */}
        <div style={styles.leftSection}>
          <h1 style={styles.playgroundTitle}>OUR PLAYGROUND</h1>
        </div>

        {/* Middle Section: Vertical Category List */}
        <div style={styles.categoryList}>
          {categories.map((cat, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                style={{
                  ...styles.categoryItem,
                  ...(isActive ? styles.categoryItemActive : {}),
                }}
              >
                {cat.title}
              </div>
            );
          })}
        </div>

        {/* Right Section: Dynamic Video Preview Panel */}
        <div style={styles.previewPanel}>
          <video
            key={categories[activeIndex].videoUrl} // Forces reload/transition on change
            src={categories[activeIndex].videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={styles.videoStyle}
          />
        </div>
      </div>
    </div>
  );
}

// Styles object for clean inline configuration matching the dark theme
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 40px',
    borderBottom: '1px solid #222222',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 800,
    letterSpacing: '1px',
  },
  sequenceBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    fontWeight: 600,
    border: '1px solid #333',
    padding: '4px 10px',
    borderRadius: '4px',
    color: '#aaa',
  },
  menuButton: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '1px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    height: 'calc(100vh - 73px)',
  },
  leftSection: {
    flex: 1.2,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '60px',
  },
  playgroundTitle: {
    fontSize: '3.5rem',
    fontWeight: 900,
    letterSpacing: '-1px',
  },
  categoryList: {
    flex: 1.2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
    paddingLeft: '40px',
  },
  categoryItem: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#555555',
    cursor: 'pointer',
    transition: 'color 0.2s ease, background-color 0.2s ease',
    padding: '6px 16px',
    borderRadius: '4px',
    width: 'fit-content',
  },
  categoryItemActive: {
    color: '#ffffff',
    backgroundColor: '#e50914', // Signature bright red highlight seen in the video
  },
  previewPanel: {
    flex: 1.5,
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  videoStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
};