import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';

import { AdminLeagueService } from '../../services/league.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {
  form: FormGroup;
  constructor(
    private adminLeagueService : AdminLeagueService
  ) { }

  ngOnInit() {
    this.form = new FormGroup ({
      title: new FormControl(''),
    });
    console.log(this.form)
  }

  save() {
    this.adminLeagueService.postAddPage(this.form.value).subscribe(resp=>{console.log(resp), err=>console.log(err)});
  }

}
