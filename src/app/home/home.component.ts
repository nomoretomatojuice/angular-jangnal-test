import { Component, OnInit } from '@angular/core';
import { Delivery } from '../mock-delivery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  delivery = Delivery;
  closeResult = '';
  constructor(private modalService: NgbModal) {}

  changed_status: any[] = [];

  getStatus(idid: number) {
    const d_Index = this.delivery.findIndex((x) => x.id == idid);
    const c_Index = this.changed_status.findIndex((x) => x.id == idid);

    if (c_Index == -1) {
      return this.delivery[d_Index].status
    } else {
      return this.changed_status[c_Index].status;;
    }

  }
  status(stt: string, idid: number) {
    const c_Index = this.changed_status.findIndex((x) => x.id == idid);
    if (stt == 'start') {
      if (c_Index == -1) {
        this.changed_status.push({ id: idid, status: '배송중' });
      } else {
        let trash = this.changed_status.splice(c_Index, 1);
        this.changed_status.push({ id: idid, status: '배송중' });
      }
    } else if (stt == 'finish') {
      if (c_Index == -1) {
        this.changed_status.push({ id: idid, status: '배송완료' });
      } else {
        let trash = this.changed_status.splice(c_Index, 1);
      this.changed_status.push({ id: idid, status: '배송완료' });
      }

    }
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
