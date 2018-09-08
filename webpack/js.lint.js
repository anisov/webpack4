module.exports = function({ paths, options }) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options,
        },
      ],
    },
  };
};