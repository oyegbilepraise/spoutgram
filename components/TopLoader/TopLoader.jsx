import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/layout/HomeLayout/HomeLayout.module.css';

const TopLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className={styles.tploader}>
          <div className={styles.loader_line} />
        </div>
      )}
    </>
  );
};

export default TopLoader;