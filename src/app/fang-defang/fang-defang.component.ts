import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fang-defang',
  templateUrl: './fang-defang.component.html',
  styleUrls: ['./fang-defang.component.css']
})
export class FangDefangComponent implements OnInit {

	fang = "";
	defang = "";

	onDefang(test){
		test = this.fang.split(" ");
		for(var i = 0; i < test.length; i++ ){
			test[i] = test[i].replace(/\[\.]/g, ".");
			test[i] = test[i].replace(/\[\ @]/g, "@");
			test[i] = test[i].replace("hxxp", "http");
		}
		for(var i = 0; i < test.length; i++ ){
			test[i] = test[i].replace(/[.]/g, "[.]");
			test[i] = test[i].replace(/@/g, "[@]");
			test[i] = test[i].replace("http", "hxxp");

			if( test[i].charAt(0) == "[" && test[i].charAt(1) == "." && test[i].charAt(2) == "]" ){
				test[i] = test[i].substring(3, test[i].length);
				test[i] = "." + test[i];
				console.log(test[i]);
			}
			if(test[i].charAt(test[i].length-1) == "]" && test[i].charAt(test[i].length-2) == "." && test[i].charAt(test[i].length-3) == "["){
				test[i] = test[i].substring(0, test[i].length-3);
				test[i] = test[i] + ".";
				console.log(test[i]);
			}

		}
		this.defang = test.join(" ");
		if(this.fang == this.defang){
			alert("Already defang.")
		}
	}

	onFang(test){
	 	test = this.defang.split(" ");
	 	for(var i = 0; i < test.length; i++ ){
			test[i] = test[i].replace(/\[\.]/g, ".");
			test[i] = test[i].replace(/\[\@]/g, "@");
			test[i] = test[i].replace("hxxp", "http");
		}
		this.fang = test.join(" ");
		if(this.fang == this.defang){
			alert("Already fang.")
		}
	}

	constructor() { }

	ngOnInit() {
	}

}
