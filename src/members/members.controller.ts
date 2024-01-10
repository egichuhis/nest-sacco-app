// src/members/members.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from './member.entity';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll(): Promise<Member[]> {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Member> {
    return this.membersService.findOne(id);
  }

  @Post()
  create(@Body() member: Member): Promise<Member> {
    return this.membersService.create(member);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() member: Member): Promise<Member> {
    return this.membersService.update(id, member);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.membersService.remove(id);
  }
}
