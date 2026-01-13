/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	reactCompiler: true,

	typescript: {
		// ⚠️ Temporarily ignore TypeScript errors during build
		// TODO: Fix Supabase type definitions
		ignoreBuildErrors: true,
	},

	experimental: {
		serverActions: {
			allowedOrigins: ["localhost:3000", "erickharlein.com"],
		},
	},

	transpilePackages: [
		"@erickharlein/ui",
		"@erickharlein/utils",
	],

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
