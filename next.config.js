module.exports = {
    async redirects() {
      return [
        {
            source: '/book-with-us',
            destination: 'https://www.hosteeva.com/properties/available/details/12926-hosteeva-oceanfront-sunny-condo-w-pool-in-atlantica-towers-condo',
          permanent: false,
          basePath: false
        },
      ]
    },
  };