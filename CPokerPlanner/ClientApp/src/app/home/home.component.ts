import {Component, Inject} from '@angular/core';
import {NameSelectDialog} from "../name-select-dialog/name-select-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

export class Player{
  name!: string;
  vote!: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private http: HttpClient, @Inject('BASE_URL') private APIUrl: string) {}

  availableVotes = ["?","0","1","2","3","5","8","13"]
  toggleControl = new FormControl('');
  name!: string;
  selectedCard!: string;
  voteList!: Player[];


  vote() {
    let player = new Player();
    player.name= this.name;
    player.vote = this.selectedCard;
    const request = this.http.post(this.APIUrl+"player", player);
    request.subscribe((resp) => {
    })
  }
  refreshResults(){
    const request = this.http.get<any>(this.APIUrl+"player")
    request.subscribe((resp) => {
      this.voteList = resp;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NameSelectDialog, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == undefined){
        this.openDialog();
      }
      this.name = result;
    });
  }

  submit(){
    this.selectedCard = this.toggleControl.value;
    this.vote();
  }
  clear(){
    const request = this.http.get<any>(this.APIUrl+"player/update")
    request.subscribe((resp) => {
      this.voteList = resp;
    })
  }

  ngOnInit(){
    this.openDialog();

  }
}
