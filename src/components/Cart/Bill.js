import React, { Component, PropTypes } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import Cart from '../Cart/Cart';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default class Bill extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input,{ width: 1200})
      .then((canvas) => {
        console.log(canvas)
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        // pdf.save("download.pdf");
      })
      ;
  }

  render() {
    return (<>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint">
        <Cart />
      </div>
    </>);
  }
}