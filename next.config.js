/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/robots.txt',
            destination: '/robots',
          },
        ];
      },
};

export default nextConfig;
