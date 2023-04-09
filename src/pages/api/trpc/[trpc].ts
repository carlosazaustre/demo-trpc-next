import * as trpcNext from '@trpc/server/adapters/next';
import { z } from "zod";
import { publicProcedure, router } from "../../../server";

interface User {
  id: number;
  name: string;
  email: string;
};

const userList: User[] = [{
  id: 1,
  name: "John Doe",
  email: "john@email.com",
},{
  id: 2,
  name: "Jane Doe",
  email: "jane@email.com",
}];

const appRouter = router({
  greeting: publicProcedure
    .input(
      z.object({
        name: z.string().nullish()
      })
    )
    .query(({input}) => {
      return{
        text: `hello ${input.name ?? 'world'}`,
        timestamp: new Date().toISOString(),
      }
    }),

    getUserByid: publicProcedure
      .input(z.number())
      .query(async ({input}) => {
        return userList.find((user) => user.id === input);
    }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});