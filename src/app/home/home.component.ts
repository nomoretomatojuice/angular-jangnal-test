import { Component, OnInit } from '@angular/core';
import { Delivery } from '../mock-delivery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  delivery = Delivery;
  closeResult = '';

  changed_status: any[] = [];

  getStatus(idid: string) {
    const d_Index = this.delivery.findIndex((x) => x.id == idid);
    const c_Index = this.changed_status.findIndex((x) => x.id == idid);

    if (c_Index == -1) {
      return this.delivery[d_Index].status
    } else {
      return this.changed_status[c_Index].status;;
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
  form: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.form.value.checkArray = []
    console.log(this.form.value.checkArray)
  }
  cancel(idid) {
    const d_Index = this.delivery.findIndex((x) => x.id == idid);
    const dlv_prd = this.delivery[d_Index].products_dt;
    this.form.value.checkArray.forEach( function(id2) {
      console.log(id2);
      const n_Index = dlv_prd.findIndex((x) => x.order_prd_id == id2);
      if (n_Index != -1) {
        dlv_prd[n_Index].status = '취소'
      } else return
    })
  }
}
