import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1661627651249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
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
      await queryRunner.dropTable("categories");
    }

}
