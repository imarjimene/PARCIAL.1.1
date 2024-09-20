import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column()
    email:string;
    @Column()
    telefono:number;
    
    
}
