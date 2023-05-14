import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';

@Component({
  selector: 'app-blocked-card',
  templateUrl: './blocked-card.component.html',
  styleUrls: ['./blocked-card.component.scss'],
})
export class BlockedCardComponent implements OnInit {
  emergente: boolean = false;
  contactsData: ContactJsonPlaceholder[] = [];
  @Input() contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
  };

  constructor(private cs: ContactService) {}

  ngOnInit(): void {}
}
