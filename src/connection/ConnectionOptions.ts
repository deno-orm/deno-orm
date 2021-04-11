export interface ConnectionOptions {
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
    entities: (() => void)[];
    type: 'postgres';
}
