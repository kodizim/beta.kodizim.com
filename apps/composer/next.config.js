const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
    future: { webpack5: true },
    images: {
        domains: ['kodizi.com'],
    },
    webpack: (config, options) => {
        const mfConf = {
            name: "composer",
            library: {
                type: config.output.libraryTarget,
                name: "composer",
            },
            remotes: {
                app1: "app1",
                app2: "app2",
            },
            exposes: {
            },
        };
        config.cache = false;
        withModuleFederation(config, options, mfConf);

        return config;
    },
}