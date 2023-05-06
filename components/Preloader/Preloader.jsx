import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from '@/layout/AuthLayout/AuthLayout.module.css';
import { PageSpinner } from "../../components";
const Preloader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); 
  let timerId;

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
        document.body.classList.add(styles.no_scroll);
      }
    };
    const handleComplete = (url) => {
      if (url === router.asPath) {
        setLoading(false);
        document.body.classList.remove(styles.no_scroll);
      }
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    if (!loading) {
      const preloader = document.querySelector(`.${styles.loader__}`);
      const appbody = document.querySelector('.appBody__main');

      if (preloader) {
        appbody.classList.add(styles.no_scroll);
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
          preloader.classList.add(styles.fadeOut);
          setTimeout(() => {
            preloader.remove();
            appbody.classList.remove(styles.no_scroll);
          }, 1000);
        }, 6000); 
        preloader.classList.remove(styles.fadeOut);
      }
    }
  }, [loading]);

  return (
    <div id="allpageLoader" className={styles.loader__}>
      <div className={styles.react__loader__child__div}>
        <svg
          className={`${styles._0004_logo_svg} ${styles._loader_img}`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 582.4 115"
          >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html: ".cls-1{fill:url(#linear-gradient);}"
              }}
            />
            <linearGradient
              id="linear-gradient"
              x1={0}
              y1="27.5"
              x2="582.4"
              y2="27.5"
              gradientTransform="translate(0 30)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#0070d7" />
              <stop offset=".38" stopColor="#00aae1" />
              <stop offset=".8" stopColor="#00e7eb" />
              <stop offset={1} stopColor="#00fff0" />
            </linearGradient>
          </defs>
          <path
            className="cls-1"
            d="m44.52,47.12c-3.19-1.27-7.24-2.5-12.14-3.7-4.82-1.2-8.38-2.37-10.67-3.52-2.29-1.15-3.43-2.84-3.43-5.07,0-1.99.84-3.54,2.51-4.65,1.67-1.11,4.07-1.67,7.17-1.67,3.35,0,6.03.77,8.03,2.33l.06.05c5.16,4.03,11.52,6.21,18.07,6.21h1.68c-.49-6.68-3.15-11.99-7.97-15.92-4.83-3.93-11.28-5.9-19.38-5.9-5.48,0-10.24.87-14.29,2.62-4.05,1.75-7.15,4.14-9.32,7.16-2.17,3.02-3.25,6.36-3.25,10.02,0,4.45,1.17,7.99,3.5,10.62s5.11,4.57,8.34,5.85c3.23,1.27,7.38,2.5,12.45,3.7,4.91,1.27,8.48,2.45,10.73,3.52,2.25,1.08,3.37,2.68,3.37,4.83,0,1.99-.92,3.62-2.76,4.89-1.84,1.27-4.4,1.91-7.66,1.91s-6.15-.83-8.4-2.5c-.02-.02-.04-.03-.07-.05-5.18-3.9-11.35-6.27-17.84-6.27H0c.25,4.05,1.66,7.75,4.23,11.09,2.57,3.34,6.07,5.98,10.49,7.93,4.42,1.95,9.4,2.92,14.96,2.92s10.12-.85,14.16-2.56c4.05-1.71,7.15-4.07,9.32-7.1,2.17-3.02,3.25-6.44,3.25-10.26-.08-4.37-1.29-7.89-3.62-10.55s-5.09-4.63-8.28-5.91Z"
          />
          <path
            className="cls-1"
            d="m343.72,16.34v9.42c-2.21-3.1-5.23-5.63-9.07-7.58-3.84-1.95-8.3-2.92-13.37-2.92-5.81,0-11.06,1.39-15.76,4.17-4.7,2.78-8.42,6.76-11.16,11.93-2.74,5.17-4.11,11.09-4.11,17.77s1.37,12.74,4.11,17.95c.23.44.52.83.76,1.25h-7.38c-2.62,0-4.48-.5-5.58-1.49-1.1-.99-1.66-2.61-1.66-4.83v-31.97h1.1c7.79,0,14.1-6.14,14.1-13.72h-15.21c0-9.03-7.52-16.34-16.8-16.34h-.49v16.34h-8.09v.16c-8.77.82-15.65,7.92-15.65,16.66v19.57c0,5.25-1.35,9.28-4.05,12.11s-6.42,4.23-11.16,4.23-8.34-1.41-11.04-4.23c-2.7-2.82-4.05-6.86-4.05-12.11v-19.68c0-9.22-7.69-16.7-17.17-16.7v22.9c-.76-2.75-1.82-5.34-3.25-7.74-3.07-5.17-7.26-9.17-12.57-11.99-5.32-2.82-11.24-4.23-17.78-4.23s-12.47,1.41-17.78,4.23c-5.32,2.82-9.51,6.82-12.57,11.99-.92,1.54-1.65,3.18-2.29,4.87-.59-1.75-1.26-3.46-2.11-5.05-2.74-5.13-6.46-9.08-11.16-11.87-4.7-2.78-9.96-4.17-15.76-4.17-4.99,0-9.42,1.01-13.31,3.04-3.88,2.03-6.93,4.55-9.14,7.58,0-5.27-4.39-9.54-9.81-9.54h-7.36v80.88c0,9.22,7.69,16.7,17.17,16.7v-40.92c2.37,3.02,5.46,5.53,9.26,7.51,3.8,1.99,8.2,2.98,13.18,2.98,5.8,0,11.06-1.43,15.76-4.29,4.7-2.87,8.42-6.9,11.16-12.11.8-1.52,1.45-3.13,2.01-4.79.63,1.72,1.36,3.4,2.27,4.97,2.98,5.17,7.09,9.16,12.32,11.99,5.23,2.82,11.12,4.23,17.66,4.23s12.61-1.41,17.97-4.23c5.35-2.82,9.61-6.82,12.75-11.99,1.59-2.61,2.77-5.43,3.56-8.45.4,4.33,1.48,8.17,3.3,11.5,2.33,4.26,5.54,7.48,9.63,9.66,4.09,2.19,8.79,3.28,14.1,3.28,4.17,0,8.03-.82,11.59-2.45,3.56-1.63,6.44-3.88,8.65-6.74v8.35h17.29V30.06h6.45v31.85c0,13.68,7.24,20.52,21.71,20.52h10.79v-13.11c2.58,4.12,5.84,7.45,9.87,9.89,4.74,2.86,9.97,4.29,15.7,4.29,4.99,0,9.42-1.03,13.31-3.1,3.88-2.07,6.93-4.65,9.14-7.75v10.26c0,5.88-1.55,10.28-4.66,13.18-3.11,2.9-7.16,4.36-12.14,4.36-4.25,0-7.87-.9-10.85-2.68-2.99-1.79-4.93-4.2-5.83-7.22h-17.05c.82,7.55,4.31,13.52,10.49,17.89,6.17,4.37,14.08,6.56,23.73,6.56,7.19,0,13.33-1.41,18.4-4.24,5.07-2.82,8.87-6.64,11.41-11.45,2.53-4.81,3.8-10.28,3.8-16.4v-49.75c0-9.29-7.74-16.82-17.29-16.82ZM107.7,59.65c-1.68,2.94-3.88,5.21-6.62,6.8-2.74,1.59-5.7,2.38-8.89,2.38s-6.03-.78-8.77-2.33c-2.74-1.55-4.95-3.8-6.62-6.74-1.68-2.94-2.51-6.4-2.51-10.38s.84-7.44,2.51-10.38,3.88-5.19,6.62-6.74c2.74-1.55,5.66-2.33,8.77-2.33s6.15.76,8.89,2.27c2.74,1.51,4.94,3.72,6.62,6.62,1.67,2.9,2.52,6.34,2.52,10.32s-.84,7.56-2.52,10.5Zm65.54.48c-1.64,2.94-3.82,5.15-6.56,6.62-2.74,1.48-5.66,2.21-8.77,2.21-4.91,0-8.97-1.69-12.2-5.07-3.23-3.38-4.84-8.21-4.84-14.49s1.66-11.11,4.97-14.5c3.31-3.38,7.42-5.07,12.32-5.07s9.05,1.69,12.45,5.07c3.39,3.38,5.09,8.21,5.09,14.5,0,4.21-.82,7.79-2.45,10.73Zm168.02-.3c-1.64,2.9-3.84,5.13-6.62,6.68-2.78,1.55-5.76,2.33-8.95,2.33s-6.03-.8-8.77-2.38c-2.74-1.59-4.95-3.88-6.62-6.86-1.68-2.98-2.52-6.46-2.52-10.44s.84-7.41,2.52-10.32c1.67-2.9,3.86-5.11,6.56-6.62s5.64-2.27,8.83-2.27,6.17.78,8.95,2.33c2.78,1.55,4.99,3.78,6.62,6.68,1.63,2.9,2.45,6.38,2.45,10.44s-.82,7.53-2.45,10.44Z"
          />
          <path
            className="cls-1"
            d="m449.45,16.34v9.42c-2.29-3.02-5.33-5.53-9.14-7.51-3.8-1.99-8.24-2.98-13.31-2.98-5.81,0-11.06,1.39-15.76,4.17-3.47,2.05-6.39,4.77-8.79,8.12v-12.17c-4.58,0-8.65,1-12.2,2.98-3.56,1.99-6.44,4.73-8.65,8.23,0-5.67-4.72-10.26-10.55-10.26h-6.62v49.39c0,9.22,7.69,16.7,17.17,16.7v-32.93c0-6.12,1.37-10.41,4.11-12.88,2.74-2.47,6.81-3.7,12.2-3.7h1.48c-2.24,4.8-3.41,10.19-3.41,16.22,0,6.76,1.37,12.74,4.11,17.95,2.74,5.21,6.46,9.25,11.16,12.11,4.7,2.86,9.91,4.29,15.64,4.29,5.07,0,9.55-1.01,13.43-3.04,3.88-2.03,6.93-4.59,9.14-7.69v9.66h17.29v-49.27c0-9.29-7.74-16.82-17.29-16.82Zm-2.45,43.48c-1.64,2.9-3.84,5.13-6.62,6.68-2.78,1.55-5.76,2.33-8.95,2.33s-6.03-.8-8.77-2.38c-2.74-1.59-4.95-3.88-6.62-6.86-1.68-2.98-2.52-6.46-2.52-10.44s.84-7.41,2.52-10.32c1.67-2.9,3.86-5.11,6.56-6.62s5.64-2.27,8.83-2.27,6.17.78,8.95,2.33c2.78,1.55,4.99,3.78,6.62,6.68,1.63,2.9,2.45,6.38,2.45,10.44s-.82,7.53-2.45,10.44Z"
          />
          <path
            className="cls-1"
            d="m574.73,22.84c-5.11-4.97-11.83-7.46-20.17-7.46-4.91,0-9.46,1.15-13.67,3.46-4.21,2.31-7.42,5.37-9.63,9.19-2.29-4.06-5.52-7.18-9.69-9.37-4.17-2.19-8.91-3.28-14.23-3.28-4.17,0-7.99.8-11.47,2.39s-6.32,3.78-8.52,6.56c0-4.41-3.68-7.99-8.22-7.99h-8.95v66.09h17.17v-36.5c0-5.17,1.37-9.13,4.11-11.87,2.74-2.75,6.48-4.12,11.22-4.12s8.34,1.37,11.04,4.12c2.7,2.75,4.05,6.7,4.05,11.87v36.5h17.17v-36.5c0-5.17,1.37-9.13,4.11-11.87,2.74-2.75,6.44-4.12,11.1-4.12s8.34,1.37,11.04,4.12,4.05,6.7,4.05,11.87v36.5h17.17v-38.77c0-8.9-2.56-15.84-7.66-20.82Z"
          />
        </svg>
        < PageSpinner/>
      </div>
    </div> 
  );
};

export default Preloader;