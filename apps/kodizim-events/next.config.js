const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'kodizimEvents',
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              "./Events": "./src/components/Events",
            },
            shared: {},
          }),
      );
    }

    return config;
  },
};