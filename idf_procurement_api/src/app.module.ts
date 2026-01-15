import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ImagesModule } from './images/images.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './transactions/entities/transaction.entity';
@Module({
  imports: [
    TransactionsModule,
    ImagesModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'idf',
      autoLoadModels: true,
      synchronize: true,
      models: [Transaction],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
