import {animate, state, style, transition, trigger} from '@angular/animations';


export const fadeIn = 
    trigger('fadeIn',[
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-30%)'
                //transform: 'rotate(150deg)'
            }),
            animate('500ms linear', 
            style({
                opacity: 1,
                transform: 'translateY(0)' 
                //transform: 'rotate(150deg)'
            }))
        ])
    ]);