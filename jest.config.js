const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@test/(.*)$': '<rootDir>/__test__/$1',
  },
  testEnvironment: 'jest-environment-jsdom',

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports =  createJestConfig(config)