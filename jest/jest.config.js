module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/jest/setup/main.js'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    // Use proxy to mock CSS Modules. Lookups on the styles object will be returned as-is
    // (e.g., styles.foobar === 'foobar')
    '\\.(css|scss|less)$': 'identity-obj-proxy',

    '_shared/(.*)': '<rootDir>/src/client/_shared/$1',
    'fixtures/(.*)': '<rootDir>/cypress/fixtures/$1',

    '@client/(.*)': '<rootDir>/src/client/$1',
    '@server/(.*)': '<rootDir>/src/server/$1',
    '@common/(.*)': '<rootDir>/src/common/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'babel-jest',

    // Transform file imports into file names
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/setup/fileTransformer.js'
  },
  testMatch: ['**/**-test.js', '**/**-test.ts', '**/**-test.tsx']
};
