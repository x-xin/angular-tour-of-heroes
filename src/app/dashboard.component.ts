import { Component, OnInit }      from '@angular/core';

import { Http }                   from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

import { Hero }                   from './hero';
import { HeroService }            from './hero.service';

@Component({
  selector: "dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  test: Hero[] = [];

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private http:Http) {

  }

  ngOnInit() :void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));

    this.http.get(`app/heroes`)
        .toPromise()
        .then(response => {
          this.test = response.json().data;
          console.log(this.test);
        });
  }
}
