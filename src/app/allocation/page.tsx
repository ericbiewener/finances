import { getSchwabPositions } from "../../server/get-schwab-positions";
import { AllocationPage } from "./allocation-page";

export default async function Page() {
  const schwabPositions = await getSchwabPositions();
  return <AllocationPage schwabPositions={schwabPositions} />;
}
