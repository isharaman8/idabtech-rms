import { Prisma } from '@prisma/client';

export const _getParsedParams = (params: any = {}) => {
  return {
    companyId: params.company_uid || '',
  };
};

export const _getParsedQuery = (
  query: any = {},
): {
  skip?: number;
  take?: number;
  where?: Prisma.CompanyWhereInput;
  orderBy?: Prisma.CompanyOrderByWithRelationInput;
} => {
  return {
    skip: query.skip ? Number(query.skip) : undefined,
    take: query.take ? Number(query.take) : undefined,
    where: {
      industryType:
        query.industryType && query.industryType !== 'all'
          ? { equals: query.industryType }
          : undefined,
      organizationType:
        query.organizationType && query.organizationType !== 'all'
          ? { equals: query.organizationType }
          : undefined,
      verified:
        query.emailVerification && query.emailVerification !== 'all'
          ? { equals: query.emailVerification }
          : undefined,
      ...(query.search
        ? {
            OR: [
              { companyName: { contains: query.search, mode: 'insensitive' } },
              { bio: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    },
    orderBy: query.sortBy
      ? {
          createdAt: query.sortBy === 'oldest' ? 'asc' : 'desc',
        }
      : undefined,
  };
};
