/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const {
  override,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

/* config-overrides.js */
module.exports = override(
  addReactRefresh(),
);
