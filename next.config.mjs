/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/jiji",
        destination: "https://r-serve.web.app/jigi/users",
      },
    ];
  },
};

export default nextConfig;
