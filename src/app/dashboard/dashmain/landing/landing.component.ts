import { Component, OnInit,NgZone } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  dataSource: any;
  selectedSlice = 'none';
  chart: any;
  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
          "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
          "showLegend": "1",
          "showPercentValues": "1",
          "legendPosition": "bottom",
          "useDataPlotColorForLabels": "1",
          "enablemultislicing": "0",
          "showlegend": "0",
          "theme": "fusion",
      },
      "data": [{
          "label": "Active",
          "value": "326474"
      }, {
          "label": "Inactive",
          "value": "221009"
      }, {
          "label": "Blocked",
          "value": "143762"
      }]
    };
  }

  // FusionCharts initialized listener to get the chart instance
  initialized($event){
    this.chart = $event.chart; // saving chart instance
  }

  // Change listener for radio buttons
  onRadioOptionChange(option){
    this.selectedSlice = option;
    // For each data element , see if it is selected, if none then slice in all elements
    this.dataSource.data.forEach((d, index) => {
      if(option == 'none'){
        this.chart.slicePlotItem(index, false);
      } else if(option === d.label.toLowerCase()){
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  // Get data item label
  getLabel(index){
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event){
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    })
  }


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sale' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: '#28a745',
      backgroundColor: 'rgba(0,255,0,0.2)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  ngOnInit(): void {
    
  }

}
