/**
 * GitHub API service for ipankexe with client-side caching & fallback support
 */

const USERNAME = 'ipankexe';
const CACHE_KEY = 'portfolio_github_repos_cache';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

export const fallbackRepos = [
  {
    name: 'pos-kulu-asri',
    description: 'Sistem Kasir Modern (POS), Pemesanan Mandiri Meja (QR Self-Order), dan Dashboard Analitik Finansial untuk Rumah Makan Kulu Asri.',
    language: 'PHP / Blade',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/pos-kulu-asri',
    updated_at: '2026-10-04T12:38:38Z',
    fork: false,
    topics: ['laravel-12', 'pos-system', 'chartjs', 'mysql', 'qr-order'],
  },
  {
    name: 'pos-bergegaz',
    description: 'Modern, Lightweight & Mobile-First Point of Sales System for Street Coffee with Cash Shift Reconciliation & Atomic Void Rollbacks.',
    language: 'Python / Laravel',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/pos-bergegaz',
    updated_at: '2026-10-04T12:36:12Z',
    fork: false,
    topics: ['laravel-12', 'pwa', 'pos', 'mobile-first', 'tailwind-v4', 'phpunit'],
  },
  {
    name: 'webdamkar',
    description: 'Sistem Informasi Dinas Pemadam Kebakaran Kota Semarang Berbasis Website (Diskominfo Internship Project).',
    language: 'JavaScript',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/webdamkar',
    updated_at: '2025-07-29T17:39:38Z',
    fork: false,
    topics: ['react-19', 'express', 'mongodb', 'diskominfo', 'vite'],
  },
  {
    name: 'ticketing_app',
    description: 'Project capstone Bimkar Laravel Ticketing app - Event Discovery & Ticket Booking Platform.',
    language: 'PHP / Blade',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/ticketing_app',
    updated_at: '2026-01-24T05:08:48Z',
    fork: false,
    topics: ['laravel', 'ticket-booking', 'mysql', 'blade'],
  },
  {
    name: 'ML-A11202214681-UAS',
    description: 'Face Tracking & Deep Learning Computer Vision project with image data augmentation and Django web integration.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/ML-A11202214681-UAS',
    updated_at: '2024-07-23T07:04:07Z',
    fork: false,
    topics: ['computer-vision', 'deep-learning', 'python', 'django'],
  },
  {
    name: 'DataMining24',
    description: 'Academic data mining pipelines: data cleaning, missing value handling, and exploratory data analysis.',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    html_url: 'https://github.com/ipankexe/DataMining24',
    updated_at: '2024-10-31T18:03:40Z',
    fork: false,
    topics: ['data-mining', 'python', 'eda', 'pandas'],
  },
];

export async function fetchUserRepos() {
  // Check local cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
        return { repos: data, isFallback: false, fromCache: true };
      }
    }
  } catch (e) {
    console.warn('GitHub cache read error', e);
  }

  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=15`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub API responded with status ${res.status}`);
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) {
      throw new Error('Invalid response structure');
    }

    // Filter out forks if preferred or keep informative ones, clean list
    const filtered = repos
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description || fallbackRepos.find((f) => f.name === r.name)?.description || 'Public repository by ipankexe',
        language: r.language || 'Code',
        stargazers_count: r.stargazers_count || 0,
        html_url: r.html_url,
        updated_at: r.updated_at,
        topics: r.topics || [],
      }));

    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: filtered })
      );
    } catch (e) {
      console.warn('GitHub cache write error', e);
    }

    return { repos: filtered, isFallback: false, fromCache: false };
  } catch (error) {
    console.warn('GitHub API request failed, switching to verified fallback data:', error.message);
    return { repos: fallbackRepos, isFallback: true, fromCache: false, error: error.message };
  }
}
