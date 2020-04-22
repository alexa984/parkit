import _ from 'lodash';
import queryString from 'query-string';

export const reverse = (url, params = {}) => {
  let result = url;

  _.forEach(params, (value, key) => {
    result = result.replace(`:${key}`, value);
  });

  return result;
};

export const openInNewTab = url => {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: url
  }).click();
};

export const stringifyParams = params => queryString.stringify(params);
export const parseParams = search => queryString.parse(search);
