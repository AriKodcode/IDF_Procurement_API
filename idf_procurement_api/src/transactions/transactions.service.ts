import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/transaction.dto';
import { Transaction } from './entities/transaction.entity';
import fs from 'fs';

@Injectable()
export class TransactionsService {
  async buyItem(createTransactionDto: CreateTransactionDto) {
    const arrayReq = createTransactionDto;
    console.log(arrayReq);

    let amount = 0;
    for (let i in arrayReq) {
      amount += arrayReq[i].pricePerUnit * arrayReq[i].quantity;
    }
    const idfMoney = JSON.parse(
      await fs.promises.readFile(
        'src/transactions/transactiopns.budget.json',
        'utf-8',
      ),
    );
    if (amount > idfMoney.currentBudget) {
    }

    return 'This action adds a new transaction';
  }
}
