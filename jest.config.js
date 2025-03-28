module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-library|some-other-library)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/tests/'],
  testMatch: [
    '<rootDir>/src/app/**/*.(test).tsx',
    '<rootDir>/components/**/*.(test).tsx',
  ],
};
