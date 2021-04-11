import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

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

  }

  editUser() {

  }
}
