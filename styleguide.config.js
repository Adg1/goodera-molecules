module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: ['style-loader','css-loader']
        }
      ]
    }
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'UI Components',
      sections: [
        {
          name: 'Curated',
          content: 'docs/curated.md',
          sections: [
            {
              name: 'Containers',
              components: 'src/components/curated/Containers/**/*.js'
            },
            {
              name: 'Buttons',
              components: 'src/components/curated/Buttons/**/*.js'
            },
            {
              name: 'Drawers',
              components: 'src/components/curated/Drawers/**/*.js'
            }
          ]
        },
        {
          name: 'Generic',
          content: 'docs/generic.md',
          sections: [
            {
              name: 'Containers',
              components: 'src/components/generic/Containers/**/*.js'
            },
            {
              name: 'Buttons',
              components: 'src/components/generic/Buttons/**/*.js'
            },
            {
              name: 'Drawers',
              components: 'src/components/generic/Drawers/**/*.js'
            }
          ]
        }
      ]
    }
  ]
}