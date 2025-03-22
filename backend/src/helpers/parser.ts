import { Params } from 'src/interfaces';

export const _getParsedParams = (params: Params = {}) => {
  return {
    companyId: params.company_uid,
  };
};
