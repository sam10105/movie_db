import createServer from './server';

(async () => {
  const server = createServer();
  const { url } = await server.listen();

  console.log(`🚀 Server ready at ${url}`);
})();
