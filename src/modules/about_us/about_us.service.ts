import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutUsDto } from './dto/create-about_us.dto';
import { UpdateAboutUsDto } from './dto/update-about_us.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutUs } from './entities/about_us.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutUsService {
  constructor(
    @InjectRepository(AboutUs)
    private readonly AboutUsRepo: Repository<AboutUs>,
  ) {}
  create(createAboutUsDto: CreateAboutUsDto) {
    const create = this.AboutUsRepo.create({ ...createAboutUsDto });
    const save = this.AboutUsRepo.save(create);
    return save;
  }

  async delete(id: number) {
    const user = await this.AboutUsRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('not found');
    }
    const deleteUser = await this.AboutUsRepo.delete({ id: id });
    return {
      message: 'deleted',
      data: user,
    };
  }
}
