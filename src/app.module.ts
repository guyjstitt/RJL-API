import { VictimModule } from './modules/victim/victim.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    VictimModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
