import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import User from "./User";

@Entity("department")
export class Department {
    @PrimaryColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    responsavel_id: number;

    @OneToOne(() => User)
    @JoinColumn({ name: "id" })
    responsavel: User;
}
