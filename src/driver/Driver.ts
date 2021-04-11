import { Connection } from "../mod.ts";
import { Drivers } from "./Drivers.ts";
import { PostgresDriver } from "./postgres/PostgresDriver.ts";

export class Driver {

    // connection: Connection;
    //
    // constructor(connection: Connection) {
    //     this.connection = connection;
    // }

    static connect(connection: Connection): Drivers {
        const { type } = connection.options;

        switch (type) {
            case "postgres":
                return new PostgresDriver(connection.options);
        }
    }
}
