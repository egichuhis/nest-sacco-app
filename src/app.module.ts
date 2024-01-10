import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './members/members.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
