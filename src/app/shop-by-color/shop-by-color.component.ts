import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shop-by-color',
  templateUrl: './shop-by-color.component.html',
  styleUrls: ['./shop-by-color.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopByColorComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ImagePath = "/assets/images/logo-example.jpg";

  uniformBlacks: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/BlackUniforms/4232-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/4245-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/5530-BLACK_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/GET042-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/GRST009-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/GRST079-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/GRSW871-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/GRT091-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/SK0408-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/2254-BLACK_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/4450-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/2480_015_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/2407-01_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/BlackUniforms/2022-BLAC_sm.jpg', title: 'uniform one', price: 50},
    ];

  uniformRoyalBlues: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/RoyalBlueUniforms/0103-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/0115-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/2350-ROYAL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/6103-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/6355_ROYA_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/7187-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/7188-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/41452-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/BWT010-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/C16418_RYL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/GET018-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/GET047-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/GIT033-08_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RoyalBlueUniforms/SK0112-08_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformNavies: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/NavyUniforms/7187-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/7188-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GET018-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GET042-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GET047-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GIT033-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRST009-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRST045-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRST079-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRST124-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRSW017-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GRT091-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/GVST028-23_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/NavyUniforms/SK0408-41_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformCeilBlues: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/CielBlueUniforms/2330-CEIL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/2331-CEIL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/6355_CEIL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/7188-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/BWT010-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST001-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST009-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST011-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST045-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST079-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRST124-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GRSW873-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/GVST028-40_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/CielBlueUniforms/SK0112-40_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformPewters: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/PewterUniforms/7188-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/BOT040-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/BWT010-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GIT033-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRST001-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRST009-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRST011-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRST079-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRSW017-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRSW873-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GRT091-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/GVST028-905_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/SK0112-18_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/PewterUniforms/SKT020-18_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformReds: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/RedUniforms/100_REDT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/103_REDT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/800_REDT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/2167-RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/2270-REDBK_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/2341-RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/5063-RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/6155_REDT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/6355_REDT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/9095P-RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/9141P-RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/C15108_RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/C15208_RED_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/RedUniforms/C54108_RED_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformGreys: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/GreyUniforms/100_GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/103_GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/503_GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/2245-GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/6355_GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/7187-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/7188-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/9133-GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/9133T-GREY_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/41423-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/BWT012-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/GRSP537-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/GRST011-471_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/GreyUniforms/GVST028-471_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformGreens: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/HunterGreenUniforms/100_HUNT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/103_HUNT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/4153-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/4450-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/5409-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/5409-37_sm (1).jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/6355_HUNT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/41423-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/71166-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/GRST009-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/GRST011-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/SK0112-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/SK0408-37_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/HunterGreenUniforms/SKT020-37_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformWhites: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/WhiteUniforms/0103-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/2115-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/2121-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/2130-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/4153-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/C15106_WHT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/C15108_WHT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/C15208_WHT_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/GRST001-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/GRST009-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/GRST011-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/GVST028-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/SK0112-10_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/WhiteUniforms/SKT020-10_sm.jpeg', title: 'uniform one', price: 50},
    ];

  uniformEggplants: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/EggplantUniforms/100_EGGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/500_EGGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/2167-EGGPL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/2341-EGGPL_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/5108_EGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/5155_EGGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/5308_EGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/6108_EGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/6455_EGGP_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/SK101-1277_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/SK102-1277_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/SK0112-1277_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/SK0408-1277_sm.jpeg', title: 'uniform one', price: 50},
      {url: '/assets/images/EggplantUniforms/SKT020-1277_sm.jpeg', title: 'uniform one', price: 50},
    ];
}
