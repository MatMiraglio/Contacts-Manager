import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../Contact.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-contact-button',
  templateUrl: './delete-contact-button.component.html',
  styleUrls: ['./delete-contact-button.component.scss']
})
export class DeleteContactButtonComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private _router: Router, private _contactService: ContactService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: this.contact.name, company: this.contact.company };

    const dialogRef = this.dialog.open( DeleteContactDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result === 'confirm') {
        this._contactService.deletContact(this.contact.id);
        this._router.navigate(['']);

      }
    });
  }
}
