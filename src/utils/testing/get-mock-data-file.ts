import path from "path";
import { __PROJECT_ROOT__ } from "../../../project-root";

export const getMockDataFile = (fileName: string) =>
  path.join(__PROJECT_ROOT__, "__mock-data__", fileName);
