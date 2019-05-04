import { OffendersService } from './offenders.service';
import { Controller, Get } from '@nestjs/common';

@Controller('offenders')
export class OffendersController {
    constructor(
        public offendersService: OffendersService
    ) {}

    @Get()
    findAll(): any {
        return this.offendersService.findAll();
    }
}