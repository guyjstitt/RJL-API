import { Victims } from './victim.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VictimService } from './victim.service';
import { Module } from '@nestjs/common';
import { VictimController } from './victim.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Victims])],
  controllers: [VictimController],
  providers: [
    VictimService
  ]
})
export class VictimModule { }
