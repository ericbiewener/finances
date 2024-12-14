import { AllocationPage } from "../../components/allocation/allocation-page";
import { getPositions } from "../../server/get-positions";

export default async function Page() {
  const positions = await getPositions();
  return <AllocationPage positions={positions} />;
}
