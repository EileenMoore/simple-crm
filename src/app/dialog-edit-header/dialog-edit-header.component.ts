import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-header',
  templateUrl: './dialog-edit-header.component.html',
  styleUrls: ['./dialog-edit-header.component.scss']
})
export class DialogEditHeaderComponent implements OnInit {
  user: User;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditHeaderComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {

  }

}
