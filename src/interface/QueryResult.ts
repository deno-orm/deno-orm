import type { RowDescription } from "@postgres/connection";
export interface QueryResult {
    rows: Record<string, unknown>[];
    rowCount: number;
}

export interface DetailedQueryResult extends QueryResult {
    rowDescription: RowDescription
}
