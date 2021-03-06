import { Injectable }      from '@angular/core';

import { Headers, Http }   from '@angular/http';
import { Hero }            from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Hero)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
