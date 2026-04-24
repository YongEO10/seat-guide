const guests = [
  { name: "Yehezkiel & Cherry", table: "1", jumlah: "2" },
  { name: "Dea & Kresna", table: "1", jumlah: "2" },
  { name: "Elnatan & Desi", table: "1", jumlah: "2" },
  { name: "Friska & Aryi", table: "1", jumlah: "2" },
  { name: "Katrin & Rangga", table: "1", jumlah: "2" },

  { name: "Ronny & Keluarga", table: "2", jumlah: "3" },
  { name: "Samuel & Kristin", table: "2", jumlah: "2" },
  { name: "Kalman & Keluarga", table: "2", jumlah: "3" },
  { name: "Victor & Teena", table: "2", jumlah: "2" },

  { name: "Nur Hanifah & M. Mustofa", table: "3", jumlah: "2" },
  { name: "Lucas Surya Wibawa & Istri", table: "3", jumlah: "2" },
  { name: "Prasaja & Istri", table: "3", jumlah: "2" },
  { name: "Christin & Suami", table: "3", jumlah: "2" },
  { name: "Sanas & Keluarga", table: "3", jumlah: "2" },

  { name: "Pdt. Aritonang & Istri", table: "4", jumlah: "2" },
  { name: "Rudi Gunawan & Istri", table: "4", jumlah: "2" },
  { name: "Babe & Ci Linda", table: "4", jumlah: "2" },
  { name: "Pdt. Sonang Saragih & Istri", table: "4", jumlah: "2" },
  { name: "Jessica Aurelia", table: "4", jumlah: "1" },
  { name: "William", table: "4", jumlah: "1" },

  { name: "Fajar", table: "5", jumlah: "2" },
  { name: "Syurya Deta & Istri", table: "5", jumlah: "2" },
  { name: "Synthia Veronica & Suami", table: "5", jumlah: "2" },
  { name: "Atiek & Suami", table: "5", jumlah: "2" },
  { name: "Budi Hartono & Keluarga", table: "5", jumlah: "2" },

  { name: "Yodha & Pasangan", table: "6", jumlah: "2" },
  { name: "Ahmad Aslih Sanana", table: "6", jumlah: "2" },
  { name: "Ivan Dewa & Pasangan", table: "6", jumlah: "2" },
  { name: "Justin & Vania", table: "6", jumlah: "2" },
  { name: "Melvin", table: "6", jumlah: "1" },
  { name: "Christoforus Juanlie", table: "6", jumlah: "1" },

  { name: "Feky Henry", table: "7", jumlah: "1" },
  { name: "Laurentia", table: "7", jumlah: "1" },
  { name: "Alandika Firmansyah", table: "7", jumlah: "1" },
  { name: "Vinsky", table: "7", jumlah: "2" },
  { name: "Dina Shabrina", table: "7", jumlah: "1" },
  { name: "Bella Komara", table: "7", jumlah: "1" },
  { name: "Maria Evelyn", table: "7", jumlah: "1" },
  { name: "Hayyu Adenia", table: "7", jumlah: "1" },

  { name: "Raissa Fauzia", table: "8", jumlah: "1" },
  { name: "Henny Iswandriani", table: "8", jumlah: "1" },
  { name: "Ghina", table: "8", jumlah: "1" },
  { name: "Resti", table: "8", jumlah: "1" },
  { name: "Hana Ilhami", table: "8", jumlah: "1" },
  { name: "Anisa Fauziah", table: "8", jumlah: "1" },
  { name: "Jonathan Miracle", table: "8", jumlah: "1" },

  { name: "dr. Medika Bintang", table: "9", jumlah: "1" },
  { name: "dr. Armabar Oky", table: "9", jumlah: "1" },
  { name: "Alya Ermita", table: "9", jumlah: "1" },
  { name: "Dwi & Istri", table: "9", jumlah: "2" },
  { name: "Yurisda", table: "9", jumlah: "1" },
  { name: "Wahida Hera", table: "9", jumlah: "1" },
  { name: "Aisya Sekar", table: "9", jumlah: "1" },
  { name: "Dhea", table: "9", jumlah: "1" },
  { name: "Dhifa", table: "9", jumlah: "1" },

  { name: "Achmad Nu'man Annafis", table: "10", jumlah: "1" },
  { name: "Indah Puspitasari", table: "10", jumlah: "1" },
  { name: "Bani Rahmat Wijaya", table: "10", jumlah: "1" },
  { name: "Danny Gratia & Keluarga", table: "10", jumlah: "4" },
  { name: "Ester Novita Dwi", table: "10", jumlah: "2" },

  { name: "Giyanto & Sri Suwarni", table: "11", jumlah: "2" },
  { name: "Carolina Gita & Ezra", table: "11", jumlah: "2" },
  { name: "Claudia Gita", table: "11", jumlah: "1" },
  { name: "Keluarga Alm. Ponco Prayit", table: "11", jumlah: "3" },

  { name: "Bambang Budianto/Atik", table: "12", jumlah: "3" },
  { name: "Endang Ratnasari", table: "12", jumlah: "1" },
  { name: "Ratna Wisanti", table: "12", jumlah: "1" },
  { name: "dr. L Kusbandono/ Nana", table: "12", jumlah: "2" },
  { name: "Marwanto & Tatik Rusbiyanti", table: "12", jumlah: "3" },

  { name: "Elin Herlina & Keluarga", table: "13", jumlah: "5" },
  { name: "Sungkono Tri H. & Keluarga", table: "13", jumlah: "3" },
  { name: "Gregy & Bella", table: "13", jumlah: "2" },

  { name: "Albert & Rosa", table: "14", jumlah: "3" },
  { name: "Berry & Meisya", table: "14", jumlah: "2" },
  { name: "Jonathan & Wenny", table: "14", jumlah: "2" },
  { name: "Anna", table: "14", jumlah: "1" },
  { name: "Timothy & Phoebe", table: "14", jumlah: "2" },

  { name: "Priyo Bintoro/Enny Budiwati", table: "15", jumlah: "2" },
  { name: "Erwin", table: "15", jumlah: "1" },
  { name: "Nadia", table: "15", jumlah: "1" },
  { name: "Edi Budi Santoso & Satwika", table: "15", jumlah: "2" },
  { name: "Iwan Setiawan/Wuri Handayani", table: "15", jumlah: "4" },

  { name: "Tutik & Nono", table: "16", jumlah: "3" },
  { name: "Joko Wahyu & Keluarga", table: "16", jumlah: "2" },
  { name: "Tanti & Keluarga", table: "16", jumlah: "4" },

  { name: "Mama & Wali Papa", table: "17", jumlah: "2" },
  { name: "Jessica & Gisel", table: "17", jumlah: "2" },
  { name: "Edi Sudarsono & Keluarga", table: "17", jumlah: "2" },
  { name: "Kiki & Keluarga", table: "17", jumlah: "3" },

  { name: "Iksanto & Keluarga", table: "18", jumlah: "2" },
  { name: "Hanarto & Keluarga", table: "18", jumlah: "2" },
  { name: "Intan & Keluarga", table: "18", jumlah: "4" },
  { name: "Lian & Jhon", table: "18", jumlah: "2" },

  { name: "Widada Tejo & Keluarga", table: "19", jumlah: "3" },
  { name: "David & Keluarga", table: "19", jumlah: "4" },

  { name: "Gaby", table: "20", jumlah: "1" },
  { name: "Fala Reva", table: "20", jumlah: "2" },
  { name: "Stephanie Wijaya", table: "20", jumlah: "1" },
  { name: "Ricky Natanel", table: "20", jumlah: "1" },
  { name: "Andy Wirawan (VIP)", table: "20", jumlah: "1" }
  { name: "Grace Noel", table: "20", jumlah: "1" }
  { name: "Revina", table: "20", jumlah: "1" }
];
