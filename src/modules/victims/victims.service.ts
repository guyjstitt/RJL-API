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

      async findAll(): Promise<Victims[]> {
        return await this.victimsRepository.find();
      }
}
