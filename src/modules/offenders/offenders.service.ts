import { Offenders } from './offenders.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OffendersService {
    constructor(
        @InjectRepository(Offenders)
        private readonly offendersRepository: Repository<Offenders>,
      ) {}

      async findAll(): Promise<Offenders[]> {
        return await this.offendersRepository.find();
      }
}