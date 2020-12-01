module.exports = {
  moduleFileExtensions: ["js"],
  testMatch: ["**/*.(test|spec).(js|ts)"],
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  setupFilesAfterEnv: ["<rootDir>__test__/setupTest.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
  },
};
