import 'babel-polyfill';
import fetch from 'jest-fetch-mock';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import 'jest-localstorage-mock';
import './setupEnzyme';
import './windowPolyfills';

// required for legacy scripts
global.define = () => [];
global.fetch = fetch;

// required for storyshots to use webpack require.context
registerRequireContextHook();

// This variable must be prefixed with MOCK to work in jest.mock
const MOCK_TESTS_ENV = {
  LICENSEE_DOMAIN: 'midatlantic',
  ENVIRONMENT: 'ref',
  ENVIRONMENT_ZONE: 'infra'
};
// required for any tests that work with environment variables to ensure .template-settings.json doesn't impact tests
jest.mock('@server/_util', () => ({
  ...jest.requireActual('@server/_util'),
  env: () => MOCK_TESTS_ENV,
  getTemplateSettingsOverrides: () => MOCK_TESTS_ENV
}));
