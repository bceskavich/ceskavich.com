module.exports = {
  siteMetadata: {
    title: 'BC | Billy Ceskavich',
    resume: require('./data/resume'),
    projects: require('./data/projects')
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro:400,600,700']
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45414156-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
