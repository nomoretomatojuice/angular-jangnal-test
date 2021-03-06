import { Component, OnInit } from '@angular/core';
import { Delivery } from '../mock-delivery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  delivery = Delivery;
  closeResult = '';
  changed_status: any[] = [];
  form: FormGroup;
  _checkArray: any;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
  }

  ngOnInit(): void {}

  getStatus(idid: string) {
    const dIndex = this.delivery.findIndex((x) => x.id == idid);
    const cIndex = this.changed_status.findIndex((x) => x.id == idid);

    if (cIndex == -1) {
      return this.delivery[dIndex].status;
    } else {
      return this.changed_status[cIndex].status;
    }
  }

  status(stt: string, idid: string) {
    const c_Index = this.changed_status.findIndex((x) => x.id == idid);
    if (stt == 'start') {
      if (c_Index == -1) {
        this.changed_status.push({ id: idid, status: '배송중' });
      } else {
        this.changed_status.splice(c_Index, 1);
        this.changed_status.push({ id: idid, status: '배송중' });
      }
    } else if (stt == 'finish') {
      if (c_Index == -1) {
        this.changed_status.push({ id: idid, status: '배송완료' });
      } else {
        this.changed_status.splice(c_Index, 1);
        this.changed_status.push({ id: idid, status: '배송완료' });
      }
    }
  }

  onCheckboxChange(e, idid) {
    if (e.target.checked) {
      this._checkArray.push(idid);
      console.log(this._checkArray)
    } else {
      const r_Index = this._checkArray.findIndex((x) => x.order_prd_id == idid);
      this._checkArray.splice(r_Index, 1);
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this._checkArray = [];
    console.log(this._checkArray);
  }

  cancel(idid) {
    const d_Index = this.delivery.findIndex((x) => x.id == idid);
    const dlv_prd = this.delivery[d_Index].products_dt;
    this._checkArray.forEach(function (id2) {
      console.log(id2);
      const n_Index = dlv_prd.findIndex((x) => x.order_prd_id == id2);
      if (n_Index != -1) {
        dlv_prd[n_Index].status = '취소';
      } else return;
    });
    this._checkArray = [];
    console.log(this._checkArray);
  }

  return(idid) {
    const d_Index = this.delivery.findIndex((x) => x.id == idid);
    const dlv_prd = this.delivery[d_Index].products_dt;
    this._checkArray.forEach(function (id2) {
      console.log(id2);
      const n_Index = dlv_prd.findIndex((x) => x.order_prd_id == id2);
      if (n_Index != -1) {
        dlv_prd[n_Index].status = '반품/교환';
      } else return;
    });
  }
}
