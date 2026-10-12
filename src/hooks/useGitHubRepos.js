import { useState, useEffect } from 'react';
import { fetchUserRepos, fallbackRepos } from '../services/githubService';

export function useGitHubRepos() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      const result = await fetchUserRepos();
      if (isMounted) {
        setRepos(result.repos || fallbackRepos);
        setIsFallback(result.isFallback);
        setError(result.error || null);
        setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { repos, loading, isFallback, error };
}
