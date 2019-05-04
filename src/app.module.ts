import { VictimsModule } from './modules/victims/victims.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffenderModule } from './modules/offenders/offenders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    VictimsModule,
    OffenderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
