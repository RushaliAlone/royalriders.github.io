import { Router,RouterModule } from "@angular/router";
import { RoyalError } from "./ErrorPage/error.component";
import { RoyalEvent } from "./Events/event.component";
import { RoyalOne } from "./extra/one.component";
import { RoyalThree } from "./extra/three.component";
import { RoyalTwo } from "./extra/two.component";
import { RoyalFeedBack } from "./feedback/feedback.component";
import { RoyalHome } from "./Home/home.component";
import { RoyalMember } from "./Members/member.component";
import { RoyalRegister } from "./Registration/register.component";

export const routing = RouterModule.forRoot([
    {path:'',component:RoyalHome},
    {path:'members',component:RoyalMember},
    {path:'events',component:RoyalEvent},
    {path:'register',component:RoyalRegister},
    {path:'feedback',component:RoyalFeedBack},
    // {path: 'one',component:RoyalOne},
    // {path: 'two',component:RoyalTwo},
    // {path: 'three',component:RoyalThree},
    {path:'**',component:RoyalError}
]);