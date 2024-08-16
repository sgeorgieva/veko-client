import { useRouter } from "next/router";

export default function UsedCarDescription() {
  const router = useRouter();
  const { carId } = router.query;

  return (
    <div>
      <h1>Car ID: {carId}</h1>
      <p>This is the UsedCarDescription component.</p>
    </div>
  );
}
