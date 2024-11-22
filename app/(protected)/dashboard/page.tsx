import { getCurrentUser } from "@/lib/session";

export default async function Dashboard() {
  const user = await getCurrentUser();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
