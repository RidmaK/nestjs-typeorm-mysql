import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';
import { Profile } from 'src/typeorm/Profile';
import { Post } from 'src/typeorm/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile,Post])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
