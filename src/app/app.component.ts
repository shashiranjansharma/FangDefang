import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'exercise';
	constructor(private data: DataService){

	}

	my_data = this.data.links;
	i = null;
	my_child1 = [];
	my_child2 = [];
	my_child3 = [];
	child1_top = 0;
	child1_left = 0;
	child2_top = 0;
	child2_left = 0;
	child3_top = 0;
	child3_left = 0;

	getChild1(event, link, index){
		this.my_child1 = this.my_data[index].links;
		this.child1_left = event.clientX;
		this.child1_top = event.clientY;
	}
	getChild2(event, link, index){
	    this.my_child2 = this.my_child1[index].links;
	    this.child2_left = event.clientX;
		this.child2_top = event.clientY;
	}
	getChild3(event, link, index){
	    this.my_child3 = this.my_child2[index].links;
	    this.child3_left = event.clientX;
		this.child3_top = event.clientY;
	}
}
