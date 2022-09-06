import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1661950821176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns : [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "interests",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }
    
    //Serve para reverter a criação da Migrations
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("user");
    }

}
