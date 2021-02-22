import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaos-bag',
  templateUrl: './chaos-bag.component.html',
  styleUrls: ['./chaos-bag.component.css']
})
export class ChaosBagComponent implements OnInit {

  //These are all the different modes that can exist for the chaos bag 
  //might need to change these into JSON format instead of this format 
  //but temporarly they are arrays 
  campaign = ["Standalone", "Night of the Zealot", "The Dunwich Legacy", "The Path to Carcosa",
  "The Forgotten Age", "The Circle Undone", "The Dream-Quest", 
  "The Web of Dreams", "The Innsmouth Conspiracy"];

scenariosStandalone = ["Curse of the Rougarou", "Carnevale of Horrors", "The Labyinths of Lunacy", 
          "The Eternal Slumber", "The Night's Usuper", "The Blob that Ate Everything",
          "Murder at the Excelsior Hotel", "War of the Outer Gods"];

/*
Need to add these later: 
scenariosZealot =

scenariosDunwich =

scenariosCarcoas = 

scenariosForgotten = 

scenariosCircleUndone = 

scenariosDeamQuest = 

scenariosWebDreams =

scenariosInnsmouth = 
*/


difficulty = ["easy", "standard", "hard", "expert"];

  constructor() { }

  ngOnInit(): void {
  }

}
