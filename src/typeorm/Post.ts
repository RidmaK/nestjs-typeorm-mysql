import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({name: "posts"})
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    title:string;

    @Column({nullable: true})
    content:string;

    @Column({nullable: true})
    author:string;

    @Column({nullable: true})
    createdAt:Date;

    @Column({nullable: true})
    updatedAt:Date;

    @Column({nullable: true})
    description:string;

    @ManyToOne(()=> User,(user)=> user.posts)
    user:User;

}