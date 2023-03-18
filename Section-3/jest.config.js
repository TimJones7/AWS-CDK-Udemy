module.exports = {
   testEnvironment: "node",
   roots: ["<rootDir>/infrastructure"],
   testMatch: ["**/*.test.ts"],
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
};
