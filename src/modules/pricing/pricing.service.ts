import { Injectable } from '@nestjs/common';
import { CreatePricingDto } from './dto/create-pricing.dto';
import { UpdatePricingDto } from './dto/update-pricing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pricing } from './entities/pricing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PricingService {
  constructor(
    @InjectRepository(Pricing)
    private readonly pricingRepo: Repository<Pricing>,
  ) {}
  create(createPricingDto: CreatePricingDto) {
    const studing = this.pricingRepo.create({ ...createPricingDto });
    const save = this.pricingRepo.save(studing);
    return save;
  }

  findAll() {
    return this.pricingRepo.find();
  }

  remove(id: number) {
    return this.pricingRepo.delete({ id: id });
  }
}
