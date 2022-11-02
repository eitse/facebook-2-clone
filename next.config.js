/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsx.com",
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};
