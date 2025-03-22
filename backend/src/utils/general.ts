// third party imports
import * as _ from 'lodash';

export const parseObject = (...params: Array<any>) => {
  for (const obj of params) {
    if (_.isObject(obj) && !_.isArray(obj)) return obj;
  }

  return _.last(params);
};

export const parseArray = (...params: Array<any>) => {
  for (const arr of params) {
    if (_.isArray(arr)) return arr;
  }

  return _.last(params);
};

export const parseNumber = (...params: Array<any>): number => {
  for (const number of params) {
    if (
      number !== null &&
      number !== undefined &&
      !Number.isNaN(Number(number))
    ) {
      return Number(number);
    }
  }
  return Number(_.last(params));
};

export const parseBoolean = (...params: Array<any>) => {
  for (const value of params) {
    if ([true, 'true'].includes(value)) return true;
    if ([false, 'false'].includes(value)) return false;
  }

  return _.last(params);
};

export const parseString = (...params: Array<any>) => {
  for (const value of params) {
    if (_.isString(value)) return _.trim(value);
  }

  return _.last(params);
};

export const parseDate = (...params: Array<any>) => {
  for (const value of params) {
    const date = new Date(value);

    if (!isNaN(date.getTime())) return date;
  }

  return _.last(params);
};

export const _notEmpty = (obj: any = {}): boolean => {
  if (!_.isObject(obj)) {
    obj = {};
  }

  obj = _.omitBy(obj, (value) => value === null || value === undefined);

  return !_.isEmpty(obj);
};

export const _arrayOrSplit = (
  word: string | Array<string>,
  char: string = ',',
) => {
  let reqdArray: any = [];

  if (_.isArray(word)) {
    reqdArray = word;
  } else {
    reqdArray = _.split(word, char);
  }

  return reqdArray;
};
