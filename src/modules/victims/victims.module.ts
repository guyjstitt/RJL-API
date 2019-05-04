import { Victims } from './victims.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VictimsService } from './victims.service';
import { Module } from '@nestjs/common';
import { VictimsController } from './victims.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Victims])],
  controllers: [VictimsController],
  providers: [
    VictimsService
  ]
})
export class VictimsModule {}
