module.exports = {
  // clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "@/(.*)": "./src/$1",
  },
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
};
