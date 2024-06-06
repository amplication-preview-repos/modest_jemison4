import { Injectable } from "@nestjs/common";
import { TransformInput } from "../schemaTransformer/TransformInput";
import { TransformOutput } from "../schemaTransformer/TransformOutput";

@Injectable()
export class SchemaTransformerService {
  constructor() {}
  async TransformLengthAndDepth(args: TransformInput): Promise<TransformOutput> {
    throw new Error("Not implemented");
  }
}
