import { Component } from "@angular/core";

@Component({
    template:'<h1>{{error}}</h1>',
    styles:['h1{text-align:center; margin: 200px auto; color:gray; font-size:60px}']
})
export class RoyalError{
    error:string='404 Error: This page is not found!!!';
}