/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyD8jlJveGU9E8hZOd__Sc41SB7g1N_qrHw",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "next-firebase-tailwind.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "next-firebase-tailwind",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "next-firebase-tailwind.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "91762098332",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:91762098332:web:012d3c2613cff654acad59",
  },
};

module.exports = nextConfig;
