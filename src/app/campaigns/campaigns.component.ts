import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns : Campaign = {
    id: 1, 
    name: "test", 
    scenario: "test2"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
