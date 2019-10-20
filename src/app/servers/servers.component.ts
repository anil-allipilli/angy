import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreation = "No server was created";
  serverName = "HelloThere";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreation = "Server was created! Name is " + this.serverName;
  }
  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
  ngOnInit() {}
}
