import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BarangService } from 'src/app/services/barang/barang.service';
import { CpuService } from 'src/app/services/cpu/cpu.service';
import { GpuService } from 'src/app/services/gpu/gpu.service';
import { MotherboardService } from 'src/app/services/motherboard/motherboard.service';
import { RamService } from 'src/app/services/ram/ram.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  jenis: string;
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private barangService: BarangService,
    private cpuService: CpuService,
    private gpuService: GpuService,
    private motherboardService: MotherboardService,
    private ramService: RamService
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  jenisBarang($event){
    this.jenis = $event.target.value;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    if(this.jenis == "cpu"){
      this.cpuService.addCpu(form);
      this.barangService.saveCpu();
    }
    else if(this.jenis == "gpu"){
      this.gpuService.addGpu(form);
      this.barangService.saveGpu();
    }
    else if(this.jenis == "motherboard"){
      this.motherboardService.addMotherboard(form);
      this.barangService.saveMother();
    }
    else if(this.jenis == "ram"){
      this.ramService.addRam(form);
      this.barangService.saveRam();
    }
  }

  onSave(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'add new item'}, 'confirm');
      this.presentToast();
    })
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'item saved',
      duration: 3000
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New item has been added.',
      position: 'bottom',
      color: 'success',
      duration: 3000
    });

    toast.present();
  }
}
