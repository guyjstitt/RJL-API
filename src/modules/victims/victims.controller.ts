import { VictimsService } from './victims.service';
import { Controller, Get } from '@nestjs/common';

@Controller('victims')
export class VictimsController {
    constructor(
        public victimsService: VictimsService
    ) {}

    @Get()
    findAll(): any {
        return this.victimsService.findAll();
    }
}
