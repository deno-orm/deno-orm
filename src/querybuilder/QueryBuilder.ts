import { Connection } from "../connection/Connection.ts";

interface QueryBuilderInsertColumn {
  columnName: string;
  value: string | number | PlainInsertOrUpdateObject;
}

interface QueryBuilderInsertObject {
  [key: string]: QueryBuilderInsertColumn;
}

interface PlainInsertOrUpdateObject {
  [key: string]: string | number | PlainInsertOrUpdateObject;
}

interface QueryBuiderJoinParameter {
  table: string;
  alias: string;
  condition: string;
}

interface QueryBuiderWhereParameter {
  condition: string;
  parameters?: Record<string, string>
}

export interface QueryBuilderParameters {
  table?: string;
  target?: () => void;
  where?: QueryBuiderWhereParameter[]
  join?: QueryBuiderJoinParameter[]
}

export class QueryBuilder {
  connection: Connection;
  parameters: QueryBuilderParameters = {
    where: []
  };

  constructor(tableOrEntity: string, connection: Connection) {
    this.parameters.table = tableOrEntity;
    this.connection = connection;
  }

  where(condition: string, parameters?: Record<string, string>): QueryBuilder {
    this.parameters.where?.push({
      condition,
      parameters
    })

    return this;
  }

}
