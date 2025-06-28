/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mgronline.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
