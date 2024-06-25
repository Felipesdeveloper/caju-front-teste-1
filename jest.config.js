/** @type {import('jest').Config} */
export default {
  verbose: true,
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.js', 'dotenv/config'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
};
