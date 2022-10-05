import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "styles/globals.css";
import { AuthProvider } from "context/AuthContext";
import ProtectedRoute from "components/ProtectedRoute";

const protectedRoutes = ["/dashboard"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      {protectedRoutes.includes(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
