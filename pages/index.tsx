import { trpc } from '../utils/trpc'

export default function HomePage(): JSX.Element {
  const { data: greet } = trpc.greeting.useQuery({ name: "tRPC" });
  const { data: user } = trpc.getUserByid.useQuery(2);

  if (!greet || !user) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (<>
    <h1>{greet.text}</h1>
    <h3>{greet.timestamp}</h3>
    <ul>
      <li>{user.name}</li>
      <li>{user.email}</li>
    </ul>
    </>
  );
}