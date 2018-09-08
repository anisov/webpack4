module.exports = function() {
  return {
    devServer: {
      stats: 'errors-only',
      overlay: true,
    },
  };
};