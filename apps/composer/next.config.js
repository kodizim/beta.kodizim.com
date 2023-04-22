const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'composer',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: {
                        kodizimEvents: 'kodizimEvents@http://localhost:3001/_next/static/chunks/remoteEntry.js',
                        /*kodizimEvents: 'kodizimEvents@https://beta-kodizim-com-kodizim-events.vercel.app/_next/static/chunks/remoteEntry.js',*/
                    },
                    shared: {},
                }),
            );
        }

        return config;
    },
};