import { getPositions } from "./get-positions";

export type Positions = Awaited<ReturnType<typeof getPositions>>;
