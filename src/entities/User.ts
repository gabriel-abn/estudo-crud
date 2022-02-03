import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export default class User {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ name: "nome" })
    nome: string;

    @Column({ name: "email" })
    email: string;
}
