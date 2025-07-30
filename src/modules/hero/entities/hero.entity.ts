import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Hero {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  body: string;
}
