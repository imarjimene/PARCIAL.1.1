import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Client {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    apellido:string;
    @Column()
    email:string;
    @Column()
    numero:number; 
    @Column()
    direccion:string; 
    @Column()
    ciudad:string;
    @Column()
    pais:string;
    @Column()
    fecha:string;

}
