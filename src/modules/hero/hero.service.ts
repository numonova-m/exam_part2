import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './entities/hero.entity';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero) private readonly heroRepo: Repository<Hero>,
  ) {}
}
