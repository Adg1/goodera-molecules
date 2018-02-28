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
              components: 'src/components/Curated/Containers/**/*.js'
            },
            {
              name: 'Buttons',
              components: 'src/components/Curated/Buttons/**/*.js'
            },
            {
              name: 'Drawers',
              components: 'src/components/Curated/Drawers/**/*.js'
            },
            {
              name: 'Charts',
              components: 'src/components/Curated/Charts/**/*.js'
            },
            {
              name: 'Maps',
              components: 'src/components/Curated/Maps/**/*.js'
            },
            {
              name: 'Icons',
              components: 'src/components/Curated/Icons/**/*.js'
            }
          ]
        },
        {
          name: 'Generic',
          content: 'docs/generic.md',
          sections: [
            {
              name: 'Containers',
              components: 'src/components/Generic/Containers/**/*.js'
            },
            {
              name: 'Buttons',
              components: 'src/components/Generic/Buttons/**/*.js'
            },
            {
              name: 'Drawers',
              components: 'src/components/Generic/Drawers/**/*.js'
            }
          ]
        }
      ]
    }
  ]
}