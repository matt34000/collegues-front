
import {Component} from '@angular/core';
@Component({
  selector: 'mon-composant',
  template: `<h1>Nom = {{unObjet.nom}} </h1>`
})
export class collegueMock {
  unObjet:any = {nom:'Je suis', prenom: "Je n'en ai pas" }
}

