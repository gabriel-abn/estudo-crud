import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDepartment1643747499795 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "department",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "responsavel_id",
                        type: "int",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_id_responsavel",
                        columnNames: ["responsavel_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("department");
    }
}
