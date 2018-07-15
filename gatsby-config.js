module.exports = {
  siteMetadata: {
    title: 'BC | Billy Ceskavich',
    intro: require('./data/intro'),
    resume: require('./data/resume')
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro:400,700']
      }
    }
  ]
};
