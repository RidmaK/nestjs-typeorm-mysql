import { type } from "os";

export type CreateUserParams = {
    username: string,
    password: string,
}

export type UpdateUserParams = {
    username: string,
    password: string,
}

export type CreateUserProfileParams = {
    firstname:string,
    lastname:string,
    email:string,
    age:number,
    gender:string,
    dob:string,
}

export type CreatePostParams = {
    title: string,
    content: string,
    author: string,
    description: string,
}