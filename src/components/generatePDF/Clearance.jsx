// Clearance.js
import jsPDF from 'jspdf';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';


const generateClearance = (data) => {
  const doc = new jsPDF('p', 'mm', [210, 297]); // A4 size

  // Add header
  doc.setFontSize(18);
  doc.text(`BARANGAY CLEARANCE`, 10, 20);
  doc.addImage(pasonglogos, 'PNG', 10, 30, 50, 50);

  // Add resident information
  doc.setFontSize(12);
  doc.text(`Name: ${data.residentname}`, 10, 60);
  doc.text(`Birthday: ${data.residentbirthday}`, 10, 70);
  doc.text(`Sex: ${data.residentsex}`, 10, 80);
  doc.text(`Contact Number: ${data.residentcontactnumber}`, 10, 90);
  doc.text(`Purok: ${data.purok}`, 10, 100);

  // Add clearance details
  doc.text(`Clearance Details:`, 10, 120);
  doc.text(`Date: ${data.date}`, 10, 130);
  doc.text(`Purpose: ${data.purpose}`, 10, 140);

  doc.save(`resident_clearance.pdf`);
};