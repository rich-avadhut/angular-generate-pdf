import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  downloadPdf() {
    var head = [["ID", "Country", "Rank", "Capital"]];
    var body = [
      [1, "Denmark", 7.526, "Copenhagen"],
      [2, "Switzerland", 7.509, "Bern"],
      [3, "Iceland", 7.501, "Reykjavík"],
      [4, "Norway", 7.498, "Oslo"],
      [5, "Finland", 7.413, "Helsinki"]
    ];

    const doc = new jsPDF();
    doc.text(20, 20, 'This is the default font.');

    doc.setFont("courier");
    doc.setFontType("normal");
    doc.text(20, 30, 'This is courier normal.');

    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(20, 40, 'This is times italic.');

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(20, 50, 'This is helvetica bold.');

    doc.setFont("courier");
    doc.setFontType("bolditalic");
    doc.text(20, 60, 'This is courier bolditalic.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    doc.save("sample.pdf");
  }

}