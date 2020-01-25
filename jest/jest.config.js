module.exports = {
  'verbose': true,
  rootDir: '../',
  'roots': [
    '<rootDir>',
  ],
  'modulePaths': [
    '<rootDir>/node_modules',
  ],
  'setupFiles': [
    '<rootDir>/jest/setup.js',
  ],
  'setupFilesAfterEnv': [
    '<rootDir>/jest/setupAfterEnv.js',
  ],
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
  ],
  'testMatch': [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  'testEnvironment': 'jsdom',
  'testURL': 'http://localhost',
  'transform': {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'babel-jest',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    //'src/index.js',
  ],
  'moduleFileExtensions': [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
};