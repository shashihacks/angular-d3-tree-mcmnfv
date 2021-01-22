import { Component } from "@angular/core";

import { AngularD3TreeLibService } from "angular-d3-tree";

const dataTreeSimple = {
  result: [
    { id: "1", description: "root lv 1" },

    { id: "2", description: "lv 2", parent: "1" },
    { id: "3", description: "lv 3", parent: "1" },
    { id: "4", description: "lv 4", parent: "1" },

    { id: "5", description: "lv 5", parent: "2" },
    { id: "6", description: "lv 6", parent: "2" },

    { id: "7", descripition: "lv 7", parent: "3" },
    { id: "8", description: "lv 8", parent: "3" },

    { id: "9", description: "lv 9", parent: "4" },
    { id: "10", description: "lv 10", parent: "4" },

    { id: "11", description: "lv 9", parent: "9" },
    { id: "12", description: "lv 10", parent: "9" }
  ]
};

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any[];
  constructor(private treeService: AngularD3TreeLibService) {
    this.data = dataTreeSimple.result;
  }
  selectedNode: any;
  nodeUpdated(node: any) {}
  nodeSelected(node: any) {
    this.selectedNode = node;
  }
}
