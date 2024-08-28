import { envs } from './config';
import { AppDataSource } from './data/mysql/ormconfig';
// import { MongoDatabase } from './data';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
    main();
})()

async function main() {

  // await MongoDatabase.connect({

  //   dbName: envs.MONGO_DB_NAME,
  //   mongoUrl: envs.MONGO_URL,
  // });

  try {
    await AppDataSource.initialize();
    new Server({
      port: envs.PORT || 3000,
      routes: AppRoutes.routes,
    }).start();
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
  

}