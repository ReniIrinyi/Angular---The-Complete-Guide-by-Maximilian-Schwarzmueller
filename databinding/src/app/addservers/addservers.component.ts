import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  NgModule,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-addservers',
  templateUrl: './addservers.component.html',
  styleUrls: ['./addservers.component.css'],
})
export class AddserversComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverType: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverType: string;
  }>();

  @ViewChild('serverContentInput', { static: true })
  servercontentInput: ElementRef;

  constructor() {}
  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.servercontentInput.nativeElement.value,
      serverType: 'server',
    });
  }
  onAddBlueprint(blueprintnameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: blueprintnameInput.value,
      serverContent: this.servercontentInput.nativeElement.value,
      serverType: 'blueprint',
    });
  }
}
