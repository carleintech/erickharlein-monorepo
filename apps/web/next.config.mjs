/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	reactCompiler: true,

	experimental: {
		serverActions: {
			allowedOrigins: ["localhost:3000", "erickharlein.com"],
		},
	},

	transpilePackages: [
		"@erickharlein/database",
		"@erickharlein/auth",
		"@erickharlein/ui",
		"@erickharlein/utils",
	],

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.supabase.co",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
