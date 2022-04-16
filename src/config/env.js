import {SANDBOX_URL, PROD_URL} from '@env';

const development = {
  SANDBOX_URL,
};

const production = {
  PROD_URL,
};

export default __DEV__ ? development : production;
