import createServer from './server';
import { PORT } from './config';

(async () => {
  const server = createServer();
  const { url } = await server.listen({ port: PORT });

  console.log(`🚀 Server ready at ${url}`);
})();
