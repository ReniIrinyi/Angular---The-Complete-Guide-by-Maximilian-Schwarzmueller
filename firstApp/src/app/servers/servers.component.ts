import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  alowNewServer = false;
  serverCreation = 'No server was created';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Test', 'Test2'];

  constructor() {
    setTimeout(() => {
      this.alowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = `Server: ${this.serverName} was created`;
    setTimeout(() => {
      this.serverCreated = false;
    }, 2000);
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
