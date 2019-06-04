# angular-generate-pdf
Angular generate / write PDF

Use the following steps.

1. Install jsPDF using the following command
    - _**npm install jspdf**_

2. Install type definition package using the following command
    - _**npm install @types/jspdf**_

3. import jspdf
    - _**import * as jsPDF from 'jspdf';**_

4. Add the code following code/function in "app.component.ts" file.

    `downloadPdf() {`
    `const doc = new jsPDF();`
    `doc.text(20, 20, 'This is the default font.');`

    `doc.setFont("courier");`
    `doc.setFontType("normal");`
    `doc.text(20, 30, 'This is courier normal.');`

    `doc.setFont("times");`
    `doc.setFontType("italic");`
    `doc.text(20, 40, 'This is times italic.');`

    `doc.setFont("helvetica");`
    `doc.setFontType("bold");`
    `doc.text(20, 50, 'This is helvetica bold.');`

    `doc.setFont("courier");`
    `doc.setFontType("bolditalic");`
    `doc.text(20, 60, 'This is courier bolditalic.');`
    `doc.addPage();`
    `doc.text(20, 20, 'Do you like that?');`
    `doc.save("sample.pdf");`
  `}`
  
5. Add the following code into "app.component.html" file.

    `<button type="button" class="btn btn-primary" (click)="downloadPdf()">Download PDF</button>`

6. Run
    - _**ng serve -o**_


Here you go,

**Best Luck**
