import { Component, Input, OnInit } from '@angular/core';
import { Barang } from 'src/app/models/barang.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() barangs: Barang[];
  constructor() { }

  ngOnInit() {}

}
