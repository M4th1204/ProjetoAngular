import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})


export class HomePage {
  calendario = {
    mes : 'Maio',
    ano : 2023,
    foto : 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    dias_da_semana : ['dom','seg','ter','qua','qui','sex','sab'],
    primeira_semana : [30,'01','02','03','04','05','06'],
    segunda_semana : ['07','08','09',10,11,12,13],
    terceira_semana : [14,15,16,17,18,19,20],
    quarta_semana : [21,22,23,24,25,26,27],
    quinta_semana : [28,29,30,31,'01','02','03']
  }
}
