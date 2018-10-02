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

	links = this.data.links;
	childLinks = "";
    
	displayChild = false;
	displaySubChild = false;
	displaySubSubChild = false;

	getLink(event, links){
		console.log(event);
		console.log(links);
		console.log(links.links.length);
		if(links.links.length != 0){
			event.preventDefault();
			this.displayChild = true;
			this.childLinks = links.links;
 		}
		
	}

}
