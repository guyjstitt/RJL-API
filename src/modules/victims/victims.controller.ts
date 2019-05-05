import { VictimsService } from './victims.service';
import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

import {
    ApiUseTags,
    ApiBearerAuth,
    ApiResponse,
    ApiOperation,
} from '@nestjs/swagger';
import { userInfo } from 'os';
import { Victims } from './victims.entity';

@ApiBearerAuth()
@ApiUseTags('victims')
@Controller('victims')
export class VictimsController {
    constructor(private victimsService: VictimsService) {}
    @ApiOperation({ title: 'Get all victims'})
    @ApiResponse({ status: 200, description: 'Return all victims.'})
    @Get()
    async findAll(@Query() query): Promise<Victims[]> {
        return await this.victimsService.findAll(query);
    }

    // @Get(':slug')
    // async findOne(@Param('slug') slug): Promise<VictimsData> {
    //     return await this.victimsService.findOne({slug});
    // }

    // @Get('slug/victims')
    // async findVictims(@Param('slug')slug): Promise<VictimsData>{
    //     return await this.victimsService.findVictims(slug);
    // }

    @ApiOperation({title: 'Create victim report'})
    @ApiResponse({ status:201, description: 'The report has been created.'})
    @ApiResponse({ status:403, description: 'Forbidden.'})
    @Post()
    async create(@Body() victimsData: Victims) {
        return this.victimsService.create(victimsData);
    }
}
