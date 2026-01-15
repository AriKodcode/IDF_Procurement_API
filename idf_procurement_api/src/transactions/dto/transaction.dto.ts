import { IsString, IsInt, Min } from 'class-validator';
export class CreateTransactionDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  type: string;
  @IsInt()
  @Min(0, {
    message: 'only positive number',
  })
  quantity: number;
  @IsInt()
  @Min(0, {
    message: 'only positive number',
  })
  pricePerUnit: number;
}
