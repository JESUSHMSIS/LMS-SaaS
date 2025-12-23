import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { lessonType } from "./lessonType";
import { courseType } from "./courseType";
import { moduleType } from "./moduleType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, lessonType, courseType, moduleType],
};
