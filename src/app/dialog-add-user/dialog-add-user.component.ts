import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime(); //aus Date Objekt einen Timestamp machen für JSON
    };
    console.log('Current User is: ', this.user);
    this.loading = true;
    this.firestore.collection('users').add(this.user.toJSON()).then((result: any) => {
      this.loading = false;
      console.log('Adding user finished ', result);
      this.dialogRef.close();
    });
  }
}
