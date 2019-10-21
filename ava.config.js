export default {
  "files": [
    "library/**/*.ts"
  ],
  "sources": [
    "library/**/*.ts"
  ],

  "cache": true,
  "concurrency": 5,
  "failFast": true,
  "failWithoutAssertions": false,
  "verbose": true,
  "compileEnhancements": true,
  "require": [
    "@babel/register"
  ],
  "babel" : {
    "extensions": [
      "ts"
    ]
  }
}
