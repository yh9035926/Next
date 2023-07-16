module.exports = {
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
    ];

    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hedden=source-map" : "eval",
      plugins,
    };
  },
};
