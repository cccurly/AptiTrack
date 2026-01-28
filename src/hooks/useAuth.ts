"use client";

import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('aptiTrackUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else if (pathname !== '/' && pathname !== '/register') {
        router.replace('/');
      }
    } catch (error) {
        if (pathname !== '/' && pathname !== '/register') {
            router.replace('/');
        }
    } finally {
        setLoading(false);
    }
  }, [router, pathname]);

  const logout = useCallback(() => {
    localStorage.removeItem('aptiTrackUser');
    localStorage.removeItem('aptiTrack-history');
    localStorage.removeItem('aptiTrack-latestResultId');
    setUser(null);
    router.push('/');
  }, [router]);

  return { user, logout, loading };
}
