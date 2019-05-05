import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'victims' })
export class Victims {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  victimId: string;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;
}
