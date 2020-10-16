import { Component } from '@angular/core';
import { Barang } from '../models/barang.model';
import { BarangService } from '../services/barang/barang.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barangs: Barang[];
  public list: boolean;
  public grid: boolean;

  constructor(
    private barangService: BarangService
  ) {}

  ngOnInit(){
    this.list = true;
    this.grid = true;
  }

  ionViewWillEnter(){
    this.barangs = this.barangService.getBarangMTZ();
  }

  changeList(){
    this.list = true;
    this.grid = false;
  }

  changeGrid(){
    this.list = false;
    this.grid = true;
  }
}
