import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

links = [
	  {name:'Link 1', url:'', links:[
	    {name:'Link A', url:'', childLinks: true, links:[
	      {name:'Link a', url:'', subChildLinks: true, links:[
	        {name:'Link i', url:'#', subSubChildLinks: true, links:[]},
	        {name:'Link ii', url:'#', subSubChildLinks: true, links:[]}, 
	        {name:'Link iii', url:'#', subSubChildLinks: true, links:[]}, 
	        {name:'Link iv', url:'#', subSubChildLinks: true, links:[]}, 
	        {name:'Link v', url:'#', subSubChildLinks: true, links:[]}
	      ]},
	      {name:'Link b', url:'#', subChildLinks: true, links:[]}, 
	      {name:'Link c', url:'#', subChildLinks: true, links:[]}, 
	      {name:'Link d', url:'#', subChildLinks: true, links:[]}, 
	      {name:'Link e', url:'#', subChildLinks: true, links:[]}
	    ]},
	    {name:'Link B', url:'#', childLinks: true, links:[]}, 
	    {name:'Link C', url:'#', childLinks: true, links:[]}, 
	    {name:'Link D', url:'#', childLinks: true, links:[]}, 
	    {name:'Link E', url:'#', childLinks: true, links:[]}
	  ]},
	  {name:'Link 2', url:'#', links:[]}, 
	  {name:'Link 3', url:'#', links:[]}, 
	  {name:'Link 4', url:'#', links:[]}, 
	  {name:'Link 5', url:'#', links:[]}
	];


  constructor() { }
}
