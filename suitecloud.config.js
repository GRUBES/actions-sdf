const SuiteCloudJestUnitTestRunner = require('@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner');

module.exports = {
	defaultProjectFolder: 'src',
	commands: {
    'project:deploy': {
      beforeExecuting: async args => {
        args.accountspecificvalues = 'WARNING';
        return args;
      }
    },
    'project:validate': {
      beforeExecuting: async args => {
        args.accountspecificvalues = 'WARNING';
        args.server = true;
        return args;
      }
    }
	}
};
