import { Component } from '@angular/core';
import { AppConfig } from './appconfig';
import { ConfigService } from './service/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  config!: AppConfig;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.config = this.configService.readConfig();
  }
}
