module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch");

    config.plugin("html").tap(options => {
      options[0].title = "Purchase";
      return options;
    });

    config.plugin("preload").tap(options => {
      options[0].include = "allChunks";
      return options;
    });
  },
};
