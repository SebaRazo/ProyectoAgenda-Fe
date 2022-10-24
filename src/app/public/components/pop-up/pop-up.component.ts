import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact, ContactJsonPlaceholder, defaultContact } from 'src/app/core/interfaces/contacts';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {this.firstName = data.name }

  @Input() contact:ContactJsonPlaceholder = {};


  ngOnInit(): void {
  }

}
