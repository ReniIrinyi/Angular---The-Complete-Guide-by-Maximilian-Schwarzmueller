import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ name: 'test', content: 'test', type: 'server' }];
  bluePrintElements = [{ name: 'test', content: 'test', type: 'blueprint' }];

  onServerAdded(serverData: {
    serverName: string;
    serverContent: string;
    serverType: string;
  }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server',
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
    serverType: string;
  }) {
    this.bluePrintElements.push({
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      type: 'blueprint',
    });
  }
}
