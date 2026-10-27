import { createServer } from 'vite';

const server = await createServer();
await server.listen();
server.printUrls();

async function shutdown() {
  await server.close();
  process.exit(0);
}
process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
