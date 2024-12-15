/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
    redirects: async () => [
        {
            source: '/cv/pt-br.pdf',
            destination: '/cv/pt.pdf',
            permanent: true,
        }
    ]
};

module.exports = nextConfig;
