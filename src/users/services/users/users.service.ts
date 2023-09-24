import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/User';
import { Repository } from 'typeorm';
import { CreateUserParams ,CreateUserProfileParams,UpdateUserParams} from 'src/utils/types';
import { Profile } from '../../../typeorm/Profile';
import { CreatePostParams } from 'src/utils/types';
import { Post } from '../../../typeorm/Post';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Post) private postRepository: Repository<Post>,
        ) {

    }
    findUsers(){
        return this.userRepository.find({relations:['profile','posts']});
    }
    
    async findUser(id:number){
        const user = await this.userRepository.findOne({
            where: {
              id,
            },
            relations: ['profile','posts'],
          });
        if(!user){
            throw new HttpException(
                'User not found. Cannot create Profile',
                HttpStatus.BAD_REQUEST,
            )
        }
        return user;
    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails,
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }
    updateUser(id:number,updateUserDetails: UpdateUserParams){
        return this.userRepository.update({id},{...updateUserDetails});
    }

    deleteUser(id:number){
        return this.userRepository.delete({id});
    }

    async createUserProfile(id:number,createUserProfileDetails:CreateUserProfileParams){
        const user = await this.userRepository.findOneBy({id});
        if(!user){
            throw new HttpException(
                'User not found. Cannot create Profile',
                HttpStatus.BAD_REQUEST,
            )
        }
        const newProfile = this.profileRepository.create(createUserProfileDetails);
        const saveProfile = await this.profileRepository.save(newProfile);
        user.profile =saveProfile;
        return this.userRepository.save(user);
    }

    async createPost(id: number,createPostDetails:CreatePostParams){
        const user = await this.userRepository.findOneBy({id});
        if(!user){
            throw new HttpException(
                'User not found. Cannot create Post. Please',
                HttpStatus.BAD_REQUEST,
            )
        }
        const newPost = this.postRepository.create({
            ...createPostDetails,
            createdAt: new Date(),
            user});
        return this.postRepository.save(newPost);
       
    }
}
