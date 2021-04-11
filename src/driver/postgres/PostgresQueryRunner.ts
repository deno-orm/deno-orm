import {PostgresDriver} from "./PostgresDriver.ts";
import {DetailedQueryResult, QueryResult} from "../../interface/QueryResult.ts";
import {PoolClient} from "@postgres/client";

interface QueryOptions {
    detail?: boolean;
}

export class PostgresQueryRunner {
    driver: PostgresDriver;

    constructor(driver: PostgresDriver) {
        this.driver = driver;
    }

    // parse and execute query from QueryBuilder
    // execute(queryBuilderParameters: QueryBuilderParameters) {}

    // execute any query
    public async query(query: string, options?: QueryOptions): Promise<QueryResult | DetailedQueryResult> {
        const poolConnection: PoolClient = await this.driver.pool.connect();

        const queryObjectResult = await poolConnection.queryObject(query);
        poolConnection.release();

        const {rows, rowDescription, rowCount} = queryObjectResult

        return options?.detail ?
            {rows, rowDescription, rowCount: rowCount || 0} :
            {rows, rowCount: rowCount || 0};
    }
}
