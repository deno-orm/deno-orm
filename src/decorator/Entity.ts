import { Entity } from "../interface/Entity.ts";
import { getMetadata } from "../mod.ts";

interface EntityOptions {
  name?: string;
}

export function Entity(options: EntityOptions): ClassDecorator {
  return function (target) {
    getMetadata().entities.push({
      target: target,
      name: options.name || target.name,
    } as Entity);
  };
}
