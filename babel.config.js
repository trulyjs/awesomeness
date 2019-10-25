module.exports = {
  highlightCode:true,
  sourceMaps: true,
  presets: [

    ["@babel/env", {
      loose: true,
      targets : {
      node: (process.env.NODE_ENV === 'production') ? "6.5" : "12"
    }}],
    ["@babel/typescript"],
    ...(process.env.NODE_ENV === 'production')
      ? [["minify", {
      keepFnName: true,
      keepClassName: true
      }]]
      : []
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-typescript",
    "transform-inline-environment-variables",
  ]

}
