import { profile } from 'console';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profile } from './Profile';
import { Post } from './Post';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column({unique:true})
  username: string;
 
  @Column()
  password: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({nullable:true})
  authStrategy: string;

  @OneToOne(()=> Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(()=> Post,(post) =>post .user)
  @JoinColumn()
  posts: Post[];
}