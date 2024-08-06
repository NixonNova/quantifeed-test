import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogModule
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AccountDto } from '../../interfaces/account';
import { AccountDataService } from '../../services/account-data/account-data.service';
import { AmountViewerComponent } from "../amount-viewer/amount-viewer.component";

// specific to this dialog, don't put in global interfaces
export interface ChangeAccountNumberDialogComponentData {
  account: AccountDto;
}


@Component({
  selector: 'change-account-number-dialog',
  templateUrl: 'change-account-number-dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatDialogModule,
    AmountViewerComponent
],
})
export class ChangeAccountNumberDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ChangeAccountNumberDialogComponent>);
  readonly data = inject<ChangeAccountNumberDialogComponentData>(MAT_DIALOG_DATA);
  accountInfo = signal<AccountDto[] | undefined>(undefined);
  selectedAccount = signal<AccountDto | undefined>(undefined);

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    this.accountInfo.set(this.accountDataService.get());
    this.selectedAccount.set(this.accountInfo()?.find(({ accountNumber }) => accountNumber === this.data.account.accountNumber));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onDetermineClick(): void {
    this.dialogRef.close({ data: this.selectedAccount() });
  }

}
