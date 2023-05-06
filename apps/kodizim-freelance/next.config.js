const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'kodizimFreelance',
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              "./Freelance": "./src/components/Freelance",
            },
            shared: {},
          }),
      );
    }

    return config;
  },
};