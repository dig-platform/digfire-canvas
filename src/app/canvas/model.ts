import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

// hero unit model

export interface Hero {
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroModel {
  public readonly hero: Hero = {
    title: 'Replace this',
    subtitle: 'with something awesome'
  }
  public readonly hero$: Observable<Hero> = of(this.hero);
}
