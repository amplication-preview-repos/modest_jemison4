import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SchemaTransformerService } from "./schematransformer.service";
import { TransformInput } from "../schemaTransformer/TransformInput";
import { TransformOutput } from "../schemaTransformer/TransformOutput";

@swagger.ApiTags("schemaTransformers")
@common.Controller("schemaTransformers")
export class SchemaTransformerController {
  constructor(protected readonly service: SchemaTransformerService) {}

  @common.Post("/transform")
  @swagger.ApiOkResponse({
    type: TransformOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TransformLengthAndDepth(
    @common.Body()
    body: TransformInput
  ): Promise<TransformOutput> {
        return this.service.TransformLengthAndDepth(body);
      }
}
