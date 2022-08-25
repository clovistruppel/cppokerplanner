import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface UserData {
  name: string;
}

@Component({
  selector: 'name-select-dialog.component',
  templateUrl: './name-select-dialog.component.html',
  styleUrls: ['./name-select-dialog.component.css']
})
export class NameSelectDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NameSelectDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
  ) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
