import { VictimService } from './victim.service';
import { Controller, Get } from '@nestjs/common';

@Controller('victim')
export class VictimController {
  constructor(
    public victimService: VictimService
  ) { }

  @Get()
  findAll(): any {
    return this.victimService.findAll();
  }
}
