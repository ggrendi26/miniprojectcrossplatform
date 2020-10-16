import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { BarangService } from 'src/app/services/barang/barang.service';
import { CpuService } from 'src/app/services/cpu/cpu.service';
import { GpuService } from 'src/app/services/gpu/gpu.service';
import { MotherboardService } from 'src/app/services/motherboard/motherboard.service';
import { RamService } from 'src/app/services/ram/ram.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() idBarang: string;
  barang: any;
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private barangService: BarangService,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private motherboardService: MotherboardService,
    private ramService: RamService
  ) { }

  ngOnInit() {
    if(this.idBarang.substring(0,2) == "cp"){
      this.barang = this.cpuService.getCpu(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "gp"){
      this.barang = this.gpuService.getGpu(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "mb"){
      this.barang = this.motherboardService.getMotherboard(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "rm"){
      this.barang = this.ramService.getRam(this.idBarang);
    }
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(form: NgForm){
    if(this.idBarang.substring(0,2) == "cp"){
      this.cpuService.editCpu(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "gp"){
      this.gpuService.editGpu(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "mb"){
      this.motherboardService.editMotherboard(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "rm"){
      this.ramService.editRam(form, this.idBarang);
    }
    this.barangService.editBarang(form, this.idBarang);
    this.onEdit();
  }

  onEdit(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'edited item'}, 'confirm');
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Edit Item...',
      duration: 1000
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  async presentAlert(form: NgForm){
    const alert = await this.alertCtrl.create({
      header: 'Edit Item',
      message: 'Apakah yakin ingin mengedit?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => this.onSubmit(form)
        }
      ]
    });
    await alert.present();
  }
}