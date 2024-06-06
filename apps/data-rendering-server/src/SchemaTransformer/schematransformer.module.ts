import { Module } from "@nestjs/common";
import { SchemaTransformerService } from "./schematransformer.service";
import { SchemaTransformerController } from "./schematransformer.controller";
import { SchemaTransformerResolver } from "./schematransformer.resolver";

@Module({
  controllers: [SchemaTransformerController],
  providers: [SchemaTransformerService, SchemaTransformerResolver],
  exports: [SchemaTransformerService],
})
export class SchemaTransformerModule {}
