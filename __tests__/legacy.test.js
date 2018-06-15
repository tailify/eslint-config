'use strict';

const eslint = require('eslint');

it('should contain expected keys', () => {
  const config = require('../legacy');
  expect(Object.keys(config)).toMatchSnapshot();
});

it('should not contain invalid rules', () => {
  const cli = new eslint.CLIEngine({
    configFile: 'legacy.js',
    useEslintrc: false,
  });

  const report = cli.executeOnText(
    'module.exports = {};\n'
  );

  expect(report).toBeTruthy();
  expect(report.errorCount).toBe(0);
  expect(report.warningCount).toBe(0);
});