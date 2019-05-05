import { Victims } from './victims.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VictimsService {
  constructor(
    @InjectRepository(Victims)
    private readonly victimsRepository: Repository<Victims>,
  ) {}

  async findAll(query): Promise<Victims[]> {
    return await this.victimsRepository.find();
  }

  async create(victimsData: Victims): Promise<Victims>{
    console.log('victimdata', victimsData);
    return await this.victimsRepository.save(victimsData);
  }

}
