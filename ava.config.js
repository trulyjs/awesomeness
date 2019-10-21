export default {
  "files": [
    "tests/**/*.spec.ts"
  ],
  "sources": [
    "library/**/*.ts"
  ],

  "cache": true,
  "concurrency": 5,
  "failFast": true,
  "failWithoutAssertions": false,
  "verbose": true,
  "compileEnhancements": false,
  "require": [
    "@babel/register"
  ],

  babel: {
    extensions: ['ts']
  }
}
