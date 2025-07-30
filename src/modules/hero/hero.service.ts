import { Injectable, NotFoundException } from '@nestjs/common';
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
  async heroCreate(hero: CreateHeroDto) {
    const create = this.heroRepo.create({
      ...hero,
    });
    const hero1 = this.heroRepo.save(create);
    return hero1;
  }
  async delete(id: number) {
    const user = await this.heroRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('not found');
    }
    const deleteUser = await this.heroRepo.delete({ id: id });
    return {
      message: 'deleted',
      data: user,
    };
  }
}
