// src/pdf/Indigency.js
import jsPDF from 'jspdf';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';

const generateIndigency = (data) => {
  const doc = new jsPDF('p', 'mm', [210, 297]); // A4 size

  // Add logo
  doc.addImage(logo, 'PNG', 10, 10, 50, 50);

  doc.text(`CERTIFICATE OF INDIGENCY`, 10, 70);
  doc.text(`Name: ${data.residentname}`, 10, 80);
  doc.text(`Birthday: ${data.residentbirthday}`, 10, 90);
  doc.text(`Sex: ${data.residentsex}`, 10, 100);
  doc.text(`Contact Number: ${data.residentcontactnumber}`, 10, 110);
  doc.text(`Purok: ${data.purok}`, 10, 120);

  doc.save(`resident_indigency.pdf`);
};

export default generateIndigency;