import { Component } from "@angular/core";

@Component({
    template:'<h1>{{msg}}</h1>',
    styles:['h1{text-align:center; margin: 30px; color:gray; font-size:60px}']
})
export class RoyalTwo{
    msg:string='this second page!!';
}