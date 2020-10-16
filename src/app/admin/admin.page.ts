import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Barang } from '../models/barang.model';
import { BarangService } from '../services/barang/barang.service';
import { CpuService } from '../services/cpu/cpu.service';
import { GpuService } from '../services/gpu/gpu.service';
import { MotherboardService } from '../services/motherboard/motherboard.service';
import { RamService } from '../services/ram/ram.service';
import { AddComponent } from './component/add/add.component';
import { EditComponent } from './component/edit/edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  barangs: Barang[];
  constructor(
    private barangService: BarangService,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private ramService: RamService,
    private motherboardService: MotherboardService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.barangs = this.barangService.getAllBarang();
  }

  deleteItem(barangId: string){
    if(barangId.substring(0,2) == "cp"){
      
      this.cpuService.deleteCpu(barangId);
    }
    else if(barangId.substring(0,2) == "gp"){
      this.gpuService.deleteGpu(barangId);
    }
    else if(barangId.substring(0,2) == "rm"){
      this.ramService.deleteRam(barangId);
    }
    else if(barangId.substring(0,2) == "mb"){
      this.motherboardService.deleteMotherboard(barangId);
    }
    this.barangService.deleteBarang(barangId);
    this.barangs = this.barangService.getAllBarang();
  }

  async presentModalEdit(barangId: string){
    const modal = await this.modalCtrl.create({
      component: EditComponent,
      componentProps: {idBarang: barangId}
    });

    modal.onDidDismiss().then(resultData => {

    })

    return await modal.present();
  }

  async presentModalAdd(){
    const modal = await this.modalCtrl.create({
      component: AddComponent
    });

    modal.onDidDismiss().then(resultData => {
      this.barangs = this.barangService.getAllBarang();
    });

    return await modal.present();
  }

  async presentAlert(barangId: string){
    const alert = await this.alertCtrl.create({
      header: 'Hapus Item',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteItem(barangId)
        }
      ]
    });
    await alert.present();
  }

}
