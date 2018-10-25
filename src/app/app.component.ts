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

	abcd = this.data.links;
	i = null;
  
	displayChild = false;
	displaySubChild = false;
	displaySubSubChild = false;

	getLink(event, links, i){
		console.log(links.links);
		if(links.links.length != 0 && links.links[0].childLinks == true){
			this.displayChild = true;
			this.i = i;
			console.log(this.displayChild +" "+ i);
 		}
 		else if((links.links.length != 0) && (links.links[0].subChildLinks == true)){
			this.displaySubChild = true;
 		}
 		else if((links.links.length != 0) && (links.links[0].subSubChildLinks == true)){
			this.displaySubSubChild = true;
 		}
 		else{
 		 	this.displayChild = false;
 		}
		
	}

}
