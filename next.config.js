module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ecommerce-iota-six-36.vercel.app/path*",
      },
    ];
  },
};
