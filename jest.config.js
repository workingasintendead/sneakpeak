module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-library|some-other-library)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/tests/'],
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
  collectCoverage: true,
};
