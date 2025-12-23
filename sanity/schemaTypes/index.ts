import { type SchemaTypeDefinition } from "sanity";
import { catergoryType } from "./categorytype";
import { lessonType } from "./lessontype";
import { courseType } from "./coursetype";
import { moduleType } from "./moduletype";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [catergoryType, lessonType, courseType, moduleType],
};
