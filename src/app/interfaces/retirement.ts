import { AccountDto } from "./account";

export interface RetirementDto {
  userId: string;
  created: Date;
  account: AccountDto
}