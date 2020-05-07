import { Env } from '../type';

import styleLoader from './style';
import babelLoader from './babel';
import fileLoader from './file';

export default (env: Env) => ([
  ...styleLoader(env),
  babelLoader,
  fileLoader,
]);
