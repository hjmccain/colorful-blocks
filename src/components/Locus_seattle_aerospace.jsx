import Papa from 'papaparse';

export const results = Papa.parse(`
  1,Aircraft ferrying,1.2.2,b,4,ii
  2,Aerospace supply chain optimization,1.1.1,,,div
  3,Aerospace equipment procurement,1.1.2,b,,div
  4,Aerospace personnel recruiting,1.1.2,f,,
  5,Logistics for space launches,1.2.1,b,4,ii
  6,Design of asteroid mining exploration equipment,2.1.2,b,4,ii
  7,Design of aircraft interiors,2.1.2,b,,div
  8,Engineering for spaceflight,2.1.2,b,,div
  9,Engineering firms for aerospace,2.1.2,,,div
  10,Education for aerospace manufacturing workers,2.1.2,f,,
  11,Test and calibration for commercial aerospace,2.1.3,b,,div
  12,Testing aerospace products,2.1.3,b,,div
  13,Materials processing for commercial aerospace,2.2.2,b,1,ii
  14,Aerostructures for Commercial Aerospace - BG,2.2.2,b,2,div
  15,Aerospace coatings,2.2.2,b,2,i
  16,Carbon composite materials for commercial aerospace - BG,2.2.2,b,2,i
  17,Coatings and Insulation for Diversified Electronics - BG,2.2.2,b,2,i
  18,Industrial supplies as inputs to airplanes,2.2.2,b,2,ii
  19,Machine shops for commercial aerospace,2.2.2,b,2,ii
  20,Industrial supplies for tools used in airplane manufacturing,2.2.2,b,2,ii
  21,In-flight entertainment systems,2.2.2,b,3,iii
  22,Propulsion systems for commercial aircraft,2.2.2,b,3,iii
  23,Avionics,2.2.2,b,3,iii
  24,Propulsion systems for spaceflight,2.2.2,b,3,iii
  25,Commercial Airplanes,2.2.2,b,4,ii
  26,Equipment for test and calibration for commercial aerospace,2.2.2,b,4,ii
  27,Industrial tools for aerospace,2.2.2,b,4,ii
  28,Industrial tools for commercial aerospace MRO,2.2.2,b,4,ii
  29,Spacecraft,2.2.2,b,4,ii
  30,Parts and equipment manufacturers,2.2.2,b,,div
  31,Interiors,2.2.2,b,,div
  32,Parts manufacturing for spacecraft,2.2.2,b,,div
  33,Product design software for commercial aerospace,2.2.2,c,4,iii
  34,Programming for machine tools for commercial aerospace,2.2.2,c,4,iii
  35,"Maintenance, repair and overhaul of support equipment for commercial aerospace",2.2.3,b,4,div
  36,"Maintenance, repair and overhaul for commercial aerospace",2.2.3,b,4,ii
  37,"Maintenance, repair and overhaul of components for commercial aerospace",2.2.3,b,,div
  39,Materials distribution to commercial aerospace,3.1.2,b,1,iii
  40,Alloyed materials distribution to commercial aerospace,3.1.2,b,2,i
  41,Distribution of industrial supplies as inputs to airplanes,3.1.2,b,2,ii
  42,Distribution of industrial supplies for tools used in airplane manufacturing,3.1.2,b,2,ii
  43,Distribution of industrial tools for aerospace,3.1.2,b,4,ii
  44,Parts and equipment distribution for commercial aircraft component manufacturers,3.1.2,b,,div
  45,Parts and equipment distribution for commercial aircraft MRO firms,3.1.2,b,,div
  46,Parts and equipment distribution for general aviation,3.1.2,b,,div
  47,Aircraft leasing,3.3.2,b,4,ii
  48,Insurance For Businesses,3.3.2,d,3,ii
  49,Consulting for Aerospace,4.1.2,,,div
  50,Airlines,1.2.2,,,div
  `);
