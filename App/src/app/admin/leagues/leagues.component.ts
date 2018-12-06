import { Component, OnInit } from '@angular/core';
import { AdminLeagueService } from '../services/league.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  leagues:any;
  constructor(private adminLeagueService : AdminLeagueService) { 
  }

  ngOnInit() {
    this.adminLeagueService.getLeagues().subscribe((data) =>{
      this.leagues = data['result'];
    })
  }

}
