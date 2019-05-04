import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'offenders'})
export class Offenders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    offenderId: string;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;
}
