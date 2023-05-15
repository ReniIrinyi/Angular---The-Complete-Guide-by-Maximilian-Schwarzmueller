import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-newserver',
  templateUrl: './newserver.component.html',
  styleUrls: ['./newserver.component.css'],
})
export class NewserverComponent implements OnInit {
  @Input('serverElement') serverElements: {
    name: string;
    content: string;
    type: string;
  };
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called! ');
  }

  ngOnInit() {
    console.log('ngOnitit');
  }
}
