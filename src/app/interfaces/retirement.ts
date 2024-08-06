import { AccountDto } from "./account";

export interface RetirementDto {
  userId: string;
  created: Date;
  account: AccountDto
  // accountNumber: string;
  // accountCurrency: string;
  // accountBalance: number;
  // chargeDate: number;
  // chargeAmount: number;
  // marketValue:number;
  // status:number;
}