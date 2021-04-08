import {ConnectionOptions} from "../../connection/ConnectionOptions.ts";
import {Pool} from '@postgres';
import {PoolClient} from "@postgres/client";
import {DetailedQueryResult, QueryResult} from "../../interface/QueryResult.ts";

const POOL_MAX_SIZE = 1;

interface QueryOptions {
    detail?: boolean;
}

export class PostgresDriver {
    pool: Pool;
    options: ConnectionOptions
    constructor(options: ConnectionOptions) {
        this.options = options;

        this.pool = this.createPool()
    }

    protected createPool(): Pool {
        const {host, username, password, database, port} = this.options;
        return new Pool({
            hostname: host,
            user: username,
            password,
            database,
            port
        }, POOL_MAX_SIZE);
    }

    public async query<T>(query: string, options?: QueryOptions): Promise<QueryResult | DetailedQueryResult> {
        const poolConnection: PoolClient = await this.pool.connect();

        const queryObjectResult = await poolConnection.queryObject(query);
        poolConnection.release();

        const {rows, rowDescription, rowCount} = queryObjectResult

        return options?.detail ?
            {rows, rowDescription,  rowCount: rowCount || 0} :
            {rows, rowCount: rowCount || 0};
    }
}
