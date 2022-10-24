import { Component, Input, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder, defaultContact } from 'src/app/core/interfaces/contacts';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/public/components/pop-up/pop-up.component'

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private dialogRef : MatDialog){}
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }


  @Input() contact:ContactJsonPlaceholder = {};

  ngOnInit(): void {
  }

}