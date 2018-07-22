import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@ViewChild('agGrid')
agGrid: AgGridNg2;

  title = 'Ag Grid Demo';

  // columnDefs = [
  //   { headerName: 'Make', field: 'make', checkboxSelection: true},
  //   { headerName: 'Model', field: 'model' },
  //   { headerName: 'Price', field: 'price' }
  // ];

  // For grouping in ag-grid enterprise
  columnDefs = [
    { headerName: 'Make', field: 'make', rowGroupIndex: 0 },
    { headerName: 'Price', field: 'price' }
  ];

  autoGroupColumnDef = {
   headerName: 'Model',
   field: 'model',
   cellRenderer: 'agGroupCellRenderer',
   cellRendererParams: {
     checkbox: true
   }
  };

  rowData: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.rowData = this.dataService.getData();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    console.log('selectData = ' + JSON.stringify(selectedData));
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

    // Send data to the backend
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
