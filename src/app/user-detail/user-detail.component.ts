import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditHeaderComponent } from '../dialog-edit-header/dialog-edit-header.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  userId = '';
  user: User = new User();

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('Got ID ', this.userId);
      this.getUser();
    })
  }

  getUser() {
    this.firestore.collection('users').doc(this.userId).valueChanges().subscribe((user: any) => {
      this.user = new User(user);
      console.log('Retrieved user ', this.user);
    });
  }

  editHeader() {
    const dialog = this.dialog.open(DialogEditHeaderComponent);
    dialog.componentInstance.user = this.user;
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
  }
}
