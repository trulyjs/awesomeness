module.exports = {
  highlightCode:true,
  sourceMaps: true,
  presets: [
    ["@babel/env", {
      loose: true,
      targets : {
      node: "6.5"
    }}],
    ["@babel/typescript"],
    ["minify", {
      keepFnName: true,
      keepClassName: true
    }]
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-typescript",
    "transform-inline-environment-variables",
  ]

}
