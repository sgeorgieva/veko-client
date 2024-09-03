const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "./.env") });

const nextConfig = {
  reactStrictMode: false,
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  skipMiddlewareUrlNormalize: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/media/",
            outputPath: "static/media/",
            name: "[name].[hash][ext]",
            esModule: false,
          },
        },
      }
    );
    return config;
  },
};

module.exports = nextConfig;
