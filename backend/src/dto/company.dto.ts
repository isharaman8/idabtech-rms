import {
  IsEnum,
  IsDate,
  IsArray,
  IsEmail,
  IsString,
  IsBoolean,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class SocialLinkDto {
  @IsString()
  platform: string;

  @IsString()
  link: string;

  @IsString()
  uid: string;
}

export class CreateCompanyDto {
  @IsString()
  @IsOptional()
  uid: string;

  @IsString()
  companyName: string;

  @IsString()
  industryType: string;

  @IsString()
  organizationType: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  vision?: string;

  @IsOptional()
  @IsString()
  mobile?: string;

  @IsOptional()
  @IsString()
  secondaryMobile?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEmail()
  secondaryEmail?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  teamSize?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  establishmentDate?: Date;

  @IsEnum(['yes', 'no'])
  serviceProvider: 'yes' | 'no';

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  pinCode?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SocialLinkDto)
  @IsArray()
  socialLinks?: SocialLinkDto[];

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsString()
  banner?: string;
}

export class UpdateCompanyDto extends CreateCompanyDto {}
export class CreateOrUpdateCompanyDto extends PartialType(CreateCompanyDto) {}
