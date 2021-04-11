import {Pool} from '@postgres';
import {ConnectionOptions} from "../../connection/ConnectionOptions.ts";
import {PostgresQueryRunner} from "./PostgresQueryRunner.ts";

const POOL_MAX_SIZE = 1;

export class PostgresDriver {
    pool: Pool;

    options: ConnectionOptions;

    constructor(options: ConnectionOptions) {
        this.options = options;

        this.pool = this.createPool();
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

    public createQueryRunner() {
        return new PostgresQueryRunner(this);
    }

    public async close(): Promise<void> {
        await this.pool.end()
    }
}
