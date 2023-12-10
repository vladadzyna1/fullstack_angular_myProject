import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    animate(
      '1s',
      keyframes([
        style({ transform: 'rotate(-180deg)', offset: 0 }),
        style({ transform: 'rotate(30deg)', offset: 0.3 }),
        style({ transform: 'rotate(-15deg)', offset: 0.6 }),
        style({ transform: 'rotate(0deg)', offset: 1 }),
      ])
    ),
  ]),
]);
