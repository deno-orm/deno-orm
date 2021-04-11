import { Connection } from "../../src/mod.ts";

Deno.test("should be able to find simple data in some drivers", async () => {

  // init connection
  const connection: Connection = new Connection({
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "deno",
    port: 5432,
    entities: [],
    type: "postgres",
  });

  console.log(connection.createQueryBuilder("post"));

  // connection MUST be closed before finish test
  await connection.close();
});
