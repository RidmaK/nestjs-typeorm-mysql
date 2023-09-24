import { Body, Controller, Get, Post,Put,Param,Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateUserDto } from '../../dtos/UpdateUser.dto';
import { CreateUserProfileDto } from '../../dtos/CreateUserProfile.dto';
import { CreatePostDto } from '../../dtos/CreatePost.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){

    }
    @Get()
    getUsers(){
       return this.userService.findUsers();
    }
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number){
       return this.userService.findUser(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
        ){
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    deleteUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }

    @Post(':id/profiles')
    createUserProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDto: CreateUserProfileDto ){
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(':id/posts')
    createPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() createPostDto: CreatePostDto
        ){
        return this.userService.createPost(id, createPostDto);
    }
}
