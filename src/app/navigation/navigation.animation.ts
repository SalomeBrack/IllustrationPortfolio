import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

const basicStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  opacity: '100%'
});

const fade = '600ms ease';
const slide = '200ms ease';

const visible = style({ opacity: '100%' });
const transparent = style({ opacity: 0 });

const center = style({ left: 0 });
const left = style({ left: '-100%' });
const right = style({ left: '100%' });

const fadeTransition = [
    style({ position: 'relative' }),

    query(':enter, :leave', [ basicStyle ]),
    query(':enter', [ transparent ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),

    group([
      query(':leave', [ animate(fade, visible) ], { optional: true }),
      query(':enter', [ animate(fade, visible) ], { optional: true }),
    ]),
];

const rightToLeft = [
    style({ position: 'relative', overflow: 'hidden' }),

    query(':enter, :leave', [ basicStyle ]),
    query(':enter', [ left ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),

    group([
      query(':leave', [ animate(slide, right) ], { optional: true }),
      query(':enter', [ animate(slide, center) ], { optional: true }),
    ]),
];

const leftToRight = [
    style({ position: 'relative', overflow: 'hidden' }),

    query(':enter, :leave', [ basicStyle ]),
    query(':enter', [ right ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),

    group([
      query(':leave', [ animate(slide, left) ], { optional: true }),
      query(':enter', [ animate(slide, center) ], { optional: true }),
    ]),
];

export const pageAnimations = trigger('routeAnimations', [
  transition('portfolio => home', rightToLeft),
  transition('about => home', rightToLeft),
  transition('contact => home', rightToLeft),
  transition('imprint => home', rightToLeft),

  transition('home => portfolio', fadeTransition),
  transition('about => portfolio', rightToLeft),
  transition('contact => portfolio', rightToLeft),
  transition('imprint => portfolio', rightToLeft),

  transition('home => about', leftToRight),
  transition('portfolio => about', leftToRight),
  transition('contact => about', rightToLeft),
  transition('imprint => about', rightToLeft),

  transition('home => contact', leftToRight),
  transition('portfolio => contact', leftToRight),
  transition('about => contact', leftToRight),
  transition('imprint => contact', rightToLeft),

  transition('home => imprint', leftToRight),
  transition('portfolio => imprint', leftToRight),
  transition('about => imprint', leftToRight),
  transition('contact => imprint', leftToRight),
]);
