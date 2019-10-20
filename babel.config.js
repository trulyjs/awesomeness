module.exports = {
  generatorOpts: {
    minified: true
  },
  highlightCode:true,
  sourceMaps: true,
  presets: [
    "@babel/env",
    "@babel/typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]

}
