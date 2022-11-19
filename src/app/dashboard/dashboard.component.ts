import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = []; //Вопрос 3: Как читается эта строка? "Переменная heroes типа массива Hero[] присаивается пустое значение массива []?"

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {  //Вопрос 4: Непонятно что такое void "метод ngOnInit()  - неопределенного типа? Для чего?"
		this.getHeroes();
	}
	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes.slice(1, 5));  //Вопрос 5: что за стрелочки такие?
	}

}
