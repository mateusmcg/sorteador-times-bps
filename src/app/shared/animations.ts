import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

const transitionBackwards = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.5s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.5s ease-out', style({ transform: 'translateX(100%)' }))], {
          optional: true,
      }),
  ]),
];

const transitionForward = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.5s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.5s ease-out', style({ transform: 'translateX(-100%)' }))], {
          optional: true,
      }),
  ]),
];

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => select-mode', transitionBackwards),
    transition('* => match', transitionForward),
    transition('select-mode => x2', transitionForward),
    transition('select-mode => x3', transitionForward),
    transition('select-mode => gc', transitionForward),
    transition('match => x2', transitionBackwards),
    transition('match => x3', transitionBackwards),
    transition('match => gc', transitionBackwards),
  ]);
