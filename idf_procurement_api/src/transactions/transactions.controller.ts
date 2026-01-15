import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}
  @Post('purchase')
  buyItem(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.buyItem(createTransactionDto);
  }
}
