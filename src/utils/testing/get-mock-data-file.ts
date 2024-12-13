import path from "path";
import { getProjectRoot } from "../file-system/get-project-root";

export const getMockDataFile = (fileName: string) => path.join(getProjectRoot(), "__mock-data__", fileName)
