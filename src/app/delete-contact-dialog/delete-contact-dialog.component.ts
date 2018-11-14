import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.scss']
})
export class DeleteContactDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  Cancel(): void {
    this.dialogRef.close();
  }

  Confirm(): void {
    this.dialogRef.close('confirm');
  }
}
