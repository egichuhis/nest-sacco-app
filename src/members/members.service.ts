// src/members/members.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  findAll(): Promise<Member[]> {
    return this.membersRepository.find();
  }

  findOne(id: string): Promise<Member> {
    return this.membersRepository.findOne({ where: { id: parseInt(id) } });
  }

  async create(member: Member): Promise<Member> {
    return this.membersRepository.save(member);
  }

  async update(id: string, member: Member): Promise<Member> {
    await this.membersRepository.update(id, member);
    return this.membersRepository.findOne({ where: { id: parseInt(id) } });
  }

  async remove(id: string): Promise<void> {
    await this.membersRepository.delete(id);
  }
}
