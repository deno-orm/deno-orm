import {ConnectionOptions} from "./ConnectionOptions.ts";
import {Drivers} from "../driver/Drivers.ts";
import {Driver} from "../driver/Driver.ts";

export class Connection {
    options: ConnectionOptions;

    driver: Drivers;

    constructor(options: ConnectionOptions) {
        this.options = options;

        const driver = new Driver(this.options);

        this.driver = driver.connect();

        this.loadMetadata();
    }

    protected loadOptions(): void {
    }

    protected async loadMetadata(): Promise<void> {
        // await this.driver
    }
}
