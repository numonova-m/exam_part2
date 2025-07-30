import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @Post('/createhero')
  async createHero(@Body() hero: CreateHeroDto) {
    return this.heroService.heroCreate(hero);
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.heroService.delete(id);
  }
}
