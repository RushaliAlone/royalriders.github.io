import { Component } from "@angular/core";

@Component({
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class RoyalHome{
    desc:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente nisi quae amet animi ullam, optio officia culpa, deleniti labore odio eveniet velit nostrum recusandae distinctio nesciunt? Aperiam quis ut illo maiores quam velit ipsa consectetur sapiente doloribus dolore quasi quo atque soluta, adipisci ex optio vero voluptate. Assumenda, totam deleniti. Architecto reprehenderit, pariatur culpa quis repellendus labore sunt libero?';

    imgpath:string='assets/images/rider.jpg';
    about:string='About Royal Riders Club';
    w:number=700;
    h:number=300;
}