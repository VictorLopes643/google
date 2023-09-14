/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "google.com",
        port: "",
        pathname: "images/branding/googlelogo/1x/**",
      },
    ],
  },
};

module.exports = nextConfig;
