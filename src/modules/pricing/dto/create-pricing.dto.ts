import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePricingDto {
  @IsString()
  self_study: string;
  @IsString()
  live_online: string;
  @IsString()
  personal_tuiton: string;
}
