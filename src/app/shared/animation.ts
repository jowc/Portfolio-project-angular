import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from '@angular/animations';

export let fade = trigger('fade', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),

  transition(':enter, :leave', [animate('0.8s ease-in')]),
]);

export let slide: AnimationTriggerMetadata = trigger('slide', [
  state(
    'void',
    style({
      height: '0px',
    })
  ),

  transition(':enter, :leave', [animate('0.3s ease-in')]),
]);

export let slide2 = trigger('slide', [
  state(
    'void',
    style({
      height: '0px',
      opacity: 0,
    })
  ),

  transition(':enter', [animate('0.5s 2000ms ease')]),
]);
