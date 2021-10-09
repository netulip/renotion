export default {
  // clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
};
