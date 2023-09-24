import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'profiles'})
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    firstname: string;

    @Column({nullable:true})
    lastname: string;

    @Column({unique:true,nullable:true})
    email: string;

    @Column({nullable:true})
    age: number;

    @Column({nullable:true})
    gender: string;

    @Column({nullable:true})
    dob: string;

}