import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

links = [
		  {name:'Link 1', url:'', links:[
		    {name:'Link A', url:'', links:[
		      {name:'Link a', url:'', links:[
		        {name:'Link i', url:'#', links:[]},
		        {name:'Link ii', url:'#', links:[]}, 
		        {name:'Link iii', url:'#', links:[]}, 
		        {name:'Link iv', url:'#', links:[]}, 
		        {name:'Link v', url:'#', links:[]}
		      ]},
		      {name:'Link b', url:'#', links:[]}, 
		      {name:'Link c', url:'#', links:[]}, 
		      {name:'Link d', url:'#', links:[]}, 
		      {name:'Link e', url:'#', links:[]}
		    ]},
		    {name:'Link B', url:'#', links:[]}, 
		    {name:'Link C', url:'#', links:[]}, 
		    {name:'Link D', url:'#', links:[]}, 
		    {name:'Link E', url:'#', links:[]}
		  ]},
		  {name:'Link 2', url:'#', links:[]}, 
		  {name:'Link 3', url:'#', links:[]}, 
		  {name:'Link 4', url:'#', links:[]}, 
		  {name:'Link 5', url:'#', links:[]}
		];


  constructor() { }
}
