import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [ //':increment' keyword => transition happens only when incrementing values (tab 1 to tab 2 to tab 3)
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          })
        ], { optional: true }),
        // query(':enter', [
        //     style({
        //       opacity: '0',
        //     })
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'translateX(-50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(50px)',
              opacity: 0
            }),
            animate('250ms 120ms ease-out', style({ //animate('[duration] [delay]')
              opacity: '1',
              transform: 'translateX(0)'
            }))
          ], { optional: true})
        ])
      ]),

      transition(':decrement', [ 
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          })
        ], { optional: true }),
        // query(':enter', [
        //     style({
        //       opacity: '0',
        //     })
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'translateX(50px)'
            }))
          ], { optional: true }),
  
          query(':enter', [
            style({
              transform: 'translateX(-50px)',
              opacity: 0
            }),
            animate('250ms 120ms ease-out', style({
              opacity: '1',
              transform: 'translateX(0)'
            }))
          ], { optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRouteData['tab']; //tab values set in app-routing.module.ts
  }

}
