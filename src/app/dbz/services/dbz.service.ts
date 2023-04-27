import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/dbz-character.interfase';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    lvl: 1000
  },{
    id: uuid(),
    name: 'Goku',
    lvl: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    lvl: 7500
  }];


  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( index: number ) {
  //this.characters.splice(index,1);
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }


}
