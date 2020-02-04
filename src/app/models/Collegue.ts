import { Component, OnInit } from '@angular/core';


export class Collegue implements OnInit {

  matricule:string;
  nom:string;
  prenoms:string;
  email:string;
  dateDeNaissance:Date;
  photoUrl:String;



  constructor() { }

  ngOnInit() {
  }

}
