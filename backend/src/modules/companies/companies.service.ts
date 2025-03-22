// third-party imports
import { nanoid } from 'nanoid';
import { Prisma, Company } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

// inner imports
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateCompanyDto,
  UpdateCompanyDto,
  CreateOrUpdateCompanyDto,
} from 'src/dto';
import {
  parseArray,
  parseDate,
  parseObject,
  parseString,
  parseBoolean,
} from 'src/utils';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async createOrUpdateCompany(
    uid: string | null,
    data: CreateCompanyDto | UpdateCompanyDto,
    oldData: CreateOrUpdateCompanyDto,
  ) {
    const payload = this.getCreateOrUpdateCompanyPayload(data, oldData);

    await this.prisma.company.upsert({
      where: { uid: uid ?? 'random-invalid-uid' },
      update: {
        ...payload,
        socialLinks: payload.socialLinks
          ? {
              upsert: payload.socialLinks
                .filter((link) => Boolean(link.uid))
                .map((link) => ({
                  where: { uid: link.uid ?? '' },
                  update: { platform: link.platform, link: link.link },
                  create: { platform: link.platform, link: link.link },
                })),
            }
          : undefined,
      },
      create: {
        ...payload,
        email: payload.email as string,
        socialLinks: payload.socialLinks
          ? {
              create: payload.socialLinks
                .filter((link) => Boolean(link.uid))
                .map((link) => ({
                  platform: link.platform,
                  link: link.link,
                })),
            }
          : undefined,
      },
    });

    return payload;
  }

  async getAllCompanies(params: {
    skip?: number;
    take?: number;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput;
  }): Promise<Company[]> {
    return this.prisma.company.findMany({
      skip: params?.skip,
      take: params?.take,
      where: params?.where,
      orderBy: params?.orderBy,
      include: {
        socialLinks: true,
      },
    });
  }

  async getCompanyById(uid: string): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: { uid },
      include: { socialLinks: true },
    });
    if (!company)
      throw new NotFoundException(`Company with ID ${uid} not found`);
    return company;
  }

  async deleteCompany(uid: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { uid },
    });
  }

  getParsedCompanyPayload(body: any) {
    const {
      uid,
      bio,
      city,
      logo,
      email,
      state,
      banner,
      vision,
      mobile,
      active,
      country,
      pinCode,
      website,
      username,
      teamSize,
      verified,
      password,
      companyName,
      socialLinks,
      industryType,
      secondaryEmail,
      serviceProvider,
      secondaryMobile,
      organizationType,
      establishmentDate,
    }: Partial<CreateCompanyDto> = body;

    const payload: any = {
      bio: parseString(bio, ''),
      city: parseString(city, ''),
      logo: parseString(logo, null),
      state: parseString(state, ''),
      email: parseString(email, ''),
      uid: parseString(uid, nanoid()),
      vision: parseString(vision, ''),
      mobile: parseString(mobile, ''),
      banner: parseString(banner, null),
      country: parseString(country, ''),
      pinCode: parseString(pinCode, ''),
      website: parseString(website, ''),
      active: parseBoolean(active, true),
      teamSize: parseString(teamSize, ''),
      username: parseString(username, ''),
      password: parseString(password, ''),
      verified: parseBoolean(verified, false),
      serviceProvider: serviceProvider ?? 'no',
      companyName: parseString(companyName, ''),
      socialLinks: parseArray(socialLinks, null),
      industryType: parseString(industryType, ''),
      establishmentDate: parseDate(establishmentDate),
      secondaryEmail: parseString(secondaryEmail, ''),
      secondaryMobile: parseString(secondaryMobile, ''),
      organizationType: parseString(organizationType, ''),
    };

    return payload;
  }

  getCreateOrUpdateCompanyPayload(
    companyData: any,
    oldCompanyData: any,
  ): CreateCompanyDto | UpdateCompanyDto {
    const companyUid = parseString(oldCompanyData.uid, nanoid());

    const payload = {
      uid: companyUid,
      username:
        parseString(companyData.username, oldCompanyData.username) || null,
      email: parseString(companyData.email, oldCompanyData.email),
      secondaryEmail:
        parseString(
          companyData.secondaryEmail,
          oldCompanyData.secondaryEmail,
        ) || null,
      password: parseString(companyData.password, oldCompanyData.password),
      bio: parseString(companyData.bio, oldCompanyData.bio),
      vision: parseString(companyData.vision, oldCompanyData.vision),
      mobile: parseString(companyData.mobile, oldCompanyData.mobile) || '',
      secondaryMobile: parseString(
        companyData.secondaryMobile,
        oldCompanyData.secondaryMobile,
      ),
      website: parseString(companyData.website, oldCompanyData.website),
      teamSize: parseString(companyData.teamSize, oldCompanyData.teamSize),
      establishmentDate: parseDate(
        companyData.establishmentDate,
        oldCompanyData.establishmentDate,
      ),
      serviceProvider:
        companyData.serviceProvider ?? oldCompanyData.serviceProvider,
      city: parseString(companyData.city, oldCompanyData.city),
      state: parseString(companyData.state, oldCompanyData.state),
      country: parseString(companyData.country, oldCompanyData.country),
      pinCode: parseString(companyData.pinCode, oldCompanyData.pinCode),
      industryType: parseString(
        companyData.industryType,
        oldCompanyData.industryType,
      ),
      companyName: parseString(
        companyData.companyName,
        oldCompanyData.companyName,
      ),
      organizationType: parseString(
        companyData.organizationType,
        oldCompanyData.organizationType,
      ),
      active: parseBoolean(companyData.active, oldCompanyData.active),
      verified: parseBoolean(companyData.verified, oldCompanyData.verified),
      socialLinks: companyData.socialLinks
        ? companyData.socialLinks.map((link: any) => ({
            companyId: companyUid,
            link: parseString(link.link, ''),
            uid: parseString(link.uid, nanoid()),
            platform: parseString(link.platform, ''),
          }))
        : oldCompanyData.socialLinks || [],
      logo: parseString(companyData.logo, oldCompanyData.logo),
      banner: parseString(companyData.banner, oldCompanyData.banner),
    };

    return payload;
  }
}
