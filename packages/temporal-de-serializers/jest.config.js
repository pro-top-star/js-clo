// eslint-disable-next-line
const commonConfig = require('../../test-resources/jest.common.config');
module.exports = {
  ...commonConfig,
  displayName: 'temporal-de-serializers',
  setupFilesAfterEnv: ['jest-extended/all']
};
