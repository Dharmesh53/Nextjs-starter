import { getCurrentUser } from "@/lib/session";

export default async function Dashboard() {
  const user = await getCurrentUser();

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
