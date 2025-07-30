import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAboutUsDto {
  @IsNotEmpty()
  @IsString()
  text: string;
}
