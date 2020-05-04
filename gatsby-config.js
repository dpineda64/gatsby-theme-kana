module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:400,600', 'Lora:500'],
        },
      },
    },
  ],
});
