/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  images: {
    unoptimized: true, // needed for Firebase Hosting
  },
  trailingSlash: true, // optional but helps with Firebase static hosting
};

module.exports = nextConfig;
