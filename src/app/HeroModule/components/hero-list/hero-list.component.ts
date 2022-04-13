import { Hero } from './Hero';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteHero, deleteMultiHeros } from 'src/app/CoreModule/store/actions/hero.action';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  constructor(
    private _store: Store<{ heroManage: Hero[] }>,
    private message: NzMessageService
  ) {}
  listHeros!: Hero[];
  listHeros$!: Observable<Hero[]>;
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  ngOnInit(): void {
    this.listHeros$ = this._store.select('heroManage');
    this.listHeros$.subscribe((data) => (this.listHeros = data));
  }

  deleteHero(id: number) {
    this._store.dispatch(deleteHero({ id }));
    this.message.create('success', 'Delete successfully');
  }

  onItemChecked(id: number) {
    this.setOfCheckedId.has(id)
      ? this.setOfCheckedId.delete(id)
      : this.setOfCheckedId.add(id);
  }

  onAllChecked() {
    this.listHeros.map((hero) => this.setOfCheckedId.add(hero.id));
  }

  deleteMultiUsers(){
    this._store.dispatch(deleteMultiHeros({payload: Array.from(this.setOfCheckedId)}))
    this.message.create('success', 'Delete successfully');
  }
}
