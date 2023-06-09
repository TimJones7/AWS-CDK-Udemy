module.exports = {
   testEnvironment: "node",
   roots: ["<rootDir>"],
   testMatch: ["**/*.test.ts", "**/**/*.test.ts"],
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
};
