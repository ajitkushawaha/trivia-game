// jest.config.js
export default{
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Use the correct jsdom environment
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
  
};
