import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image, Font, pdf } from '@react-pdf/renderer';
import pasonglogos from '../assets/pasonglogos.png';
import sibalomlog from '../assets/sibalomlog.png';
import poppinsItalicbold from '../assets/poppinsItalicbold.ttf';
import poppinslight from '../assets/poppinslight.ttf';
import poppinsbold from '../assets/poppinsbold.ttf';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: poppinsItalicbold, fontWeight: 'normal', fontStyle: 'italic' }, 
    { src: poppinsbold, fontWeight: 'bold', fontStyle: 'bold' }, 
    { src: poppinslight, fontWeight: 'normal'}, 
  ]
});

// Define styles for react-pdf
const styles = StyleSheet.create({
  page: {
    padding: 36,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
  text: {
    paddingBottom: 20,
    lineHeight: 1.5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  content: {
    margin: 30,
    fontSize: 12,
    textAlign: 'left',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 152,
    height: 80,
    margin: 20,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 4,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    fontSize: '14px',
    padding: '8px',
    width: '120px',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
    marginVertical: 5,
  },
  button: {
    fontSize: '14px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  italicText: {
    fontFamily: 'Poppins',
    fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 60
  },
});

const CertificationFormat = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const resident = state?.resident;

  const [request, setRequest] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [orNo, setOrNo] = useState('');
  const [punongBarangayName, setPunongBarangayName] = useState('');

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const MyDocument = () => (
    <Document>
      <Page size={[612, 792]} style={styles.page}> {/* 8.5 x 11 inches in points */}
        <View style={styles.logoContainer}>
          <Image src={pasonglogos} style={styles.logo} />
          <View style={{ width: '100%', textAlign: 'center' }}>
            <Text style={styles.centerText}>Republic of the Philippines</Text>
            <Text style={styles.centerText}>Province of Antique</Text>
            <Text style={styles.centerText}>Municipality of Sibalom</Text>
            <Text style={styles.centerText}>Barangay of Pasong</Text>
            <Text style={styles.centerText}>OFFICE OF THE PUNONG BARANGAY</Text>
          </View>
          <Image src={sibalomlog} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <Text style={{...styles.title, fontSize: 16, marginBottom: 30, width: '100%', textAlign: 'center' }}>Barangay Certification</Text>
          <Text style={{ paddingBottom: 20 }}>TO WHOM IT MAY CONCERN:</Text>
          <Text style={styles.text}>
            This is to certify that, {resident.residentname} of legal age, {resident.residentmaritalstatus}, a bona fide resident of Barangay Pasong, Sibalom, Antique, is known to be that he/she is residing at Purok {resident.purok} of this Barangay;
          </Text>
          <Text style={styles.text}>This certification is being issued upon the request of both interested party for {request}.</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 60 }}>{punongBarangayName}</Text>
              <View style={styles.line} />
              <Text style={styles.italicText}>Punong Barangay</Text>
            </View>
          </View>
          <Text style={{ paddingBottom: 10 }}>Amount Paid: {amountPaid}</Text>
          <Text style={{ paddingBottom: 10 }}>O.R. No: {orNo}</Text>
          <Text style={{ paddingBottom: 10 }}>Date Issued: {month} {day}, {year}</Text>
        </View>
      </Page>
    </Document>
  );

  const generateCertificationPdf = async () => {
    const doc = <MyDocument />;
    const asPdf = pdf([]); // Create a new PDF
    asPdf.updateContainer(doc); // Add the document to the PDF
    const blob = await asPdf.toBlob(); // Get the blob
    const url = URL.createObjectURL(blob); // Create an object URL
    const a = document.createElement('a');
    a.href = url;
    a.download = `Certification_${resident.residentname}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!resident) {
    return <div>No resident data available</div>;
  }

  return (
    <div>
      <div style={styles.formContainer}>
        <button style={styles.button} onClick={() => navigate("/documents")}>Back to Documents</button>
        <label>
          Request:
          <input 
            type="text" 
            value={request} 
            onChange={(e) => setRequest(e.target.value)} 
            style={styles.input} 
          />
        </label>
        <label>
          Amount Paid:
          <input 
            type="text" 
            value={amountPaid} 
            onChange={(e) => setAmountPaid(e.target.value)} 
            style={styles.input} 
          />
        </label>
        <label>
          O.R. No:
          <input 
            type="text" 
            value={orNo} 
            onChange={(e) => setOrNo(e.target.value)} 
            style={styles.input} 
          />
        </label>
        <label>
          Punong Barangay Name:
          <input 
            type="text" 
            value={punongBarangayName} 
            onChange={(e) => setPunongBarangayName(e.target.value)} 
            style={styles.input} 
          />
        </label>
        <button style={styles.button} onClick={generateCertificationPdf}>Generate PDF</button>
      </div>
      <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default CertificationFormat;
