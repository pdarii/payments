import { Component, OnInit } from "@angular/core";

import { MOCK_DATA } from "src/app/mocks/mockdata";

const VALUES = [
  {
    title: "Gas",
    value: "gas"
  },
  {
    title: "Light",
    value: "light"
  },
  {
    title: "Water",
    value: "water"
  }
];

@Component({
  selector: "app-visualization",
  templateUrl: "./visualization.component.html",
  styleUrls: ["./visualization.component.css"]
})
export class VisualizationComponent implements OnInit {
  year = 2019;
  value = VALUES[0].value;
  values = VALUES;

  visualizationData: any;
  multi: any[];
  view: any[] = [700, 400];
  legendTitle: string;
  legend = true;

  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  constructor() {}

  ngOnInit() {
    // Object.assign(this, { single });
    this.mapData();
  }

  redrawVisualization() {
    this.mapData(); // TODO Refactor when possible
  }

  private mapData() {
    const data = [];
    const currentYear = MOCK_DATA.find(item => item.year === this.year);
    if (currentYear) {
      this.legendTitle = `${currentYear.year}`;
      this.visualizationData = currentYear.months.map(month => {
        return {
          name: month.title,
          value: this.getValue(month)
        };
      });
    }
  }

  private getValue(month) {
    const start = parseInt(month[`${this.value}Start`]);
    const end = parseInt(month[`${this.value}End`]);
    return end - start; // TODO handle - values
  }

  onSelect(event) {
    console.log(event);
  }
}
