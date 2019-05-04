import { Offenders } from './offenders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffendersService } from './offenders.service';
import { Module } from '@nestjs/common';
import { OffendersController } from './offenders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Offenders])],
  controllers: [OffendersController],
  providers: [
    OffendersService
  ]
})
export class OffenderModule {}