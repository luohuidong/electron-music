import merge from 'webpack-merge';

import common from './webpack.main.common'

export default () => merge(common(), {
  mode: 'development',
  target: 'electron-main',
});
