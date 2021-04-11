import { Metadata } from "./metadata/Metadata.ts";

export { Connection } from "./connection/Connection.ts";

let metadata: Metadata | null = null;

export function getMetadata() {
  if (!metadata) {
    metadata = new Metadata();
  }

  return metadata;
}
