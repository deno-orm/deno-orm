import { Driver } from "../driver/Driver.ts";
import { Drivers } from "../driver/Drivers.ts";
import { QueryBuilder } from "../querybuilder/QueryBuilder.ts";
import { ConnectionOptions } from "./ConnectionOptions.ts";

export class Connection {

    queryBuilder: QueryBuilder;

    queryRunner: QueryBuilder;

    options: ConnectionOptions;

    driver: Drivers;

    constructor(options: ConnectionOptions) {
        this.options = options;

        this.driver = Driver.connect(this);

    }

    createQueryBuilder(tableOrEntity: string): QueryBuilder {
        return new QueryBuilder(tableOrEntity, this);
    }

    public close(): Promise<void> {
        return this.driver.close()
    }
} 
