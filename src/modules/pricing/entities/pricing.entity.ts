import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Pricing {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  self_study: string;
  @Column()
  live_online: string;
  @Column()
  personal_tuiton: string;
}
