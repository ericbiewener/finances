import { AllocationPage } from "../../components/allocation/allocation-page";
import { getSchwabPositions } from "../../server/get-schwab-positions";

export default async function Page() {
  const schwabPositions = await getSchwabPositions();
  return <AllocationPage schwabPositions={schwabPositions} />;
}
