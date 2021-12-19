import { getConnection } from 'typeorm';

async function closeConnection() {
  await getConnection().close();
}

export { closeConnection };
