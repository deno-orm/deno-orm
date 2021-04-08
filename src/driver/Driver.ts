import {ConnectionOptions} from "../connection/ConnectionOptions.ts";
import {PostgresDriver} from "./postgres/PostgresDriver.ts";
import {Drivers} from "./Drivers.ts";

export class Driver {

    options: ConnectionOptions;

    constructor(options: ConnectionOptions) {
        this.options = options;
    }

    connect(): Drivers {
        const { type } = this.options;

        switch (type) {
            case "postgres":
                return new PostgresDriver(this.options);
        }
    }
}
