module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
	}
	images: {
		loader: 'akamai',
		path: '',
  },
};
