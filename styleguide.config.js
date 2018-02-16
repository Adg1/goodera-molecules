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
          components: 'src/components/curated/**/*.js'
        },
        {
          name: 'Generic',
          content: 'docs/generic.md',
          components: 'src/components/generic/**/*.js'
        }
      ]
    }
  ]
}