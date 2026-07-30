/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
    ],
  },


  async redirects() {
    return [
      {
        source: "/food-details/:id",
        destination: "/menu/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;