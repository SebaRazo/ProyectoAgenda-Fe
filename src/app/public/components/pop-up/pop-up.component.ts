import { Component, Inject, Input, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import {ContactCardComponent} from 'src/app/public/components/contact-card/contact-card.component'
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  emergente:boolean = false;
  constructor(){}
  @Input() contact:ContactJsonPlaceholder = {};


  ngOnInit(): void {
  }
  
}
