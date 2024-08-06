import { Injectable } from '@angular/core';
import { RetirementDto } from '../../interfaces/retirement';
import { AccountDto } from '../../interfaces/account';
@Injectable({
  providedIn: 'root'
})
export class RetirementDataService {

  constructor() { }

  get(userId?: string):RetirementDto {
    const mockRetirementData:RetirementDto = { 
      userId:"nixonnova@outlook.com",
      created: new Date("2024-08-06T01:44:22.537Z"), 
      account : {
        userId: "nixonnova@outlook.com",
        accountNumber: "123-456-789",
        accountCurrency: "TWD",
        accountBalance: 600000,
        chargeDate: 1,
        chargeAmount: 25000,
        marketValue: 900000,
        status: 1
      }
    };
    return mockRetirementData
  }

}
