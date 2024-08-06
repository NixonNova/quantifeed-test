import { Injectable } from '@angular/core';
import { AccountDto } from '../../interfaces/account';
@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor() { }

  get(userId?: string):AccountDto[] {
    const mockAccountListData:AccountDto[] = [{
      userId: "nixonnova@outlook.com",
      accountNumber: "123-456-789",
      accountCurrency: "TWD",
      accountBalance: 600000,
      chargeDate: 1,
      chargeAmount: 25000,
      marketValue: 900000,
      status: "Monthly charge"
    },{
      userId: "nixonnova@outlook.com",
      accountNumber: "555-666-777",
      accountCurrency: "USD",
      accountBalance: 100000,
      chargeDate: 10,
      chargeAmount: 2000,
      marketValue: 125000,
      status: "Yearly charge"
    }];
    return mockAccountListData
  }

}
