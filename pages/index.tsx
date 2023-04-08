import { trpc } from '../utils/trpc'

export default function HomePage(): JSX.Element {
  const { data: greet } = trpc.greeting.useQuery({ name: "tRPC" });
  const { data: user } = trpc.getUserByid.useQuery(2);

  if (!greet || !user) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{greet.text}</h1>
          <p className="py-6">{greet.timestamp}</p>
          <button className="btn btn-primary">Get Started</button>
          <ul className="menu bg-base-300 w-56">
            <li><a>{user.name}</a></li>
            <li><a>{user.email}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}