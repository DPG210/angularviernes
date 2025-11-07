import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas',
  imports: [],
  templateUrl: './personas.components.html',
  styleUrl: './personas.components.css',
})
export class PersonasComponents implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service:ServicePersonas){}

  ngOnInit():void{
    // this._service.getPersonas().subscribe(response=>{
    //   this.personas=response;
    // })
    // this._service.getPersonasAxios().then((response)=>{
    //   this.personas=response.data;
    // })
    this._service.getPersonasFetch().then((data)=>{
      this.personas=data;
    })
  }
}
