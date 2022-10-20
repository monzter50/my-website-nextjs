import type { Config } from "jest";

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    // replicate path mappings as in tsconfig.json
    '^~lib/(.*)$': '<rootDir>/lib/$1',
    '^~components/(.*)$': '<rootDir>/components/$1',
  },
  // required setup files, mocks
  setupFiles: ['<rootDir>/__test__/__mocks__/matchMediaMock.js'],
};

export default config;
