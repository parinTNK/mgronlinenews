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
      {
        protocol: "https",
        hostname: "www.mgronline.com",
        port: "",
        pathname: "/include/shared/images/**",
      },
      {
        protocol: "https",
        hostname: "scdn.line-apps.com",
        port: "",
        pathname: "/n/line_add_friends/btn/**",
      },
    ],
  },
};

export default nextConfig;
