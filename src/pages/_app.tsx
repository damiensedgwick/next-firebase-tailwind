import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "styles/globals.css";

const protectedRoutes = ["/dashboard"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      {protectedRoutes.includes(router.pathname) ? (
        <div>
          <Component {...pageProps} />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
