import { Component, inject } from '@angular/core';
import { RetirementDataService } from '../../services/retirement-data/retirement-data.service';
import { RetirementDto } from '../../interfaces/retirement';
import { ChangeAccountNumberDialogComponent } from '../change-account-number-dialog/change-account-number-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmountViewerComponent } from "../amount-viewer/amount-viewer.component";
import { DateViewerComponent } from "../date-viewer/date-viewer.component";
import { AccountDto } from '../../interfaces/account';
@Component({
  selector: 'retirement-detail-form',
  templateUrl: 'retirement-detail-form.component.html',
  styleUrl: 'retirement-detail-form.component.css',
  standalone: true,
  imports: [FontAwesomeModule, AmountViewerComponent, DateViewerComponent],
  providers: [RetirementDataService]
})
export class RetirementDetailFormComponent {

  readonly dialog = inject(MatDialog);
  faPencil = faPencil;
  retirementInfo: RetirementDto | undefined;

  constructor(private retirementDataService: RetirementDataService) { }

  ngOnInit() {
    this.retirementInfo = this.retirementDataService.get();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeAccountNumberDialogComponent, {
      data: { account: this.retirementInfo?.account },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res => {

      const newRetirementInfo: RetirementDto = {
        userId: this.retirementInfo?.userId!,
        created: this.retirementInfo?.created!,
        account: (res.data as AccountDto)
      }

      this.retirementInfo = newRetirementInfo;
    })

  }


}