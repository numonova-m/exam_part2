import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AboutUs {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  text: string;
}
