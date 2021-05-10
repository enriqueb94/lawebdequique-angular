import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "../../../node_modules/ngx-spinner";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
