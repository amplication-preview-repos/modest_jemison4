import * as graphql from "@nestjs/graphql";
import { TransformInput } from "../schemaTransformer/TransformInput";
import { TransformOutput } from "../schemaTransformer/TransformOutput";
import { SchemaTransformerService } from "./schematransformer.service";

export class SchemaTransformerResolver {
  constructor(protected readonly service: SchemaTransformerService) {}

  @graphql.Mutation(() => TransformOutput)
  async TransformLengthAndDepth(
    @graphql.Args()
    args: TransformInput
  ): Promise<TransformOutput> {
    return this.service.TransformLengthAndDepth(args);
  }
}
