import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  birthDate;

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('Got ID ', this.userId);
      this.getUser();
    })
  }

  getUser() {
    if (this.userId) {
      this.firestore.collection('users').doc(this.userId).valueChanges().subscribe((user: any) => {
        this.user = new User(user);
        this.birthDate = new Date(user.birthDate);
        this.convertDate(this.birthDate);
        console.log('Retrieved user ', this.user);
      });
    }
  }

  convertDate(today) {
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0! 
    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
    this.birthDate = mm + '/' + dd + '/' + yyyy;
  }

  editHeader() {
    const dialog = this.dialog.open(DialogEditHeaderComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
