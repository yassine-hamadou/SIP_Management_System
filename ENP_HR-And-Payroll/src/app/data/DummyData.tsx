// Employee Setup DATA

export const DEPARTMENTS=[
    {
      id:1,
     code: "001",
     report: "HEAD OFFICE",
     divisionID:1,
     name: "FINANCE",
     status: "ACTIVE",
     division:{
        id:1,
        code:'001',
        name: 'HEAD OFFICE',
        status:'ACTIVE'
      },
    },
    {
      id:2,
     code: "002",
     report: "HEAD OFFICE",
     name: "HR",
     divisionID:1,
     division:{
        id:1,
        code:'001',
        name: 'HEAD OFFICE',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    {
     id:3,
     code: "003",
     divisionID:1,
     report: "HEAD OFFICE",
     name: "IT",
     status: "ACTIVE",
     division:{
        id:1,
        code:'001',
        name: 'HEAD OFFICE',
        status:'ACTIVE'
      },
    },
    {
     id:4,
     code: "004",
     divisionID:1,
     report: "HEAD OFFICE",
     name: "CORPORATE",
     division:{
        id:1,
        code:'001',
        name: 'HEAD OFFICE',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    {
     id:5,
     code: "005",
     divisionID:2,
     report: "OPERATIONS",
     name: "MINING",
     division:{
        id:2,
        code:'002',
        name: 'OPERATIONS',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    {
     id:6,
     code: "006",
     divisionID:2,
     report: "OPERATIONS",
     name: "ENGINEERING",
     division:{
        id:2,
        code:'002',
        name: 'OPERATIONS',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    {
     id:7,
     code: "007",
     divisionID:2,
     report: "OPERATIONS",
     name: "TRANSPORT",
     division:{
        id:2,
        code:'002',
        name: 'OPERATIONS',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    {
     id:8,
     code: "008",
     divisionID:2,
     report: "OPERATIONS",
     name: "SECURITY",
     division:{
        id:2,
        code:'002',
        name: 'OPERATIONS',
        status:'ACTIVE'
      },
     status: "ACTIVE"
    },
    
]

export const UNITS=[
    {
     id:1,
     departmentID:1,
     code: "001",
     name: "TREASURY",
     status: "ACTIVE"
    },
    {
     id:2,
     code: "002",
     departmentID:1,
     name: "PAYABLES",
     status: "ACTIVE"
    },
    {
      id:3,
     code: "003",
     departmentID:1,
     name: "RECEIVALBLES",
     status: "ACTIVE"
    },
    {
      id:4,
     code: "004",
     departmentID:1,
     name: "PAY OFFICE",
     status: "ACTIVE"
    },
    {
      id:5,
     code: "005",
     departmentID:2,
     name: "PERSONNEL",
     status: "ACTIVE"
    },
    {
      id:6,
     code: "006",
     departmentID:2,
     name: "TRAINING",
     status: "ACTIVE"
    },
    {
      id:7,
     code: "007",
     departmentID:2,
     name: "WELFARE",
     status: "ACTIVE"
    },
    
    {
      id:8,
     code: "008",
     departmentID:3,
     name: "DATABASE",
     status: "ACTIVE"
    },
    
    {
      id:9,
     code: "009",
     departmentID:3,
     name: "INFRASTRUCTURE",
     status: "ACTIVE"
    },
    {
      id:10,
     code: "010",
     departmentID:4,
     name: "PR",
     status: "ACTIVE"
    },
    
    {
      id:11,
     code: "011",
     departmentID:4,
     name: "LEGAL",
     status: "ACTIVE"
    },
    
    {
      id:12,
     code: "012",
     departmentID:5,
     name: "EXCAVATION",
     status: "ACTIVE"
    },
    
    {
      id:13,
     code: "013",
     departmentID:5,
     name: "WASTE MANAGEMENT",
     status: "ACTIVE"
    },
    
    {
      id:14,
     code: "014",
     departmentID:5,
     name: "HEALTH AND SAFETY",
     status: "ACTIVE"
    },
    
    {
      id:15,
     code: "015",
     departmentID:6,
     name: "WORKSHOP",
     status: "ACTIVE"
    },
    {
      id:16,
     code: "016",
     departmentID:6,
     name: "FUEL DEPOT",
     status: "ACTIVE"
    },
    {
      id:17,
     code: "017",
     departmentID:6,
     name: "SPARE PARTS",
     status: "ACTIVE"
    },
    {
      id:18,
     code: "018",
     departmentID:7,
     name: "EXCAVATORS",
     status: "ACTIVE"
    },
    {
      id:19,
     code: "019",
     departmentID:7,
     name: "TRUCKS",
     status: "ACTIVE"
    },
    {
      id:20,
     code: "020",
     departmentID:8,
     name: "MINE SITE",
     status: "ACTIVE"
    },
    
]

export const DIVISION = [
    {
      id:1,
      code:'001',
      name: 'HEAD OFFICE',
      status:'ACTIVE'
    },
    {
      id:2,
      code:'002',
      name: 'OPERATIONS',
      status:'ACTIVE'
    }
]
export const period = [
  
    {
     code: "JAN23",
     name: "JANUARY 2023",
     start_date: "1\/1\/23",
     end_date: "31\/01\/23",
     status: "ACTIVE"
    },
    {
     code: "FEB23",
     name: "FEBRUARY 2023",
     start_date: "2\/1\/23",
     end_date: "28\/02\/23",
     status: "ACTIVE"
    },
    {
     code: "MAR23",
     name: "MARCH 2023",
     start_date: "3\/1\/23",
     end_date: "31\/03\/23",
     status: "ACTIVE"
    },
    {
     code: "APR23",
     name: "APRIL 2023",
     start_date: "4\/1\/23",
     end_date: "30\/04\/23",
     status: "ACTIVE"
    },
    {
     code: "MAY23",
     name: "MAY 2023",
     start_date: "5\/1\/23",
     end_date: "31\/05\/23",
     status: "ACTIVE"
    },
    {
     code: "JUN23",
     name: "JUNE 2023",
     start_date: "6\/1\/23",
     end_date: "30\/06\/23",
     status: "ACTIVE"
    },
    {
     code: "JUL23",
     name: "JULY 2023",
     start_date: "7\/1\/23",
     end_date: "31\/7\/23",
     status: "ACTIVE"
    },
    {
     code: "AUG23",
     name: "AUGUST 2023",
     start_date: "8\/1\/23",
     end_date: "31\/8\/23",
     status: "ACTIVE"
    },
    {
     code: "SEP23",
     name: "SEPTEMBER 2023",
     start_date: "9\/1\/23",
     end_date: "30\/9\/23",
     status: "ACTIVE"
    },
    {
     code: "OCT23",
     name: "OCTOBER 2023",
     start_date: "10\/1\/23",
     end_date: "31\/10\/23",
     status: "ACTIVE"
    },
    {
     code: "NOV23",
     name: "NOVEMBER 2023",
     start_date: "11\/1\/23",
     end_date: "30\/11\/23",
     status: "ACTIVE"
    },
    {
     code: "DEC23",
     name: "DECEMBER 2023",
     start_date: "12\/1\/23",
     end_date: "31\/12\/23",
     status: "ACTIVE"
    },
  
    
]

export const JOBTITLE=[
  {
   code: "001",
   name: "ASTACT",
   desc: "ASSISTANT ACCOUNTANT",
   status: "ACTIVE"
  },
  {
   code: "002",
   name: "ACCOFF",
   desc: "ACCOUNTS OFFICER",
   status: "ACTIVE"
  },
  {
   code: "003",
   name: "HRMAN",
   desc: "HUMAN RESOURCE MANAGER",
   status: "ACTIVE"
  },
  {
   code: "004",
   name: "SALREP1",
   desc: "SALES PERSONNEL 1",
   status: "ACTIVE"
  },
  {
   code: "005",
   name: "FACMAN",
   desc: "FACTORY MANAGER",
   status: "ACTIVE"
  }
 ]

 export const CATEGORY=[
  {
   code: "001",
   name: "PERMANENT",
   status: "ACTIVE"
  },
  {
   code: "002",
   name: "SERVICE",
   status: "ACTIVE"
  },
  {
   code: "003",
   name: "CONTRACT",
   status: "ACTIVE"
  },
  {
   code: "004",
   name: "SENIOR STAFF",
   status: "ACTIVE"
  },
  {
   code: "005",
   name: "JUNIOR STAFF",
   status: "ACTIVE"
  }
 ]

// HR Setup DATA

export const APPRAISAL=[
    {
        code:'001',
        name:'ANNUAL',
    },
    {
        code:'002',
        name:'PROMOTION',
    },
]

export const NOTES=[
    {
        code:'001',
        name:'LATENESS',
    },
    {
        code:'002',
        name:'INSUBORDINATION',
    },
    {
        code:'003',
        name:'LOW PRODUCTIVITY',
    },
    {
        code:'004',
        name:'ABSENTEEISM',
    },
    {
        code:'004',
        name:'WORKING CONDITIONS',
    },
]

export const RECRUITMENTS=[
    {
        code:'001',
        name:'ENTRY LEVEL',
    },
    {
        code:'002',
        name:'MANAGEMENT',
    },
]

export const ASSETS=[
    {
        code:'001',
        name:'LAPTOP',
    },
    {
        code:'002',
        name:'MOBILE PHONE',
    },
    {
        code:'003',
        name:'CAR',
    },
    {
        code:'004',
        name:'PROTECTIVE GEAR',
    },
]

export const LEAVE=[
    {
        code:'001',
        name:'ANNUAL LEAVE',
    },
    {
        code:'002',
        name:'SICK LEAVE',
    },
    {
        code:'003',
        name:'MATERNITY LEAVE',
    },
    {
        code:'004',
        name:'STUDY LEAVE',
    },
]

export const MEDICALS=[
    {
        code:'001',
        name:'CHECK UP',
    },
    {
        code:'002',
        name:'OUT PATIENT',
    },
    {
        code:'003',
        name:'IN PATIENT',
    },
    {
        code:'004',
        name:'EVACUATION',
    },
]

export const TRAININGS=[
    {
        code:'001',
        name:'IN-HOUSE',
    },
    {
        code:'002',
        name:'PROFESSIONAL DEVELOPMENT',
    },
    {
        code:'003',
        name:'EXTERNAL',
    },
    {
        code:'004',
        name:'CERTIFICATION',
    },
]


export const employeedata=[
  {
   "code": 1,
   "region": "NORTHERN",
   "empcode": "2001",
   "ssfno": "44112290",
   "firstname": "ADONIS",
   "lastname": "ASANTE DANSO",
   "sex": "MALE",
   "paygroup": "CASUAL",
   "depart": "HEADOFFICE",
   "grade": "ASSISTANT ACCOUNTANT",
   "notch": "NOTCH 1",
   "accnum": 221342,
   "annsal": '24,000',
   dob:"27-07-1999",
   phone:"0249560426",
   score:0,
   unit:"TREASURY",
   jobt:"ASSISTANT ACCOUNTANT",
   "bsal": '2,000',
   "status": "Active"
  },
  {
   "code": 2,
   "region": "ASHANTI",
   "empcode": "2002",
   "ssfno": "44112291",
   "firstname": "BOHOUO",
   "lastname": "CELESTIN",
   "sex": "FEMALE",
   "paygroup": "GENERAL",
   "depart": "PRODUCTION",
   dob:"04-07-1989",
    phone:"0249560353",
    score:0,
    unit:"TREASURY",
    jobt:"HUMAN RESOURCE MANAGER",
   "grade": "ACCOUNT OFFICER",
   "notch": "NOTCH 2",
   "accnum": 221343,
   "annsal": '36,000',
   "bsal": '3,000',
   "status": "Active"
  },
  {
   "code": 3,
   "region": "WESTERN",
   "empcode": "2003",
   "ssfno": "44112292",
   "firstname": "ADO",
   "lastname": "KOMI NOEL",
   "sex": "MALE",
   "paygroup": "MANAGEMENT",
   "depart": "ADMINISTRATION",
   "grade": "HUMAN RESOURCE MANAGER",
   "notch": "NOTCH 3",
   "accnum": 221344,
   "annsal": '48,000',
   "bsal": '4,000',
    dob:"22-07-1979",
    phone:"0245360467",
    score:0,
    unit:"TREASURY",
    jobt:"ASSISTANT ACCOUNTANT",
   "status": "Active"
  },
  {
   "code": 4,
   "region": "VOLTA",
   "empcode": "2004",
   "ssfno": "44112293",
   "firstname": "JESSICA",
   "lastname": "MARTEY",
   "sex": "FEMALE",
   "paygroup": "CASUAL",
   "depart": "RESEARCH AND DEVELOPMENT",
   "grade": "SALES REP ENTRY",
   "notch": "NOTCH 4",
   "accnum": 221345,
    dob:"11-07-1984",
    phone:"0249560423",
    score:0,
    unit:"PR",
    jobt:"ASSISTANT ACCOUNTANT",
   "annsal": '60,000',
   "bsal": '5,000',
   "status": "Active"
  },
  {
   "code": 5,
   "region": "NORTHERN",
   "empcode": "2005",
   "ssfno": "44112294",
   "firstname": "EMMA",
   "lastname": "COFFIE",
   "sex": "MALE",
    dob:"02-04-1989",
    phone:"0249560567",
    score:0,
    unit:"LEGAL",
    jobt:"SALES PERSONNEL 1",
   "paygroup": "GENERAL",
   "depart": "HEADOFFICE",
   "grade": "FACTORY MANAGER",
   "notch": "NOTCH 1",
   "accnum": 221346,
   "annsal": '72,000',
   "bsal": '6,000',
   "status": "Active"
  },
  {
   "code": 6,
   "region": "ASHANTI",
   "empcode": "2006",
   "ssfno": "44112295",
   "firstname": "RITA",
   "lastname": "ANNAN",
   "sex": "FEMALE",
    dob:"14-05-1989",
    phone:"0249560467",
    score:0,
    jobt:"HUMAN RESOURCE MANAGER",
    unit:"PAY OFFICE",
   "paygroup": "MANAGEMENT",
   "depart": "PRODUCTION",
   "grade": "ASSISTANT ACCONTANT",
   "notch": "NOTCH 2",
   "accnum": 221347,
   "annsal": '84,000',
   "bsal": '7,000',
   "status": "Active"
  },
  {
   "code": 7,
   "region": "WESTERN",
   "empcode": "2007",
   "ssfno": "44112296",
   "firstname": "BEN",
   "lastname": "BOSS",
   "sex": "MALE",
   "paygroup": "CASUAL",
   "depart": "ADMINISTRATION",
   "grade": "ACCOUNT OFFICER",
   "notch": "NOTCH 3",
    dob:"13-05-1999",
    phone:"0243460580",
    score:0,
    jobt:"ACCOUNTS OFFICER",
    unit:"RECEIVALBLES",
   "accnum": 221348,
   "annsal": '96,000',
   "bsal": '8,000',
   "status": "Active"
  },
  {
   "code": 8,
   "region": "VOLTA",
   "empcode": "2008",
   "ssfno": "44112297",
   "firstname": "REGINA",
   "lastname": "QUAYE",
   "sex": "FEMALE",
   "paygroup": "GENERAL",
   "depart": "RESEARCH AND DEVELOPMENT",
   "grade": "HUMAN RESOURCE MANAGER",
   "notch": "NOTCH 1",
   "accnum": 221349,
    dob:"13-05-1996",
    phone:"024956345",
    score:0,
    jobt:"ASSISTANT ACCOUNTANT",
    unit:"PAYABLES",
    
   "annsal": '108,000',
   "bsal": '9,000',
   "status": "Active"
  },
  {
   "code": 9,
   "region": "NORTHERN",
   "empcode": "2009",
   "ssfno": "44112298",
   "firstname": "RICHMOND",
   "lastname": "BEN",
   "sex": "MALE",
   dob:"13-09-1996",
   phone:"0249560434",
   score:0,
   jobt:"ACCOUNTS OFFICER",
   unit:"TRAINING",
   "paygroup": "MANAGEMENT",
   "depart": "HEADOFFICE",
   "grade": "SALES REP ENTRY",
   "notch": "NOTCH 2",
   "accnum": 221350,
   "annsal": '120,000',
   "bsal": '10,000',
   "status": "Active"
  },
  {
   "code": 10,
   "region": "ASHANTI",
   "empcode": "20010",
   "ssfno": "44112299",
   "firstname": "RIA",
   "lastname": "MON",
   "sex": "FEMALE",
   dob:"13-05-1996",
   phone:"0249560678",
   score:0,
   jobt:"HUMAN RESOURCE MANAGER",
   unit:"	TREASURY",
   "paygroup": "CASUAL",
   "depart": "PRODUCTION",
   "grade": "FACTORY MANAGER",
   "notch": "NOTCH 3",
   "accnum": 221351,
   "annsal": '132,000',
   "bsal": '11,000',
   "status": "Active"
  },
  {
   "code": 11,
   "region": "WESTERN",
   "empcode": "20011",
   "ssfno": "44112300",
   "firstname": "BRIGHT",
   "lastname": "ABAN",
   "sex": "MALE",
   dob:"13-10-1996",
   phone:"0249560409",
   score:0,
   unit:"	PAYABLES",
   jobt:"SALES PERSONNEL 1",
   "paygroup": "GENERAL",
   "depart": "ADMINISTRATION",
   "grade": "ASSISTANT ACCONTANT",
   "notch": "NOTCH 1",
   "accnum": 221352,
   "annsal": '144,000',
   "bsal": '12,000',
   "status": "Active"
  },
  {
   "code": 12,
   "region": "VOLTA",
   "empcode": "20012",
   "ssfno": "44112301",
   "firstname": "ROY",
   "lastname": "SALLY",
   "sex": "FEMALE",
   dob:"13-05-1997",
   phone:"0249567867",
   score:0,
   jobt:"ASSISTANT ACCOUNTANT",
   unit:"	PAYABLES",
   "paygroup": "MANAGEMENT",
   "depart": "RESEARCH AND DEVELOPMENT",
   "grade": "ACCOUNT OFFICER",
   "notch": "NOTCH 2",
   "accnum": 221353,
   "annsal": '156,000',
   "bsal": '13,000',
   "status": "Active"
  },
  {
   "code": 13,
   "region": "NORTHERN",
   "empcode": "20013",
   "ssfno": "44112302",
   "firstname": "ENYO",
   "lastname": "NAMA",
   "sex": "MALE",
   dob:"12-08-1996",
   phone:"0249765467",
   score:0,
   jobt:"ACCOUNTS OFFICER",
   unit:"	RECEIVALBLES",
   "paygroup": "CASUAL",
   "depart": "HEADOFFICE",
   "grade": "HUMAN RESOURCE MANAGER",
   "notch": "NOTCH 3",
   "accnum": 221354,
   "annsal": '168,000',
   "bsal": '14,000',
   "status": "Active"
  },
  {
   "code": 14,
   "region": "ASHANTI",
   "empcode": "20014",
   "ssfno": "44112303",
   "firstname": "BRIDGET",
   "lastname": "BOETRY",
   "sex": "FEMALE",
   dob:"19-09-1996",
   phone:"0249564567",
   score:0,
   jobt:"HUMAN RESOURCE MANAGER",
   unit:"DATABASE",
   "paygroup": "GENERAL",
   "depart": "PRODUCTION",
   "grade": "SALES REP ENTRY",
   "notch": "NOTCH 4",
   "accnum": 221355,
   "annsal": '180,000',
   "bsal": '15,000',
   "status": "Active"
  },
  {
   "code": 15,
   "region": "WESTERN",
   "empcode": "20015",
   "ssfno": "44112304",
   "firstname": "DEEN",
   "lastname": "GINA",
   "sex": "MALE",
   dob:"13-05-1988",
   phone:"0249560482",
   score:0,
   unit:"WELFARE",
   jobt:"ASSISTANT ACCOUNTANT",
   "paygroup": "MANAGEMENT",
   "depart": "ADMINISTRATION",
   "grade": "FACTORY MANAGER",
   "notch": "NOTCH 5",
   "accnum": 221356,
   "annsal": 192000,
   "bsal": 16000,
   "status": "Active"
  },
  {
   "code": 16,
   "region": "VOLTA",
   "empcode": "20016",
   "ssfno": "44112305",
   "firstname": "FAFA",
   "lastname": "IMMAA",
   "sex": "FEMALE",
   dob:"13-05-1996",
   phone:"0256560467",
   score:0,
   unit:"WELFARE",
   jobt:"ACCOUNTS OFFICER",
   "paygroup": "CASUAL",
   "depart": "RESEARCH AND DEVELOPMENT",
   "grade": "ASSISTANT ACCONTANT",
   "notch": "NOTCH 1",
   "accnum": 221357,
   "annsal": '204,000',
   "bsal": '17,000',
   "status": "Active"
  },
  {
   "code": 17,
   "region": "NORTHERN",
   "empcode": "20017",
   "ssfno": "44112306",
   "firstname": "HEELU",
   "lastname": "BAAR",
   "sex": "MALE",
   dob:"13-05-1989",
   phone:"0249560432",
   score:0,
   unit:"DATABASE",
   jobt:"SALES PERSONNEL 1",
   "paygroup": "CASUAL",
   "depart": "HEADOFFICE",
   "grade": "ACCOUNT OFFICER",
   "notch": "NOTCH 1",
   "accnum": 221358,
   "annsal": '216,000',
   "bsal": '18,000',
   "status": "Active"
  },
  {
   "code": 18,
   "region": "ASHANTI",
   "empcode": "20018",
   "ssfno": "44112307",
   "firstname": "KEKEK",
   "lastname": "LOMO",
   "sex": "FEMALE",
   dob:"13-05-1999",
   phone:"0249560423",
   score:0,
   unit:"DATABASE",
   jobt:"ACCOUNTS OFFICER",
   "paygroup": "GENERAL",
   "depart": "PRODUCTION",
   "grade": "HUMAN RESOURCE MANAGER",
   "notch": "NOTCH 2",
   "accnum": 221359,
   "annsal": '228,000',
   "bsal": '19,000',
   "status": "Active"
  },
  {
   "code": 19,
   "region": "WESTERN",
   "empcode": "20019",
   "ssfno": "44112308",
   "firstname": "FIE",
   "lastname": "AIU",
   "sex": "MALE",
   dob:"13-05-1969",
   phone:"0249578482",
   score:0,
   jobt:"ACCOUNTS OFFICER",
   unit:"INFRASTRUCTURE",
   "paygroup": "MANAGEMENT",
   "depart": "ADMINISTRATION",
   "grade": "SALES REP ENTRY",
   "notch": "NOTCH 3",
   "accnum": 221360,
   "annsal": '240,000',
   "bsal": '20,000',
   "status": "Active"
  },
  {
   "code": 20,
   "region": "VOLTA",
   "empcode": "20020",
   "ssfno": "44112309",
   "firstname": "VIDA",
   "lastname": "LAMPTEY",
   "sex": "FEMALE",
   dob:"13-03-1988",
   phone:"0249560467",
   score:0,
   unit:"PERSONNEL",
   jobt:"HUMAN RESOURCE MANAGER",
   "paygroup": "CASUAL",
   "depart": "RESEARCH AND DEVELOPMENT",
   "grade": "FACTORY MANAGER",
   "notch": "NOTCH 4",
   "accnum": 221361,
   "annsal": '252,000',
   "bsal": '21,000',
   "status": "Active"
  },
  // {
  //  "code": 21,
  //  "region": "NORTHERN",
  //  "empcode": "20021",
  //  "ssfno": "44112310",
  //  "firstname": "VERONICA",
  //  "lastname": "APPIAH",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221362,
  //  "annsal": 264000,
  //  "bsal": 22000,
  //  "status": "Active"
  // },
  // {
  //  "code": 22,
  //  "region": "ASHANTI",
  //  "empcode": "20022",
  //  "ssfno": "44112311",
  //  "firstname": "SOLOMON",
  //  "lastname": "QUARCOO",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221363,
  //  "annsal": 276000,
  //  "bsal": 23000,
  //  "status": "Active"
  // },
  // {
  //  "code": 23,
  //  "region": "WESTERN",
  //  "empcode": "20023",
  //  "ssfno": "44112312",
  //  "firstname": "SETH",
  //  "lastname": "MENSAH",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221364,
  //  "annsal": 288000,
  //  "bsal": 24000,
  //  "status": "Active"
  // },
  // {
  //  "code": 24,
  //  "region": "VOLTA",
  //  "empcode": "20024",
  //  "ssfno": "44112313",
  //  "firstname": "SARAH",
  //  "lastname": "ALABI",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221365,
  //  "annsal": 300000,
  //  "bsal": 25000,
  //  "status": "Active"
  // },
  // {
  //  "code": 25,
  //  "region": "NORTHERN",
  //  "empcode": "20025",
  //  "ssfno": "44112314",
  //  "firstname": "SANDRA",
  //  "lastname": "FRIMPONG",
  //  "sex": "FeMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221366,
  //  "annsal": 312000,
  //  "bsal": 26000,
  //  "status": "Active"
  // },
  // {
  //  "code": 26,
  //  "region": "ASHANTI",
  //  "empcode": "20026",
  //  "ssfno": "44112315",
  //  "firstname": "ROKIA",
  //  "lastname": "KOITA",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221367,
  //  "annsal": 324000,
  //  "bsal": 27000,
  //  "status": "Active"
  // },
  // {
  //  "code": 27,
  //  "region": "WESTERN",
  //  "empcode": "20027",
  //  "ssfno": "44112316",
  //  "firstname": "PRINCE",
  //  "lastname": "BUENORTEY",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221368,
  //  "annsal": 336000,
  //  "bsal": 28000,
  //  "status": "Active"
  // },
  // {
  //  "code": 28,
  //  "region": "VOLTA",
  //  "empcode": "20028",
  //  "ssfno": "44112317",
  //  "firstname": "PATRICK",
  //  "lastname": "OFFEI",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221369,
  //  "annsal": 348000,
  //  "bsal": 29000,
  //  "status": "Active"
  // },
  // {
  //  "code": 29,
  //  "region": "NORTHERN",
  //  "empcode": "20029",
  //  "ssfno": "44112318",
  //  "firstname": "OWUSU",
  //  "lastname": "PETER",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221370,
  //  "annsal": 360000,
  //  "bsal": 30000,
  //  "status": "Active"
  // },
  // {
  //  "code": 30,
  //  "region": "ASHANTI",
  //  "empcode": "20030",
  //  "ssfno": "44112319",
  //  "firstname": "NICHOLAS",
  //  "lastname": "GASSA",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221371,
  //  "annsal": 372000,
  //  "bsal": 31000,
  //  "status": "Active"
  // },
  // {
  //  "code": 31,
  //  "region": "WESTERN",
  //  "empcode": "20031",
  //  "ssfno": "44112320",
  //  "firstname": "MUSAH",
  //  "lastname": "SALIFU",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 5",
  //  "accnum": 221372,
  //  "annsal": 384000,
  //  "bsal": 32000,
  //  "status": "Active"
  // },
  // {
  //  "code": 32,
  //  "region": "VOLTA",
  //  "empcode": "20032",
  //  "ssfno": "44112321",
  //  "firstname": "MARY",
  //  "lastname": " SHAN",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221373,
  //  "annsal": 396000,
  //  "bsal": 33000,
  //  "status": "Active"
  // },
  // {
  //  "code": 33,
  //  "region": "NORTHERN",
  //  "empcode": "20033",
  //  "ssfno": "44112322",
  //  "firstname": "MARIAN",
  //  "lastname": "BENTUM",
  //  "sex": "FeMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221374,
  //  "annsal": 408000,
  //  "bsal": 34000,
  //  "status": "Active"
  // },
  // {
  //  "code": 34,
  //  "region": "ASHANTI",
  //  "empcode": "20034",
  //  "ssfno": "44112323",
  //  "firstname": "KWABENA",
  //  "lastname": "AGYEMAN",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221375,
  //  "annsal": 420000,
  //  "bsal": 35000,
  //  "status": "Active"
  // },
  // {
  //  "code": 35,
  //  "region": "WESTERN",
  //  "empcode": "20035",
  //  "ssfno": "44112324",
  //  "firstname": "JOSEPH",
  //  "lastname": "OKPOTI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221376,
  //  "annsal": 432000,
  //  "bsal": 36000,
  //  "status": "Active"
  // },
  // {
  //  "code": 36,
  //  "region": "VOLTA",
  //  "empcode": "20036",
  //  "ssfno": "44112325",
  //  "firstname": "JOSEPH",
  //  "lastname": "LAMPTEY",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 4",
  //  "accnum": 221377,
  //  "annsal": 444000,
  //  "bsal": 37000,
  //  "status": "Active"
  // },
  // {
  //  "code": 37,
  //  "region": "NORTHERN",
  //  "empcode": "20037",
  //  "ssfno": "44112326",
  //  "firstname": "JOEL",
  //  "lastname": "KODJO",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221378,
  //  "annsal": 456000,
  //  "bsal": 38000,
  //  "status": "Active"
  // },
  // {
  //  "code": 38,
  //  "region": "ASHANTI",
  //  "empcode": "20038",
  //  "ssfno": "44112327",
  //  "firstname": "JILDAS",
  //  "lastname": "QUARTEY",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221379,
  //  "annsal": 468000,
  //  "bsal": 39000,
  //  "status": "Active"
  // },
  // {
  //  "code": 39,
  //  "region": "WESTERN",
  //  "empcode": "20039",
  //  "ssfno": "44112328",
  //  "firstname": "JEAN",
  //  "lastname": "ABIE",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221380,
  //  "annsal": 480000,
  //  "bsal": 40000,
  //  "status": "Active"
  // },
  // {
  //  "code": 40,
  //  "region": "VOLTA",
  //  "empcode": "20040",
  //  "ssfno": "44112329",
  //  "firstname": "JAMES",
  //  "lastname": "AGGREY",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221381,
  //  "annsal": 492000,
  //  "bsal": 41000,
  //  "status": "Active"
  // },
  // {
  //  "code": 41,
  //  "region": "NORTHERN",
  //  "empcode": "20041",
  //  "ssfno": "44112330",
  //  "firstname": "ISMAEL",
  //  "lastname": "DODOO",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221382,
  //  "annsal": 504000,
  //  "bsal": 42000,
  //  "status": "Active"
  // },
  // {
  //  "code": 42,
  //  "region": "ASHANTI",
  //  "empcode": "20042",
  //  "ssfno": "44112331",
  //  "firstname": "ISAAC",
  //  "lastname": "ADDO",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221383,
  //  "annsal": 516000,
  //  "bsal": 43000,
  //  "status": "Active"
  // },
  // {
  //  "code": 43,
  //  "region": "WESTERN",
  //  "empcode": "20043",
  //  "ssfno": "44112332",
  //  "firstname": "IGNACE",
  //  "lastname": "GALLEY KOMIVI",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221384,
  //  "annsal": 528000,
  //  "bsal": 44000,
  //  "status": "Active"
  // },
  // {
  //  "code": 44,
  //  "region": "VOLTA",
  //  "empcode": "20044",
  //  "ssfno": "44112333",
  //  "firstname": "HIPPOLYTE",
  //  "lastname": "DAH",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221385,
  //  "annsal": 540000,
  //  "bsal": 45000,
  //  "status": "Active"
  // },
  // {
  //  "code": 45,
  //  "region": "NORTHERN",
  //  "empcode": "20045",
  //  "ssfno": "44112334",
  //  "firstname": "GIFTY",
  //  "lastname": " AYEW",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221386,
  //  "annsal": 552000,
  //  "bsal": 46000,
  //  "status": "Active"
  // },
  // {
  //  "code": 46,
  //  "region": "ASHANTI",
  //  "empcode": "20046",
  //  "ssfno": "44112335",
  //  "firstname": "FABRICE",
  //  "lastname": " N'ZONOU",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 4",
  //  "accnum": 221387,
  //  "annsal": 564000,
  //  "bsal": 47000,
  //  "status": "Active"
  // },
  // {
  //  "code": 47,
  //  "region": "WESTERN",
  //  "empcode": "20047",
  //  "ssfno": "44112336",
  //  "firstname": "ERNEST",
  //  "lastname": "AGBLEVOR",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 5",
  //  "accnum": 221388,
  //  "annsal": 576000,
  //  "bsal": 48000,
  //  "status": "Active"
  // },
  // {
  //  "code": 48,
  //  "region": "VOLTA",
  //  "empcode": "20048",
  //  "ssfno": "44112337",
  //  "firstname": "ELIJAH",
  //  "lastname": "OWUSU",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221389,
  //  "annsal": 588000,
  //  "bsal": 49000,
  //  "status": "Active"
  // },
  // {
  //  "code": 49,
  //  "region": "NORTHERN",
  //  "empcode": "20049",
  //  "ssfno": "44112338",
  //  "firstname": "DAVID",
  //  "lastname": "ADDO",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221390,
  //  "annsal": 600000,
  //  "bsal": 50000,
  //  "status": "Active"
  // },
  // {
  //  "code": 50,
  //  "region": "ASHANTI",
  //  "empcode": "20050",
  //  "ssfno": "44112339",
  //  "firstname": "DABIE",
  //  "lastname": "BOALI",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221391,
  //  "annsal": 612000,
  //  "bsal": 51000,
  //  "status": "Active"
  // },
  // {
  //  "code": 51,
  //  "region": "WESTERN",
  //  "empcode": "20051",
  //  "ssfno": "44112340",
  //  "firstname": "COMFORT",
  //  "lastname": "OBBIH",
  //  "sex": "FeMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221392,
  //  "annsal": 624000,
  //  "bsal": 52000,
  //  "status": "Active"
  // },
  // {
  //  "code": 52,
  //  "region": "VOLTA",
  //  "empcode": "20052",
  //  "ssfno": "44112341",
  //  "firstname": "COMFORT",
  //  "lastname": "ADORKU",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221393,
  //  "annsal": 636000,
  //  "bsal": 53000,
  //  "status": "Active"
  // },
  // {
  //  "code": 53,
  //  "region": "NORTHERN",
  //  "empcode": "20053",
  //  "ssfno": "44112342",
  //  "firstname": "CHRISTIAN",
  //  "lastname": "ACORLATSEY",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221394,
  //  "annsal": 648000,
  //  "bsal": 54000,
  //  "status": "Active"
  // },
  // {
  //  "code": 54,
  //  "region": "ASHANTI",
  //  "empcode": "20054",
  //  "ssfno": "44112343",
  //  "firstname": "CAROLINE",
  //  "lastname": "REINDOLPH",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221395,
  //  "annsal": 660000,
  //  "bsal": 55000,
  //  "status": "Active"
  // },
  // {
  //  "code": 55,
  //  "region": "WESTERN",
  //  "empcode": "20055",
  //  "ssfno": "44112344",
  //  "firstname": "BOHOUO",
  //  "lastname": "CELESTIN",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221396,
  //  "annsal": 672000,
  //  "bsal": 56000,
  //  "status": "Active"
  // },
  // {
  //  "code": 56,
  //  "region": "VOLTA",
  //  "empcode": "20056",
  //  "ssfno": "44112345",
  //  "firstname": "BASIL",
  //  "lastname": "EKLOU",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221397,
  //  "annsal": 684000,
  //  "bsal": 57000,
  //  "status": "Active"
  // },
  // {
  //  "code": 57,
  //  "region": "NORTHERN",
  //  "empcode": "20057",
  //  "ssfno": "44112346",
  //  "firstname": "BAFFOUR",
  //  "lastname": "ADU BEMPAH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221398,
  //  "annsal": 696000,
  //  "bsal": 58000,
  //  "status": "Active"
  // },
  // {
  //  "code": 58,
  //  "region": "ASHANTI",
  //  "empcode": "20058",
  //  "ssfno": "44112347",
  //  "firstname": "ANTHONY",
  //  "lastname": "HERVE",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221399,
  //  "annsal": 708000,
  //  "bsal": 59000,
  //  "status": "Active"
  // },
  // {
  //  "code": 59,
  //  "region": "WESTERN",
  //  "empcode": "20059",
  //  "ssfno": "44112348",
  //  "firstname": "ALBERTA",
  //  "lastname": "NORTEY",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221400,
  //  "annsal": 720000,
  //  "bsal": 60000,
  //  "status": "Active"
  // },
  // {
  //  "code": 60,
  //  "region": "VOLTA",
  //  "empcode": "20060",
  //  "ssfno": "44112349",
  //  "firstname": "AGNES",
  //  "lastname": "ANTWI",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221401,
  //  "annsal": 732000,
  //  "bsal": 61000,
  //  "status": "Active"
  // },
  // {
  //  "code": 61,
  //  "region": "NORTHERN",
  //  "empcode": "20061",
  //  "ssfno": "44112350",
  //  "firstname": "ADO",
  //  "lastname": "NOEL",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221402,
  //  "annsal": 744000,
  //  "bsal": 62000,
  //  "status": "Active"
  // },
  // {
  //  "code": 62,
  //  "region": "ASHANTI",
  //  "empcode": "20062",
  //  "ssfno": "44112351",
  //  "firstname": "ABIGAIL",
  //  "lastname": "ANKRAH",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221403,
  //  "annsal": 756000,
  //  "bsal": 63000,
  //  "status": "Active"
  // },
  // {
  //  "code": 63,
  //  "region": "WESTERN",
  //  "empcode": "20063",
  //  "ssfno": "44112352",
  //  "firstname": "YVONNE",
  //  "lastname": "AGBO",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 5",
  //  "accnum": 221404,
  //  "annsal": 768000,
  //  "bsal": 64000,
  //  "status": "Active"
  // },
  // {
  //  "code": 64,
  //  "region": "VOLTA",
  //  "empcode": "20064",
  //  "ssfno": "44112353",
  //  "firstname": "YUSSIF",
  //  "lastname": "ABUBAKAR",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221405,
  //  "annsal": 780000,
  //  "bsal": 65000,
  //  "status": "Active"
  // },
  // {
  //  "code": 65,
  //  "region": "NORTHERN",
  //  "empcode": "20065",
  //  "ssfno": "44112354",
  //  "firstname": "WILLIAM",
  //  "lastname": "NORTEY",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221406,
  //  "annsal": 792000,
  //  "bsal": 66000,
  //  "status": "Active"
  // },
  // {
  //  "code": 66,
  //  "region": "ASHANTI",
  //  "empcode": "20066",
  //  "ssfno": "44112355",
  //  "firstname": "VIDA",
  //  "lastname": "ASARE",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221407,
  //  "annsal": 804000,
  //  "bsal": 67000,
  //  "status": "Active"
  // },
  // {
  //  "code": 67,
  //  "region": "WESTERN",
  //  "empcode": "20067",
  //  "ssfno": "44112356",
  //  "firstname": "VERONICA",
  //  "lastname": "APETOR",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221408,
  //  "annsal": 816000,
  //  "bsal": 68000,
  //  "status": "Active"
  // },
  // {
  //  "code": 68,
  //  "region": "VOLTA",
  //  "empcode": "20068",
  //  "ssfno": "44112357",
  //  "firstname": "VANESSA",
  //  "lastname": "FORSON",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221409,
  //  "annsal": 828000,
  //  "bsal": 69000,
  //  "status": "Active"
  // },
  // {
  //  "code": 69,
  //  "region": "NORTHERN",
  //  "empcode": "20069",
  //  "ssfno": "44112358",
  //  "firstname": "VALENCIA",
  //  "lastname": "T",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221410,
  //  "annsal": 840000,
  //  "bsal": 70000,
  //  "status": "Active"
  // },
  // {
  //  "code": 70,
  //  "region": "ASHANTI",
  //  "empcode": "20070",
  //  "ssfno": "44112359",
  //  "firstname": "THEOPHILUS",
  //  "lastname": "ABBEY",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221411,
  //  "annsal": 852000,
  //  "bsal": 71000,
  //  "status": "Active"
  // },
  // {
  //  "code": 71,
  //  "region": "WESTERN",
  //  "empcode": "20071",
  //  "ssfno": "44112360",
  //  "firstname": "TENGUE",
  //  "lastname": "KOKOU",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221412,
  //  "annsal": 864000,
  //  "bsal": 72000,
  //  "status": "Active"
  // },
  // {
  //  "code": 72,
  //  "region": "VOLTA",
  //  "empcode": "20072",
  //  "ssfno": "44112361",
  //  "firstname": "STEPHEN",
  //  "lastname": "TACKIE",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221413,
  //  "annsal": 876000,
  //  "bsal": 73000,
  //  "status": "Active"
  // },
  // {
  //  "code": 73,
  //  "region": "NORTHERN",
  //  "empcode": "20073",
  //  "ssfno": "44112362",
  //  "firstname": "STEPHEN",
  //  "lastname": "OFFEI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221414,
  //  "annsal": 888000,
  //  "bsal": 74000,
  //  "status": "Active"
  // },
  // {
  //  "code": 74,
  //  "region": "ASHANTI",
  //  "empcode": "20074",
  //  "ssfno": "44112363",
  //  "firstname": "STEPHEN",
  //  "lastname": "TETTEH",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221415,
  //  "annsal": 900000,
  //  "bsal": 75000,
  //  "status": "Active"
  // },
  // {
  //  "code": 75,
  //  "region": "WESTERN",
  //  "empcode": "20075",
  //  "ssfno": "44112364",
  //  "firstname": "SOULEYMANE",
  //  "lastname": " SY (JULES)",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221416,
  //  "annsal": 912000,
  //  "bsal": 76000,
  //  "status": "Active"
  // },
  // {
  //  "code": 76,
  //  "region": "VOLTA",
  //  "empcode": "20076",
  //  "ssfno": "44112365",
  //  "firstname": "SHINE",
  //  "lastname": "NUGLO",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221417,
  //  "annsal": 924000,
  //  "bsal": 77000,
  //  "status": "Active"
  // },
  // {
  //  "code": 77,
  //  "region": "NORTHERN",
  //  "empcode": "20077",
  //  "ssfno": "44112366",
  //  "firstname": "SHERIFATU",
  //  "lastname": "AMUZU",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221418,
  //  "annsal": 936000,
  //  "bsal": 78000,
  //  "status": "Active"
  // },
  // {
  //  "code": 78,
  //  "region": "ASHANTI",
  //  "empcode": "20078",
  //  "ssfno": "44112367",
  //  "firstname": "SARAH",
  //  "lastname": "ARTHUR",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221419,
  //  "annsal": 948000,
  //  "bsal": 79000,
  //  "status": "Active"
  // },
  // {
  //  "code": 79,
  //  "region": "WESTERN",
  //  "empcode": "20079",
  //  "ssfno": "44112368",
  //  "firstname": "SAMUEL",
  //  "lastname": "SELASI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 5",
  //  "accnum": 221420,
  //  "annsal": 960000,
  //  "bsal": 80000,
  //  "status": "Active"
  // },
  // {
  //  "code": 80,
  //  "region": "VOLTA",
  //  "empcode": "20080",
  //  "ssfno": "44112369",
  //  "firstname": "SAMUEL",
  //  "lastname": "OFORI",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221421,
  //  "annsal": 972000,
  //  "bsal": 81000,
  //  "status": "Active"
  // },
  // {
  //  "code": 81,
  //  "region": "NORTHERN",
  //  "empcode": "20081",
  //  "ssfno": "44112370",
  //  "firstname": "SAMIR",
  //  "lastname": "TALEB",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221422,
  //  "annsal": 984000,
  //  "bsal": 82000,
  //  "status": "Active"
  // },
  // {
  //  "code": 82,
  //  "region": "ASHANTI",
  //  "empcode": "20082",
  //  "ssfno": "44112371",
  //  "firstname": "NANA",
  //  "lastname": "KORANTENG",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221423,
  //  "annsal": 996000,
  //  "bsal": 83000,
  //  "status": "Active"
  // },
  // {
  //  "code": 83,
  //  "region": "WESTERN",
  //  "empcode": "20083",
  //  "ssfno": "44112372",
  //  "firstname": "RICHARD",
  //  "lastname": "KOFFI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221424,
  //  "annsal": 1008000,
  //  "bsal": 84000,
  //  "status": "Active"
  // },
  // {
  //  "code": 84,
  //  "region": "VOLTA",
  //  "empcode": "20084",
  //  "ssfno": "44112373",
  //  "firstname": "RICHARD",
  //  "lastname": "ANOM",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 4",
  //  "accnum": 221425,
  //  "annsal": 1020000,
  //  "bsal": 85000,
  //  "status": "Active"
  // },
  // {
  //  "code": 85,
  //  "region": "NORTHERN",
  //  "empcode": "20085",
  //  "ssfno": "44112374",
  //  "firstname": "REX",
  //  "lastname": "YEMOH",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221426,
  //  "annsal": 1032000,
  //  "bsal": 86000,
  //  "status": "Active"
  // },
  // {
  //  "code": 86,
  //  "region": "ASHANTI",
  //  "empcode": "20086",
  //  "ssfno": "44112375",
  //  "firstname": "REGINALD",
  //  "lastname": "MANTEY",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221427,
  //  "annsal": 1044000,
  //  "bsal": 87000,
  //  "status": "Active"
  // },
  // {
  //  "code": 87,
  //  "region": "WESTERN",
  //  "empcode": "20087",
  //  "ssfno": "44112376",
  //  "firstname": "RAZAK",
  //  "lastname": "BAGNALE",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221428,
  //  "annsal": 1056000,
  //  "bsal": 88000,
  //  "status": "Active"
  // },
  // {
  //  "code": 88,
  //  "region": "VOLTA",
  //  "empcode": "20088",
  //  "ssfno": "44112377",
  //  "firstname": "RASHID",
  //  "lastname": "RAHMAN",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221429,
  //  "annsal": 1068000,
  //  "bsal": 89000,
  //  "status": "Active"
  // },
  // {
  //  "code": 89,
  //  "region": "NORTHERN",
  //  "empcode": "20089",
  //  "ssfno": "44112378",
  //  "firstname": "PROSPER",
  //  "lastname": "ADJONKU",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221430,
  //  "annsal": 1080000,
  //  "bsal": 90000,
  //  "status": "Active"
  // },
  // {
  //  "code": 90,
  //  "region": "ASHANTI",
  //  "empcode": "20090",
  //  "ssfno": "44112379",
  //  "firstname": "PRINCE",
  //  "lastname": "BOAMPONG",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221431,
  //  "annsal": 1092000,
  //  "bsal": 91000,
  //  "status": "Active"
  // },
  // {
  //  "code": 91,
  //  "region": "WESTERN",
  //  "empcode": "20091",
  //  "ssfno": "44112380",
  //  "firstname": "PRINCE",
  //  "lastname": "ANKRAH",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221432,
  //  "annsal": 1104000,
  //  "bsal": 92000,
  //  "status": "Active"
  // },
  // {
  //  "code": 92,
  //  "region": "VOLTA",
  //  "empcode": "20092",
  //  "ssfno": "44112381",
  //  "firstname": "PRINCE",
  //  "lastname": "ADUMUAH OWUO",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221433,
  //  "annsal": 1116000,
  //  "bsal": 93000,
  //  "status": "Active"
  // },
  // {
  //  "code": 93,
  //  "region": "NORTHERN",
  //  "empcode": "20093",
  //  "ssfno": "44112382",
  //  "firstname": "PEARLINA",
  //  "lastname": "OBUOBI",
  //  "sex": "FeMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221434,
  //  "annsal": 1128000,
  //  "bsal": 94000,
  //  "status": "Active"
  // },
  // {
  //  "code": 94,
  //  "region": "ASHANTI",
  //  "empcode": "20094",
  //  "ssfno": "44112383",
  //  "firstname": "PAULINA",
  //  "lastname": "GYAMERA",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 4",
  //  "accnum": 221435,
  //  "annsal": 1140000,
  //  "bsal": 95000,
  //  "status": "Active"
  // },
  // {
  //  "code": 95,
  //  "region": "WESTERN",
  //  "empcode": "20095",
  //  "ssfno": "44112384",
  //  "firstname": "PATRICK",
  //  "lastname": "ASARE",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 5",
  //  "accnum": 221436,
  //  "annsal": 1152000,
  //  "bsal": 96000,
  //  "status": "Active"
  // },
  // {
  //  "code": 96,
  //  "region": "VOLTA",
  //  "empcode": "20096",
  //  "ssfno": "44112385",
  //  "firstname": "PATRICK",
  //  "lastname": "AMOAKWAH",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221437,
  //  "annsal": 1164000,
  //  "bsal": 97000,
  //  "status": "Active"
  // },
  // {
  //  "code": 97,
  //  "region": "NORTHERN",
  //  "empcode": "20097",
  //  "ssfno": "44112386",
  //  "firstname": "NOUWAVI",
  //  "lastname": "THEOPHILE",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221438,
  //  "annsal": 1176000,
  //  "bsal": 98000,
  //  "status": "Active"
  // },
  // {
  //  "code": 98,
  //  "region": "ASHANTI",
  //  "empcode": "20098",
  //  "ssfno": "44112387",
  //  "firstname": "NII",
  //  "lastname": "ADU-ARYEE",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221439,
  //  "annsal": 1188000,
  //  "bsal": 99000,
  //  "status": "Active"
  // },
  // {
  //  "code": 99,
  //  "region": "WESTERN",
  //  "empcode": "20099",
  //  "ssfno": "44112388",
  //  "firstname": "NAOMI",
  //  "lastname": " BAAH",
  //  "sex": "FeMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221440,
  //  "annsal": 1200000,
  //  "bsal": 100000,
  //  "status": "Active"
  // },
  // {
  //  "code": 100,
  //  "region": "VOLTA",
  //  "empcode": "200100",
  //  "ssfno": "44112389",
  //  "firstname": "MUSAH",
  //  "lastname": " ALI",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221441,
  //  "annsal": 1212000,
  //  "bsal": 101000,
  //  "status": "Active"
  // },
  // {
  //  "code": 101,
  //  "region": "NORTHERN",
  //  "empcode": "200101",
  //  "ssfno": "44112390",
  //  "firstname": "MUMUNI",
  //  "lastname": " SULEMAN",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221442,
  //  "annsal": 1224000,
  //  "bsal": 102000,
  //  "status": "Active"
  // },
  // {
  //  "code": 102,
  //  "region": "ASHANTI",
  //  "empcode": "200102",
  //  "ssfno": "44112391",
  //  "firstname": "MOSES",
  //  "lastname": " NII ARMAH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221443,
  //  "annsal": 1236000,
  //  "bsal": 103000,
  //  "status": "Active"
  // },
  // {
  //  "code": 103,
  //  "region": "WESTERN",
  //  "empcode": "200103",
  //  "ssfno": "44112392",
  //  "firstname": "MICHAEL",
  //  "lastname": "OSEI",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221444,
  //  "annsal": 1248000,
  //  "bsal": 104000,
  //  "status": "Active"
  // },
  // {
  //  "code": 104,
  //  "region": "VOLTA",
  //  "empcode": "200104",
  //  "ssfno": "44112393",
  //  "firstname": "MICHAEL",
  //  "lastname": "JAKAMBA",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221445,
  //  "annsal": 1260000,
  //  "bsal": 105000,
  //  "status": "Active"
  // },
  // {
  //  "code": 105,
  //  "region": "NORTHERN",
  //  "empcode": "200105",
  //  "ssfno": "44112394",
  //  "firstname": "MENSAH",
  //  "lastname": "NUNOO",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221446,
  //  "annsal": 1272000,
  //  "bsal": 106000,
  //  "status": "Active"
  // },
  // {
  //  "code": 106,
  //  "region": "ASHANTI",
  //  "empcode": "200106",
  //  "ssfno": "44112395",
  //  "firstname": "MATTHIAS",
  //  "lastname": "AMENOVI",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221447,
  //  "annsal": 1284000,
  //  "bsal": 107000,
  //  "status": "Active"
  // },
  // {
  //  "code": 107,
  //  "region": "WESTERN",
  //  "empcode": "200107",
  //  "ssfno": "44112396",
  //  "firstname": "MARY",
  //  "lastname": "GABION",
  //  "sex": "FeMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221448,
  //  "annsal": 1296000,
  //  "bsal": 108000,
  //  "status": "Active"
  // },
  // {
  //  "code": 108,
  //  "region": "VOLTA",
  //  "empcode": "200108",
  //  "ssfno": "44112397",
  //  "firstname": "MARCEL",
  //  "lastname": "DANSI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221449,
  //  "annsal": 1308000,
  //  "bsal": 109000,
  //  "status": "Active"
  // },
  // {
  //  "code": 109,
  //  "region": "NORTHERN",
  //  "empcode": "200109",
  //  "ssfno": "44112398",
  //  "firstname": "LISA",
  //  "lastname": "ASANTE",
  //  "sex": "FeMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221450,
  //  "annsal": 1320000,
  //  "bsal": 110000,
  //  "status": "Active"
  // },
  // {
  //  "code": 110,
  //  "region": "ASHANTI",
  //  "empcode": "200110",
  //  "ssfno": "44112399",
  //  "firstname": "LAMBERT",
  //  "lastname": "QUARTEY",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221451,
  //  "annsal": 1332000,
  //  "bsal": 111000,
  //  "status": "Active"
  // },
  // {
  //  "code": 111,
  //  "region": "WESTERN",
  //  "empcode": "200111",
  //  "ssfno": "44112400",
  //  "firstname": "KWAME",
  //  "lastname": "AFRIYIE",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 5",
  //  "accnum": 221452,
  //  "annsal": 1344000,
  //  "bsal": 112000,
  //  "status": "Active"
  // },
  // {
  //  "code": 112,
  //  "region": "VOLTA",
  //  "empcode": "200112",
  //  "ssfno": "44112401",
  //  "firstname": "KATHY",
  //  "lastname": "AWARTEY",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221453,
  //  "annsal": 1356000,
  //  "bsal": 113000,
  //  "status": "Active"
  // },
  // {
  //  "code": 113,
  //  "region": "NORTHERN",
  //  "empcode": "200113",
  //  "ssfno": "44112402",
  //  "firstname": "JUDITH",
  //  "lastname": "ADEKU",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221454,
  //  "annsal": 1368000,
  //  "bsal": 114000,
  //  "status": "Active"
  // },
  // {
  //  "code": 114,
  //  "region": "ASHANTI",
  //  "empcode": "200114",
  //  "ssfno": "44112403",
  //  "firstname": "JOSEPH",
  //  "lastname": "OCQUAYE",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221455,
  //  "annsal": 1380000,
  //  "bsal": 115000,
  //  "status": "Active"
  // },
  // {
  //  "code": 115,
  //  "region": "WESTERN",
  //  "empcode": "200115",
  //  "ssfno": "44112404",
  //  "firstname": "JERIMIAH",
  //  "lastname": "BIWIIN",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221456,
  //  "annsal": 1392000,
  //  "bsal": 116000,
  //  "status": "Active"
  // },
  // {
  //  "code": 116,
  //  "region": "VOLTA",
  //  "empcode": "200116",
  //  "ssfno": "44112405",
  //  "firstname": "JEFFERY",
  //  "lastname": "ADE-DANIELS",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 4",
  //  "accnum": 221457,
  //  "annsal": 1404000,
  //  "bsal": 117000,
  //  "status": "Active"
  // },
  // {
  //  "code": 117,
  //  "region": "NORTHERN",
  //  "empcode": "200117",
  //  "ssfno": "44112406",
  //  "firstname": "JAMES",
  //  "lastname": "ADOTEY",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221458,
  //  "annsal": 1416000,
  //  "bsal": 118000,
  //  "status": "Active"
  // },
  // {
  //  "code": 118,
  //  "region": "ASHANTI",
  //  "empcode": "200118",
  //  "ssfno": "44112407",
  //  "firstname": "JACOB",
  //  "lastname": "MENSAH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221459,
  //  "annsal": 1428000,
  //  "bsal": 119000,
  //  "status": "Active"
  // },
  // {
  //  "code": 119,
  //  "region": "WESTERN",
  //  "empcode": "200119",
  //  "ssfno": "44112408",
  //  "firstname": "ISSAH",
  //  "lastname": "ALHASSAN",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221460,
  //  "annsal": 1440000,
  //  "bsal": 120000,
  //  "status": "Active"
  // },
  // {
  //  "code": 120,
  //  "region": "VOLTA",
  //  "empcode": "200120",
  //  "ssfno": "44112409",
  //  "firstname": "ISAIAH",
  //  "lastname": "GYEWU",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221461,
  //  "annsal": 1452000,
  //  "bsal": 121000,
  //  "status": "Active"
  // },
  // {
  //  "code": 121,
  //  "region": "NORTHERN",
  //  "empcode": "200121",
  //  "ssfno": "44112410",
  //  "firstname": "ISAAC",
  //  "lastname": "OTUTEY",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221462,
  //  "annsal": 1464000,
  //  "bsal": 122000,
  //  "status": "Active"
  // },
  // {
  //  "code": 122,
  //  "region": "ASHANTI",
  //  "empcode": "200122",
  //  "ssfno": "44112411",
  //  "firstname": "ISAAC",
  //  "lastname": " BUBU",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221463,
  //  "annsal": 1476000,
  //  "bsal": 123000,
  //  "status": "Active"
  // },
  // {
  //  "code": 123,
  //  "region": "WESTERN",
  //  "empcode": "200123",
  //  "ssfno": "44112412",
  //  "firstname": "HERBERT",
  //  "lastname": "LARYEA",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221464,
  //  "annsal": 1488000,
  //  "bsal": 124000,
  //  "status": "Active"
  // },
  // {
  //  "code": 124,
  //  "region": "VOLTA",
  //  "empcode": "200124",
  //  "ssfno": "44112413",
  //  "firstname": "GORDON",
  //  "lastname": "OHENE ASARE",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221465,
  //  "annsal": 1500000,
  //  "bsal": 125000,
  //  "status": "Active"
  // },
  // {
  //  "code": 125,
  //  "region": "NORTHERN",
  //  "empcode": "200125",
  //  "ssfno": "44112414",
  //  "firstname": "GODWIN",
  //  "lastname": "BAWA",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221466,
  //  "annsal": 1512000,
  //  "bsal": 126000,
  //  "status": "Active"
  // },
  // {
  //  "code": 126,
  //  "region": "ASHANTI",
  //  "empcode": "200126",
  //  "ssfno": "44112415",
  //  "firstname": "GEORGINA",
  //  "lastname": "ARHIN",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 4",
  //  "accnum": 221467,
  //  "annsal": 1524000,
  //  "bsal": 127000,
  //  "status": "Active"
  // },
  // {
  //  "code": 127,
  //  "region": "WESTERN",
  //  "empcode": "200127",
  //  "ssfno": "44112416",
  //  "firstname": "FREDERICK",
  //  "lastname": "TETTEH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 5",
  //  "accnum": 221468,
  //  "annsal": 1536000,
  //  "bsal": 128000,
  //  "status": "Active"
  // },
  // {
  //  "code": 128,
  //  "region": "VOLTA",
  //  "empcode": "200128",
  //  "ssfno": "44112417",
  //  "firstname": "FRANZ",
  //  "lastname": "NUNOOFIO",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221469,
  //  "annsal": 1548000,
  //  "bsal": 129000,
  //  "status": "Active"
  // },
  // {
  //  "code": 129,
  //  "region": "NORTHERN",
  //  "empcode": "200129",
  //  "ssfno": "44112418",
  //  "firstname": "FRANCIS",
  //  "lastname": "SEKU",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221470,
  //  "annsal": 1560000,
  //  "bsal": 130000,
  //  "status": "Active"
  // },
  // {
  //  "code": 130,
  //  "region": "ASHANTI",
  //  "empcode": "200130",
  //  "ssfno": "44112419",
  //  "firstname": "FAISAL",
  //  "lastname": "AMADU",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221471,
  //  "annsal": 1572000,
  //  "bsal": 131000,
  //  "status": "Active"
  // },
  // {
  //  "code": 131,
  //  "region": "WESTERN",
  //  "empcode": "200131",
  //  "ssfno": "44112420",
  //  "firstname": "EVANS",
  //  "lastname": "ANNANG",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221472,
  //  "annsal": 1584000,
  //  "bsal": 132000,
  //  "status": "Active"
  // },
  // {
  //  "code": 132,
  //  "region": "VOLTA",
  //  "empcode": "200132",
  //  "ssfno": "44112421",
  //  "firstname": "EUGENE",
  //  "lastname": "TRAORE",
  //  "sex": "FEMALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221473,
  //  "annsal": 1596000,
  //  "bsal": 133000,
  //  "status": "Active"
  // },
  // {
  //  "code": 133,
  //  "region": "NORTHERN",
  //  "empcode": "200133",
  //  "ssfno": "44112422",
  //  "firstname": "ERNESTINA",
  //  "lastname": "SOWAH",
  //  "sex": "FeMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221474,
  //  "annsal": 1608000,
  //  "bsal": 134000,
  //  "status": "Active"
  // },
  // {
  //  "code": 134,
  //  "region": "ASHANTI",
  //  "empcode": "200134",
  //  "ssfno": "44112423",
  //  "firstname": "ENOCH",
  //  "lastname": "LAMPTEY",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 2",
  //  "accnum": 221475,
  //  "annsal": 1620000,
  //  "bsal": 135000,
  //  "status": "Active"
  // },
  // {
  //  "code": 135,
  //  "region": "WESTERN",
  //  "empcode": "200135",
  //  "ssfno": "44112424",
  //  "firstname": "ENOCH",
  //  "lastname": "ADJETEY",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221476,
  //  "annsal": 1632000,
  //  "bsal": 136000,
  //  "status": "Active"
  // },
  // {
  //  "code": 136,
  //  "region": "VOLTA",
  //  "empcode": "200136",
  //  "ssfno": "44112425",
  //  "firstname": "EMMANUELLA",
  //  "lastname": "OWUSU",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 1",
  //  "accnum": 221477,
  //  "annsal": 1644000,
  //  "bsal": 137000,
  //  "status": "Active"
  // },
  // {
  //  "code": 137,
  //  "region": "NORTHERN",
  //  "empcode": "200137",
  //  "ssfno": "44112426",
  //  "firstname": "EMMANUEL",
  //  "lastname": "ZAH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221478,
  //  "annsal": 1656000,
  //  "bsal": 138000,
  //  "status": "Active"
  // },
  // {
  //  "code": 138,
  //  "region": "ASHANTI",
  //  "empcode": "200138",
  //  "ssfno": "44112427",
  //  "firstname": "EMMANUEL",
  //  "lastname": "ODAMTTEN",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221479,
  //  "annsal": 1668000,
  //  "bsal": 139000,
  //  "status": "Active"
  // },
  // {
  //  "code": 139,
  //  "region": "WESTERN",
  //  "empcode": "200139",
  //  "ssfno": "44112428",
  //  "firstname": "EMMANUEL",
  //  "lastname": "LAMPTEY",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221480,
  //  "annsal": 1680000,
  //  "bsal": 140000,
  //  "status": "Active"
  // },
  // {
  //  "code": 140,
  //  "region": "VOLTA",
  //  "empcode": "200140",
  //  "ssfno": "44112429",
  //  "firstname": "EMMANUEL",
  //  "lastname": "MENSAH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221481,
  //  "annsal": 1692000,
  //  "bsal": 141000,
  //  "status": "Active"
  // },
  // {
  //  "code": 141,
  //  "region": "NORTHERN",
  //  "empcode": "200141",
  //  "ssfno": "44112430",
  //  "firstname": "EMMANUEL",
  //  "lastname": "BAFFOUR",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221482,
  //  "annsal": 1704000,
  //  "bsal": 142000,
  //  "status": "Active"
  // },
  // {
  //  "code": 142,
  //  "region": "ASHANTI",
  //  "empcode": "200142",
  //  "ssfno": "44112431",
  //  "firstname": "ELVIS",
  //  "lastname": " ASANTE",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221483,
  //  "annsal": 1716000,
  //  "bsal": 143000,
  //  "status": "Active"
  // },
  // {
  //  "code": 143,
  //  "region": "WESTERN",
  //  "empcode": "200143",
  //  "ssfno": "44112432",
  //  "firstname": "EBENEZER",
  //  "lastname": "QUAYE",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 5",
  //  "accnum": 221484,
  //  "annsal": 1728000,
  //  "bsal": 144000,
  //  "status": "Active"
  // },
  // {
  //  "code": 144,
  //  "region": "VOLTA",
  //  "empcode": "200144",
  //  "ssfno": "44112433",
  //  "firstname": "EBENEZER",
  //  "lastname": "GALLEY",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221485,
  //  "annsal": 1740000,
  //  "bsal": 145000,
  //  "status": "Active"
  // },
  // {
  //  "code": 145,
  //  "region": "NORTHERN",
  //  "empcode": "200145",
  //  "ssfno": "44112434",
  //  "firstname": "DENNIS",
  //  "lastname": "LARYEA",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221486,
  //  "annsal": 1752000,
  //  "bsal": 146000,
  //  "status": "Active"
  // },
  // {
  //  "code": 146,
  //  "region": "ASHANTI",
  //  "empcode": "200146",
  //  "ssfno": "44112435",
  //  "firstname": "DELALI",
  //  "lastname": "AMEKU",
  //  "sex": "FEMALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221487,
  //  "annsal": 1764000,
  //  "bsal": 147000,
  //  "status": "Active"
  // },
  // {
  //  "code": 147,
  //  "region": "WESTERN",
  //  "empcode": "200147",
  //  "ssfno": "44112436",
  //  "firstname": "DEFENCER",
  //  "lastname": "ANYETEI",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221488,
  //  "annsal": 1776000,
  //  "bsal": 148000,
  //  "status": "Active"
  // },
  // {
  //  "code": 148,
  //  "region": "VOLTA",
  //  "empcode": "200148",
  //  "ssfno": "44112437",
  //  "firstname": "DAVID",
  //  "lastname": "TETTEH",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221489,
  //  "annsal": 1788000,
  //  "bsal": 149000,
  //  "status": "Active"
  // },
  // {
  //  "code": 149,
  //  "region": "NORTHERN",
  //  "empcode": "200149",
  //  "ssfno": "44112438",
  //  "firstname": "DAVID",
  //  "lastname": "BOALI",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 1",
  //  "accnum": 221490,
  //  "annsal": 1800000,
  //  "bsal": 150000,
  //  "status": "Active"
  // },
  // {
  //  "code": 150,
  //  "region": "ASHANTI",
  //  "empcode": "200150",
  //  "ssfno": "44112439",
  //  "firstname": "DAVID",
  //  "lastname": "AJUICK",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "PRODUCTION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221491,
  //  "annsal": 1812000,
  //  "bsal": 151000,
  //  "status": "Active"
  // },
  // {
  //  "code": 151,
  //  "region": "WESTERN",
  //  "empcode": "200151",
  //  "ssfno": "44112440",
  //  "firstname": "DANIEL",
  //  "lastname": "ANUM",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 3",
  //  "accnum": 221492,
  //  "annsal": 1824000,
  //  "bsal": 152000,
  //  "status": "Active"
  // },
  // {
  //  "code": 152,
  //  "region": "VOLTA",
  //  "empcode": "200152",
  //  "ssfno": "44112441",
  //  "firstname": "DANIEL",
  //  "lastname": "ADDO",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221493,
  //  "annsal": 1836000,
  //  "bsal": 153000,
  //  "status": "Active"
  // },
  // {
  //  "code": 153,
  //  "region": "NORTHERN",
  //  "empcode": "200153",
  //  "ssfno": "44112442",
  //  "firstname": "COLLINS",
  //  "lastname": "ASANTE",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "HEADOFFICE",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 2",
  //  "accnum": 221494,
  //  "annsal": 1848000,
  //  "bsal": 154000,
  //  "status": "Active"
  // },
  // {
  //  "code": 154,
  //  "region": "ASHANTI",
  //  "empcode": "200154",
  //  "ssfno": "44112443",
  //  "firstname": "CHRISTOPHER",
  //  "lastname": " AGILINKO",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "PRODUCTION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 3",
  //  "accnum": 221495,
  //  "annsal": 1860000,
  //  "bsal": 155000,
  //  "status": "Active"
  // },
  // {
  //  "code": 155,
  //  "region": "WESTERN",
  //  "empcode": "200155",
  //  "ssfno": "44112444",
  //  "firstname": "BISMARK",
  //  "lastname": " ABLADE",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "ADMINISTRATION",
  //  "grade": "FACTORY MANAGER",
  //  "notch": "NOTCH 1",
  //  "accnum": 221496,
  //  "annsal": 1872000,
  //  "bsal": 156000,
  //  "status": "Active"
  // },
  // {
  //  "code": 156,
  //  "region": "VOLTA",
  //  "empcode": "200156",
  //  "ssfno": "44112445",
  //  "firstname": "BELGET",
  //  "lastname": "KOOMSON",
  //  "sex": "FEMALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "RESEARCH AND DEVELOPMENT",
  //  "grade": "ASSISTANT ACCONTANT",
  //  "notch": "NOTCH 2",
  //  "accnum": 221497,
  //  "annsal": 1884000,
  //  "bsal": 157000,
  //  "status": "Active"
  // },
  // {
  //  "code": 157,
  //  "region": "NORTHERN",
  //  "empcode": "200157",
  //  "ssfno": "44112446",
  //  "firstname": "KOFO",
  //  "lastname": "ABOO",
  //  "sex": "MALE",
  //  "paygroup": "CASUAL",
  //  "depart": "HEADOFFICE",
  //  "grade": "ACCOUNT OFFICER",
  //  "notch": "NOTCH 3",
  //  "accnum": 221498,
  //  "annsal": 1896000,
  //  "bsal": 158000,
  //  "status": "Active"
  // },
  // {
  //  "code": 158,
  //  "region": "ASHANTI",
  //  "empcode": "200158",
  //  "ssfno": "44112447",
  //  "firstname": "ANTHONY",
  //  "lastname": "GYASI",
  //  "sex": "MALE",
  //  "paygroup": "GENERAL",
  //  "depart": "PRODUCTION",
  //  "grade": "HUMAN RESOURCE MANAGER",
  //  "notch": "NOTCH 4",
  //  "accnum": 221499,
  //  "annsal": 1908000,
  //  "bsal": 159000,
  //  "status": "Active"
  // },
  // {
  //  "code": 159,
  //  "region": "WESTERN",
  //  "empcode": "200159",
  //  "ssfno": "44112448",
  //  "firstname": "ANTHONY",
  //  "lastname": "MASOPERH",
  //  "sex": "MALE",
  //  "paygroup": "MANAGEMENT",
  //  "depart": "ADMINISTRATION",
  //  "grade": "SALES REP ENTRY",
  //  "notch": "NOTCH 5",
  //  "accnum": 221500,
  //  "annsal": 1920000,
  //  "bsal": 160000,
  //  "status": "Active"
  // }
 ]

 export const PAYGROUP=[
  {
   code: "001",
   name: "MANAGEMENT",
   status: "ACTIVE"
  },
  {
   code: "002",
   name: "CASUAL",
   status: "ACTIVE"
  },
  {
   code: "003",
   name: "GENERAL",
   status: "ACTIVE"
  }
 ]

 export const LOANS =[
  {
   code: "001",
   interestRate: "5%",
   interestType: "FORMULA",
   moratorium: "NONE",
   minrepay: 100,
   maxrepay: 2000,
   ceiling: 0.15,
   deduction: "MONTHLY",
   cancellation: "N\/A"
  },
  {
   code: "002",
   interestRate: "15%",
   interestType: "PERCENTAGE OF GROSS",
   moratorium: "3 MONTHS",
   minrepay: 100,
   maxrepay: 2000,
   ceiling: 0.15,
   deduction: "MONTHLY",
   cancellation: "N\/A"
  },
  {
   code: "003",
   interestRate: "30%",
   interestType: "VARYING AMOUNT",
   moratorium: "NONE",
   minrepay: 100,
   maxrepay: 2000,
   ceiling: 0.15,
   deduction: "MONTHLY",
   cancellation: "N\/A"
  },
  {
   code: "004",
   interestRate: "2%",
   interestType: "VARYING AMOUNT",
   moratorium: "NONE",
   minrepay: 100,
   maxrepay: 2000,
   ceiling: 0.15,
   deduction: "MONTHLY",
   cancellation: "N\/A"
  },
  {
   code: "005",
   interestRate: "10%",
   interestType: "PERCENTAGE OF BASIC",
   moratorium: "1 MONTH",
   minrepay: 100,
   maxrepay: 2000,
   ceiling: 0.15,
   deduction: "MONTHLY",
   cancellation: "N\/A"
  }
 ]

 export const DEDUCTION=[
  {
   code: "001",
   name: "CLOT",
   desc: "CLOTHING ALLOWANCE",
   cat: "PERMANENT",
   tamount: "FORMULA",
   amount: 0,
   accnum: 1234560,
   ptype: "MONTHLY",
   pinterval: "MONTHLY",
   currency: "GHS",
   accrued: "NO",
   taxtype: "TAX TABLE"
  },
  {
   code: "002",
   name: "ACCOM",
   desc: "ACCOMODATION ALLOWANCE",
   cat: "SERVICE",
   tamount: "PERCENTAGE OF GROSS",
   amount: 0,
   accnum: 1234561,
   ptype: "MONTHLY",
   pinterval: "MONTHLY",
   currency: "GHS",
   accrued: "NO",
   taxtype: "TAX FORMULA"
  },
  {
   code: "003",
   name: "MED",
   desc: "MEDICAL ALLOWANCE",
   cat: "PERMANENT",
   tamount: "VARYING AMOUNT",
   amount: 0,
   accnum: 1234562,
   ptype: "AMOUNT",
   pinterval: "AMOUNT",
   currency: "GHS",
   accrued: "NO",
   taxtype: "NON TAXABLE"
  },
  {
   code: "004",
   name: "TRAV",
   desc: "TRAVELLING ALLOWANCE",
   cat: "SENIOR STAFF",
   tamount: "VARYING AMOUNT",
   amount: 0,
   accnum: 1234563,
   ptype: "WEEKLY",
   pinterval: "WEEKLY",
   currency: "GHS",
   accrued: "NO",
   taxtype: "TAX FORMULA"
  },
  {
   code: "005",
   name: "RND",
   desc: "RESEARCH ALLOWANCE",
   cat: "SENIOR STAFF",
   tamount: "PERCENTAGE OF BASIC",
   amount: 0,
   accnum: 1234564,
   ptype: "ANNUAL",
   pinterval: "ANNUAL",
   currency: "GHS",
   accrued: "NO",
   taxtype: "TAX RATE"
  }
 ]

 export const CURRENCY=[
  {
   code: "USD",
   name: "US DOLLARS",
   status: "ACTIVE"
  },
  {
   code: "GHC",
   name: "GHANA CEDI",
   status: "ACTIVE"
  },
  {
   code: "GBP",
   name: "GREAT BRITAIN POUNDS",
   status: "ACTIVE"
  },
  {
   code: "AUD",
   name: "AUSTRALIAN DOLLARS",
   status: "ACTIVE"
  },
  {
   code: "FRANC",
   name: "WEST AFRICAN FRANC",
   status: "ACTIVE"
  }
 ]

 export const GRADES=[
  {
   code: "001",
   desc: "ASTACT1",
   name: "ASSISTANT ACCONTANT",
   payg: "GENERAL",
   status: "ACTIVE"
  },
  {
   code: "002",
   desc: "ACCOFF",
   name: "ACCOUNT OFFICER",
   payg: "GENERAL",
   status: "ACTIVE"
  },
  {
   code: "003",
   desc: "HRMAN",
   name: "HUMAN RESOURCE MANAGER",
   payg: "MANAGEMENT",
   status: "ACTIVE"
  },
  {
   code: "004",
   desc: "SALREP1",
   name: "SALES REP ENTRY",
   payg: "CASUAL",
   status: "ACTIVE"
  },
  {
   code: "005",
   desc: "FACMAN",
   name: "FACTORY MANAGER",
   payg: "MANAGEMENT",
   status: "ACTIVE"
  }
 ]

 export const NOTCHES=[
  {
   name: "NOTCH 1",
   currency:"USD",
   amount:"0.00",
   salgrade: "ASSISTANT ACCOUNTANT"
  },
  {
   name: "NOTCH 2",
   currency:"FRANC",
   amount:"0.00",
   salgrade: "ASSISTANT ACCOUNTANT"
  },
  {
   name: "NOTCH 3",
   currency:"USD",
   amount:"0.00",
   salgrade: "ASSISTANT ACCOUNTANT"
  },
  {
   name: "NOTCH 4",
   currency:"FRANC",
   amount:"0.00",
   salgrade: "ASSISTANT ACCOUNTANT"
  },
  {
   name: "NOTCH 1",
   currency:"USD",
   amount:"0.00",
   salgrade: "ACCOUNT OFFICER"
  },
  {
   name: "NOTCH 2",
   currency:"AUD",
   amount:"0.00",
   salgrade: "ACCOUNT OFFICER"
  },
  {
   name: "NOTCH 3",
   currency:"USD",
   amount:"0.00",
   salgrade: "ACCOUNT OFFICER"
  },
  {
   name: "NOTCH 1",
   currency:"USD",
   amount:"0.00",
   salgrade: "HUMAN RESOURCE MANAGER"
  },
  {
   name: "NOTCH 2",
   currency:"GBP",
   amount:"0.00",
   salgrade: "HUMAN RESOURCE MANAGER"
  },
  {
   name: "NOTCH 3",
   currency:"FRANC",
   amount:"0.00",
   salgrade: "HUMAN RESOURCE MANAGER"
  },
  {
   name: "NOTCH 1",
   currency:"GBP",
   amount:"0.00",
   salgrade: "SALES REP ENTRY"
  },
  {
   name: "NOTCH 2",
   currency:"AUD",
   amount:"0.00",
   salgrade: "SALES REP ENTRY"
  },
  {
   name: "NOTCH 3",
   currency:"AUD",
   amount:"0.00",
   salgrade: "SALES REP ENTRY"
  },
  {
   name: "NOTCH 4",
   currency:"USD",
   amount:"0.00",
   salgrade: "SALES REP ENTRY"
  },
  {
   name: "NOTCH 5",
   currency:"GBP",
   amount:"0.00",
   salgrade: "SALES REP ENTRY"
  },
  {
   name: "NOTCH 1",
   currency:"FRANC",
   amount:"0.00",
   salgrade: "FACTORY MANAGER"
  }
 ]

 export const BANKS = [
  // {
  //  "code": 10101,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA ACCRA BRANCH"
  // },
  // {
  //  "code": 10303,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -AGONA SWEDRU BRANCH"
  // },
  // {
  //  "code": 10401,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -TAKORADI BRANCH"
  // },
  // {
  //  "code": 10402,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -SEFWI BOAKO BRANCH"
  // },
  // {
  //  "code": 10601,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -KUMASI BRANCH"
  // },
  // {
  //  "code": 10701,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -SUNYANI BRANCH"
  // },
  // {
  //  "code": 10801,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA -TAMALE BRANCH"
  // },
  // {
  //  "code": 11101,
  //  "name": "BANK OF GHANA",
  //  "branch": "BANK OF GHANA - HOHOE BRANCH"
  // },
  {
   "code": 20101,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-HIGH STREET BRANCH"
  },
  {
   "code": 20102,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD- INDEPENDENCE AVENUE BRANCH"
  },
  {
   "code": 20104,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-LIBERIA ROAD BRANCH"
  },
  {
   "code": 20105,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-OPEIBEA HOUSE BRANCH"
  },
  {
   "code": 20106,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-TEMA BRANCH"
  },
  {
   "code": 20108,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-LEGON BRANCH"
  },
  {
   "code": 20112,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-OSU BRANCH"
  },
  {
   "code": 20118,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-SPINTEX BRANCH"
  },
  {
   "code": 20121,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-DANSOMAN BRANCH"
  },
  {
   "code": 20126,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-ABEKA BRANCH"
  },
  {
   "code": 20127,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH)-ACHIMOTA BRANCH"
  },
  {
   "code": 20129,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD- NIA BRANCH"
  },
  {
   "code": 20132,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD- TEMA HABOUR BRANCH"
  },
  {
   "code": 20133,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD- WESTHILLS BRANCH"
  },
  {
   "code": 20436,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-LIBERIA ROAD TAKORADI BRANCH"
  },
  {
   "code": 20611,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD- KNUST BRANCH"
  },
  {
   "code": 20613,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-AHODWO BRANCH"
  },
  {
   "code": 20615,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-HARPER ROAD BRANCH"
  },
  {
   "code": 20617,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-OBUASI BRANCH"
  },
  {
   "code": 20823,
   "name": "STANDARD CHARTERED BANK",
   "branch": "STANDARD CHARTERED BANK(GH) LTD-TAMALE BRANCH"
  },
  {
   "code": 30101,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KASOA BRANCH"
  },
  {
   "code": 30104,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-A AND C MALL BRANCH"
  },
  {
   "code": 30105,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ACCRA MALL BRANCH"
  },
  {
   "code": 30106,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ABEKA LAPAZ BRANCH"
  },
  {
   "code": 30107,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-DANSOMAN BRANCH"
  },
  {
   "code": 30108,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-GNPC BRANCH"
  },
  {
   "code": 30109,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-NIMA BRANCH"
  },
  {
   "code": 30110,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-LEGON BRANCH"
  },
  {
   "code": 30111,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 30112,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-OSU BRANCH"
  },
  {
   "code": 30114,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 30116,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -BCM BRANCH"
  },
  {
   "code": 30117,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-MOTORWAY EXT BRANCH"
  },
  {
   "code": 30121,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-SPINTEX MAIN BRANCH"
  },
  {
   "code": 30122,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KNUTSFORD AVENUE BRANCH"
  },
  {
   "code": 30125,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-LEGON MAIN BRANCH"
  },
  {
   "code": 30130,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TEMA FISHING HARBOUR BRANCH"
  },
  {
   "code": 30135,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-MAKOLA SQUARE BRANCH"
  },
  {
   "code": 30136,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-AIRPORT CITY BRANCH"
  },
  {
   "code": 30141,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-CIRCLE BRANCH"
  },
  {
   "code": 30144,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH)LTD-ACCRA CORPORATE SERVICE CENTER BRANCH"
  },
  {
   "code": 30145,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-SPINTEX PRESTIGE BRANCH"
  },
  {
   "code": 30148,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-HIGH STREET BRANCH"
  },
  {
   "code": 30149,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD-DIRECT SALES BRANCH"
  },
  {
   "code": 30154,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-AVENUE CENTRAL BRANCH"
  },
  {
   "code": 30155,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - UNDP BRANCH"
  },
  {
   "code": 30160,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TEMA MAIN BRANCH"
  },
  {
   "code": 30161,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - SME CENTRE BRANCH"
  },
  {
   "code": 30162,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - AGBOBLOSHIE BRANCH"
  },
  {
   "code": 30163,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - MADINA BRANCH"
  },
  {
   "code": 30164,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-HEAD OFFICE BRANCH"
  },
  {
   "code": 30168,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - TESHIE NUNGUA BRANCH"
  },
  {
   "code": 30169,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - ACCRA NEWTOWN BRANCH"
  },
  {
   "code": 30170,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - DOME BRANCH"
  },
  {
   "code": 30173,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-DARKUMAN BRANCH"
  },
  {
   "code": 30175,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-INDEPENDENCE AVENUE BRANCH"
  },
  {
   "code": 30179,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - WEIJA BRANCH"
  },
  {
   "code": 30184,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ASHAIMAN BRANCH"
  },
  {
   "code": 30185,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD- HAATSO BRANCH"
  },
  {
   "code": 30187,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KANESHIE BRANCH"
  },
  {
   "code": 30189,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - TEMA OIL REFINERY BRANCH"
  },
  {
   "code": 30190,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-NORTH KANESHIE BRANCH"
  },
  {
   "code": 30191,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-MAAMOBI BRANCH"
  },
  {
   "code": 30192,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD- OFFSHORE BANKING"
  },
  {
   "code": 30193,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-MATAHEKO BRANCH"
  },
  {
   "code": 30194,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -ADENTA BRANCH"
  },
  {
   "code": 30195,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - ABOSSEY OKAI BRANCH"
  },
  {
   "code": 30196,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -KOTOBABI BRANCH"
  },
  {
   "code": 30197,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -PALM WINE JUNCTION BRANCH"
  },
  {
   "code": 30242,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KOFORIDUA BRANCH"
  },
  {
   "code": 30243,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -NKAWKAW BRANCH"
  },
  {
   "code": 30246,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ODA BRANCH"
  },
  {
   "code": 30247,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-NSAWAM BRANCH"
  },
  {
   "code": 30286,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - SOMANYA BRANCH"
  },
  {
   "code": 30320,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD  - SWEDRU BRANCH"
  },
  {
   "code": 30337,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-CAPE COAST BRANCH"
  },
  {
   "code": 30338,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-OBUASI BRANCH"
  },
  {
   "code": 30365,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - WINNEBA BRANCH"
  },
  {
   "code": 30367,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - MANKESSIM BRANCH"
  },
  {
   "code": 30399,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -TWIFO PRASO BRANCH"
  },
  {
   "code": 30431,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-HIGH STREET-TAKORADI BRANCH"
  },
  {
   "code": 30432,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-LIBERATION ROAD-TAKORADI BRANCH"
  },
  {
   "code": 30434,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TARKWA BRANCH"
  },
  {
   "code": 30451,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TARKWA MINES BRANCH"
  },
  {
   "code": 30452,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ASANKRAGUA BRANCH"
  },
  {
   "code": 30456,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - TAKORADI KOKOMPE BRANCH"
  },
  {
   "code": 30498,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -ELUBO BRANCH"
  },
  {
   "code": 30539,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-HO BRANCH"
  },
  {
   "code": 30540,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -HOHOE BRANCH"
  },
  {
   "code": 30572,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - AFLAO BRANCH"
  },
  {
   "code": 30623,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-ASAFO BRANCH"
  },
  {
   "code": 30627,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-PREMPEH II STREET"
  },
  {
   "code": 30628,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KEJETIA- KUMASI BRANCH"
  },
  {
   "code": 30653,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -NEW SUAME MAGAZINE BRANCH"
  },
  {
   "code": 30657,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - OLD SUAME MAGAZINE BRANCH"
  },
  {
   "code": 30658,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - AGOGO BRANCH"
  },
  {
   "code": 30666,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - ADUM BRANCH"
  },
  {
   "code": 30674,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - BANTAMA BRANCH"
  },
  {
   "code": 30676,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - SEFWI-WIASO BRANCH"
  },
  {
   "code": 30677,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - KONONGO BRANCH"
  },
  {
   "code": 30680,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-KROFOM BRANCH"
  },
  {
   "code": 30681,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TANOSO BRANCH"
  },
  {
   "code": 30682,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD- TAFO BRANCH"
  },
  {
   "code": 30683,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-AHODWO BRANCH"
  },
  {
   "code": 30718,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TECHIMAN BRANCH"
  },
  {
   "code": 30724,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - BEREKUM BRANCH"
  },
  {
   "code": 30750,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-SUNYANI BRANCH"
  },
  {
   "code": 30759,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - GOASO BRANCH"
  },
  {
   "code": 30778,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - ATEBUBU BRANCH"
  },
  {
   "code": 30833,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-TAMALE BRANCH"
  },
  {
   "code": 30871,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD -GUMANI BRANCH"
  },
  {
   "code": 30919,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-BOLGATANGA BRANCH"
  },
  {
   "code": 30926,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA (GH) LTD-BAWKU BRANCH"
  },
  {
   "code": 31088,
   "name": "ABSA (GH) LTD",
   "branch": "ABSA(GH) LTD - WA BRANCH"
  },
  {
   "code": 40001,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - WA BRANCH"
  },
  {
   "code": 40002,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - TUMU BRANCH"
  },
  {
   "code": 40003,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - LAWRA BRANCH"
  },
  {
   "code": 40004,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BOLE BRANCH"
  },
  {
   "code": 40101,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-HIGH STREET BRANCH"
  },
  {
   "code": 40102,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -BURMA CAMP BRANCH"
  },
  {
   "code": 40103,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -LEGON BRANCH"
  },
  {
   "code": 40105,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-MINISTRIES BRANCH"
  },
  {
   "code": 40106,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - REPUBLIC HOUSE BRANCH"
  },
  {
   "code": 40107,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TEMA MAIN BRANCH"
  },
  {
   "code": 40108,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TEMA MARKET BRANCH"
  },
  {
   "code": 40109,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TEMA INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 40110,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TEMA FISHING HARBOUR BRANCH"
  },
  {
   "code": 40111,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - RING ROAD WEST BRANCH"
  },
  {
   "code": 40112,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-KANESHIE MARKET BRANCH"
  },
  {
   "code": 40113,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-KORLEBU BRANCH"
  },
  {
   "code": 40114,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-OSU BRANCH"
  },
  {
   "code": 40115,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-DERBY AVENUE BRANCH"
  },
  {
   "code": 40116,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -BOUNDARY ROAD BRANCH"
  },
  {
   "code": 40117,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-LIBERTY HOUSE BRANCH"
  },
  {
   "code": 40118,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-ACCRA NEW TOWN BRANCH"
  },
  {
   "code": 40119,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TRADE FAIR SITE BRANCH"
  },
  {
   "code": 40120,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-KANESHIE INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 40121,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-ASHAIMAN BRANCH"
  },
  {
   "code": 40123,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-MADINA BRANCH"
  },
  {
   "code": 40124,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - 31ST DECEMBER MARKET BRANCH"
  },
  {
   "code": 40126,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TETTEH QUARSHIE CIRCLE BRANCH"
  },
  {
   "code": 40127,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -KWAME NKRUMAH CIRCLE BRANCH"
  },
  {
   "code": 40128,
   "name": "GCB BANK LTD",
   "branch": "GCB LTD-INTERNATIONAL TRADE FINANCE BRANCH"
  },
  {
   "code": 40129,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-GLOBAL TRANSFER SERVICES BRANCH"
  },
  {
   "code": 40130,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TANTRA HILL BRANCH"
  },
  {
   "code": 40131,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KASOA BRANCH"
  },
  {
   "code": 40132,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -DOME (KWABENYA) BRANCH"
  },
  {
   "code": 40133,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABLENKPE BRANCH"
  },
  {
   "code": 40134,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KASOA MAIN BRANCH"
  },
  {
   "code": 40135,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-SAFEBOUND (JUBILEE) TEMA BRANCH"
  },
  {
   "code": 40136,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KISSEIMAN BRANCH"
  },
  {
   "code": 40138,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SPINTEX ROAD BRANCH"
  },
  {
   "code": 40139,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-ACCRA NORTH CIRCLE BRANCH"
  },
  {
   "code": 40146,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DANSOMAN BRANCH"
  },
  {
   "code": 40147,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ADENTA MARKET BRANCH"
  },
  {
   "code": 40148,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NIMA BRANCH"
  },
  {
   "code": 40149,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NUNGUA BRANCH"
  },
  {
   "code": 40150,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABEKA LAPAZ BRANCH"
  },
  {
   "code": 40162,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HAATSO BRANCH"
  },
  {
   "code": 40163,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AMASAMAN BRANCH"
  },
  {
   "code": 40164,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ADJIRIGANO BRANCH"
  },
  {
   "code": 40165,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - WEIJA BRANCH"
  },
  {
   "code": 40166,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KATAMANTO BRANCH"
  },
  {
   "code": 40167,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ADABRAKA BRANCH"
  },
  {
   "code": 40168,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AIRPORT CITY BRANCH"
  },
  {
   "code": 40169,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - EAST LEGON BRANCH"
  },
  {
   "code": 40170,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - TEMA COMMUNITY 2 BRANCH"
  },
  {
   "code": 40171,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - GCB BANK LTD - OKAISHIE BRANCH"
  },
  {
   "code": 40172,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - CENTRAL UNIVERSITY COLLEGE BRANCH"
  },
  {
   "code": 40173,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - LABONE BRANCH"
  },
  {
   "code": 40174,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ACHIMOTA BRANCH"
  },
  {
   "code": 40175,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - A&amp;C MALL BRANCH"
  },
  {
   "code": 40176,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - TESANO BRANCH"
  },
  {
   "code": 40177,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABOSSEY OKAI BRANCH"
  },
  {
   "code": 40178,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MANDELA PARK BRANCH"
  },
  {
   "code": 40179,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - OSU OXFORD STREET BRANCH"
  },
  {
   "code": 40180,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MARTEY TSURU BRANCH"
  },
  {
   "code": 40181,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - TEMA COMMUNITY 1 BRANCH"
  },
  {
   "code": 40182,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MADINA ZONGO JUNCTION BRANCH"
  },
  {
   "code": 40183,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DZORWULU BRANCH BRANCH"
  },
  {
   "code": 40184,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -AIRPORT TERMINAL 3 BRANCH"
  },
  {
   "code": 40199,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-HEAD OFFICE BRANCH"
  },
  {
   "code": 40201,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KOFORIDUA BRANCH"
  },
  {
   "code": 40202,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AKIM ODA BRANCH"
  },
  {
   "code": 40203,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -KADE BRANCH"
  },
  {
   "code": 40205,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK  LTD - NEW TAFO BRANCH"
  },
  {
   "code": 40206,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD- NKAWKAW BRANCH"
  },
  {
   "code": 40207,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -  SOMANYA BRANCH"
  },
  {
   "code": 40208,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ASAMANKESE BRANCH"
  },
  {
   "code": 40209,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AKROPONG AKWAPIM BRANCH"
  },
  {
   "code": 40210,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK  LTD - MAMPONG AKWAPIM BRANCH"
  },
  {
   "code": 40212,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ANYIMAN BRANCH"
  },
  {
   "code": 40213,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ADA FOAH BRANCH"
  },
  {
   "code": 40214,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SUHUM BRANCH"
  },
  {
   "code": 40216,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NSAWAM BRANCH"
  },
  {
   "code": 40217,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KIBI BRANCH"
  },
  {
   "code": 40218,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AKOSOMBO BRANCH"
  },
  {
   "code": 40219,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MPRAESO BRANCH"
  },
  {
   "code": 40220,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AKUSE BRANCH"
  },
  {
   "code": 40221,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DONKORKROM BRANCH"
  },
  {
   "code": 40222,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABURI BRANCH"
  },
  {
   "code": 40224,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KOFORIDUA CENTRAL GCB BANK LTD BRANCH"
  },
  {
   "code": 40301,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-CAPE COAST MAIN BRANCH"
  },
  {
   "code": 40302,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-UNIVERSITY OF CAPE COAST BRANCH"
  },
  {
   "code": 40303,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AGONA SWEDRU BRANCH"
  },
  {
   "code": 40304,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ASSIN FOSU BRANCH"
  },
  {
   "code": 40305,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-WINNEBA BRANCH"
  },
  {
   "code": 40306,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BREMAN ASIKUMA BRANCH"
  },
  {
   "code": 40307,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABURA DUNKWA BRANCH"
  },
  {
   "code": 40308,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SALTPOND BRANCH"
  },
  {
   "code": 40309,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MANKESSIM BRANCH"
  },
  {
   "code": 40310,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - TWIFO PRASO BRANCH"
  },
  {
   "code": 40315,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ELMINA BRANCH"
  },
  {
   "code": 40317,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - CORONATION JUNCTION BRANCH"
  },
  {
   "code": 40401,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TAKORADI MAIN BRANCH"
  },
  {
   "code": 40402,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TAKORADI HARBOUR BRANCH"
  },
  {
   "code": 40403,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TAKORADI MARKET CIRCLE BRANCH"
  },
  {
   "code": 40404,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-SEKONDI BRANCH"
  },
  {
   "code": 40405,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-TARKWA BRANCH"
  },
  {
   "code": 40406,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-SAMREBOI BRANCH"
  },
  {
   "code": 40407,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ENCHI BRANCH"
  },
  {
   "code": 40408,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AXIM BRANCH"
  },
  {
   "code": 40409,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HALFASSINI BRANCH"
  },
  {
   "code": 40410,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DUNKWA-ON-OFFIN BRANCH"
  },
  {
   "code": 40412,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SEFWI WIAWSO"
  },
  {
   "code": 40413,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DADIESO BRANCH"
  },
  {
   "code": 40414,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BOGOSO BRANCH"
  },
  {
   "code": 40415,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-ELUBO BRANCH"
  },
  {
   "code": 40471,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - PRESTEA BRANCH"
  },
  {
   "code": 40501,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -HO BRANCH"
  },
  {
   "code": 40502,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AFLAO BRANCH"
  },
  {
   "code": 40503,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -DZODZE BRANCH"
  },
  {
   "code": 40504,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -JASIKAN BRANCH"
  },
  {
   "code": 40506,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KADJEBI BRANCH"
  },
  {
   "code": 40507,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KETA BRANCH"
  },
  {
   "code": 40508,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KETEKRACHI BRANCH"
  },
  {
   "code": 40509,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KPANDO BRANCH"
  },
  {
   "code": 40511,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HOHOE BRANCH"
  },
  {
   "code": 40512,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SOGAKOPE BRANCH"
  },
  {
   "code": 40514,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - PEKI BRANCH"
  },
  {
   "code": 40515,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABOR BRANCH"
  },
  {
   "code": 40517,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AKATSI BRANCH"
  },
  {
   "code": 40523,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NKWANTA BRANCH"
  },
  {
   "code": 40526,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HO MARKET BRANCH"
  },
  {
   "code": 40527,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DAMBAI BRANCH"
  },
  {
   "code": 40530,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HO POLYTECHNIC BRANCH"
  },
  {
   "code": 40555,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - CENTRAL PROCESSING CENTRE"
  },
  {
   "code": 40601,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-KUMASI MAIN BRANCH"
  },
  {
   "code": 40602,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD-ASAFO MARKET BRANCH"
  },
  {
   "code": 40603,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KNUST KUMASI BRANCH"
  },
  {
   "code": 40604,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KEJETIA BRANCH"
  },
  {
   "code": 40605,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KONONGO BRANCH"
  },
  {
   "code": 40607,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MAMPONG ASHANTI BRANCH"
  },
  {
   "code": 40609,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BEKWAI BRANCH"
  },
  {
   "code": 40610,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - EFFIDUASE ASHANTI BRANCH"
  },
  {
   "code": 40611,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - OBUASI BRANCH"
  },
  {
   "code": 40612,
   "name": "GCB BANK LTD",
   "branch": "GCB  BANK LTD -EJISU BRANCH"
  },
  {
   "code": 40613,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NEW OFFINSO"
  },
  {
   "code": 40614,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - EJURA BRANCH"
  },
  {
   "code": 40615,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TEPA BRANCH"
  },
  {
   "code": 40616,
   "name": "GCB BANK LTD",
   "branch": "GCB  BANK LTD - AKUMADAN BRANCH"
  },
  {
   "code": 40617,
   "name": "GCB BANK LTD",
   "branch": "GCB  BANK LTD - JUASO BRANCH"
  },
  {
   "code": 40618,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NEW EDUBIASE BRANCH"
  },
  {
   "code": 40619,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AHINSAN KUMASI BRANCH"
  },
  {
   "code": 40620,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AGONA ASHANTI BRANCH"
  },
  {
   "code": 40621,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -JUBILEE HOUSE BRANCH"
  },
  {
   "code": 40622,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - AGOGO BRANCH"
  },
  {
   "code": 40623,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NKAWIE BRANCH"
  },
  {
   "code": 40625,
   "name": "GCB BANK LTD",
   "branch": "GCB LTD - HARPER ROAD KUMASI BRANCH"
  },
  {
   "code": 40627,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BANTAMA BRANCH"
  },
  {
   "code": 40628,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TECH JUNCTION KUMASI BRANCH"
  },
  {
   "code": 40629,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MAGAZINE BRANCH"
  },
  {
   "code": 40630,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SUAME BRANCH"
  },
  {
   "code": 40631,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SOFOLINE BRANCH"
  },
  {
   "code": 40701,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SUNYANI BRANCH"
  },
  {
   "code": 40702,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BECHEM BRANCH"
  },
  {
   "code": 40703,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BEREKUM BRANCH"
  },
  {
   "code": 40704,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DORMAA AHENKRO BRANCH"
  },
  {
   "code": 40705,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DUAYAWNKWANTA BRANCH"
  },
  {
   "code": 40706,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - HWIDIEM BRANCH"
  },
  {
   "code": 40707,
   "name": "GCB BANK LTD",
   "branch": "GCB  BANK LTD - GOASO BRANCH"
  },
  {
   "code": 40709,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - MIM BRANCH"
  },
  {
   "code": 40710,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - JAPEKROM BRANCH"
  },
  {
   "code": 40711,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - WENCHI BRANCH"
  },
  {
   "code": 40712,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - KINTAMPO BRANCH"
  },
  {
   "code": 40713,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NKORANZA BRANCH"
  },
  {
   "code": 40715,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TECHIMAN BRANCH"
  },
  {
   "code": 40717,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SANKORE BRANCH"
  },
  {
   "code": 40723,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -SAMPA BRANCH"
  },
  {
   "code": 40724,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TECHIMAN MARKET BRANCH"
  },
  {
   "code": 40725,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SUNYANI MARKET BRANCH"
  },
  {
   "code": 40801,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TAMALE MAIN BRANCH"
  },
  {
   "code": 40802,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -YENDI BRANCH"
  },
  {
   "code": 40803,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - DAMONGO BRANCH"
  },
  {
   "code": 40804,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SALAGA BRANCH"
  },
  {
   "code": 40805,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TAMALE MARKET BRANCH"
  },
  {
   "code": 40806,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BIMBILA BRANCH"
  },
  {
   "code": 40807,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - YEJI BRANCH"
  },
  {
   "code": 40809,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -TAMALE HOSPITAL ROAD BRANCH"
  },
  {
   "code": 40810,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - SABOBA BRANCH"
  },
  {
   "code": 40812,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - ABOABO BRANCH"
  },
  {
   "code": 40901,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - BOLGATANGA  BRANCH"
  },
  {
   "code": 40902,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - NAVRONGO BRANCH"
  },
  {
   "code": 40903,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD -BAWKU BRANCH"
  },
  {
   "code": 40906,
   "name": "GCB BANK LTD",
   "branch": "GCB BANK LTD - WALEWALE BRANCH"
  },
  {
   "code": 50100,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK"
  },
  {
   "code": 50101,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-ACCRA MAIN BRANCH"
  },
  {
   "code": 50109,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TEMA MAIN BRANCH"
  },
  {
   "code": 50111,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-OSU BRANCH"
  },
  {
   "code": 50112,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-FOREIGN BRANCH"
  },
  {
   "code": 50113,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TEMA HABOUR AREA(AFKO) BRANCH"
  },
  {
   "code": 50117,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-ABEKA BRANCH"
  },
  {
   "code": 50122,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-ADENTA BRANCH"
  },
  {
   "code": 50123,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-SPINTEX BRANCH"
  },
  {
   "code": 50124,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-WINNEBA ROAD BRANCH"
  },
  {
   "code": 50128,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-NORTH INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 50129,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TEMA COMMUNITY 9 BRANCH"
  },
  {
   "code": 50131,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-HEAD OFFICE BRANCH"
  },
  {
   "code": 50132,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-DANSOMAN BRANCH"
  },
  {
   "code": 50134,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - ASHAIMAN BRANCH"
  },
  {
   "code": 50135,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK- AIRPORT CITY BRANCH"
  },
  {
   "code": 50136,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-EAST LEGON BRANCH"
  },
  {
   "code": 50138,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK- LAW COURT COMPLEX BRANCH"
  },
  {
   "code": 50139,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - PARLIAMENT HOUSE BRANCH"
  },
  {
   "code": 50146,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - MADINA BRANCH"
  },
  {
   "code": 50147,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-MAKOLA  BRANCH"
  },
  {
   "code": 50149,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-ACCRA NEW TOWN BRANCH"
  },
  {
   "code": 50152,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-ACHIMOTA BRANCH"
  },
  {
   "code": 50204,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-KOFORIDUA BRANCH"
  },
  {
   "code": 50218,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-AKIM ODA BRANCH"
  },
  {
   "code": 50310,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-CAPE COAST BRANCH"
  },
  {
   "code": 50327,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-DUNKWA ON-OFFIN BRANCH"
  },
  {
   "code": 50337,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-SWEDRU BRANCH"
  },
  {
   "code": 50351,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-KASOA BRANCH"
  },
  {
   "code": 50407,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TAKORADI BRANCH"
  },
  {
   "code": 50434,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - TARKWA BRANCH"
  },
  {
   "code": 50503,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-HO BRANCH"
  },
  {
   "code": 50535,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - HOHOE BRANCH"
  },
  {
   "code": 50541,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - NKWANTA BRANCH"
  },
  {
   "code": 50605,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-KUMASI BRANCH"
  },
  {
   "code": 50619,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-KUMASI CENTRAL BRANCH"
  },
  {
   "code": 50621,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-OBUASI BRANCH"
  },
  {
   "code": 50632,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - ASOKWA BRANCH"
  },
  {
   "code": 50643,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - ASHANTI MAMPONG BRANCH"
  },
  {
   "code": 50645,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - SUAME BRANCH"
  },
  {
   "code": 50648,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - KUMASI CITY MALL BRANCH"
  },
  {
   "code": 50650,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TANOSO BRANCH"
  },
  {
   "code": 50706,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-SUNYANI BRANCH"
  },
  {
   "code": 50715,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TECHIMAN BRANCH"
  },
  {
   "code": 50725,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-WENCHI BRANCH"
  },
  {
   "code": 50726,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-KINTAMPO BRANCH"
  },
  {
   "code": 50808,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-TAMALE BRANCH"
  },
  {
   "code": 50840,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - SAWLA BRANCH"
  },
  {
   "code": 50842,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - UDS TAMALE BRANCH"
  },
  {
   "code": 50844,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK - YENDI BRANCH"
  },
  {
   "code": 50902,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-BOLGATANGA BRANCH"
  },
  {
   "code": 51014,
   "name": "NATIONAL INVESTMENT BANK",
   "branch": "NATIONAL INVESTMENT BANK-WA BRANCH"
  },
  {
   "code": 60101,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-HEAD OFFICE-RIDGE BRANCH"
  },
  {
   "code": 60102,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-ACCRA CENTRAL BRANCH"
  },
  {
   "code": 60103,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TEMA BRANCH"
  },
  {
   "code": 60106,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-ABOSSEY OKAI BRANCH"
  },
  {
   "code": 60107,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-RING ROAD BRANCH"
  },
  {
   "code": 60108,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-DZORWULU 1 MOTORWAY BRANCH"
  },
  {
   "code": 60109,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-DZORWULU 2 BRANCH"
  },
  {
   "code": 60110,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-MADINA BRANCH"
  },
  {
   "code": 60111,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-EAST LEGON 1 BRANCH"
  },
  {
   "code": 60112,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-EAST LEGON 2 BRANCH"
  },
  {
   "code": 60113,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TESHIE BRANCH"
  },
  {
   "code": 60114,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-SPINTEX ROAD BRANCH"
  },
  {
   "code": 60119,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TEMA INDUSTRIA AREA BRANCH"
  },
  {
   "code": 60129,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 60402,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TAKORADI BRANCH"
  },
  {
   "code": 60403,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD - TARKWA BRANCH"
  },
  {
   "code": 60405,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TAKORADI BRANCH"
  },
  {
   "code": 60601,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-KUMASI-ADUM BRANCH"
  },
  {
   "code": 60602,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-SUAME BRANCH"
  },
  {
   "code": 60603,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-KNUST BRANCH"
  },
  {
   "code": 60605,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TANOSO BRANCH"
  },
  {
   "code": 60606,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-ALABAR BRANCH"
  },
  {
   "code": 60801,
   "name": "UNITED BANK FOR AFRICA (GH) LTD",
   "branch": "UNITED BANK FOR AFRICA(GH) LTD-TAMALE BRANCH"
  },
  {
   "code": 70101,
   "name": "APEX BANK",
   "branch": "APEX BANK - HEAD OFFICE-SOUTH RIDGE ACCRA"
  },
  {
   "code": 70102,
   "name": "APEX BANK",
   "branch": "APEX BANK - ACCRA CENTRE-ACCRA"
  },
  {
   "code": 70103,
   "name": "APEX BANK",
   "branch": "APEX BANK - NYAKROM RURAL BANK LTD-NYAKROM"
  },
  {
   "code": 70104,
   "name": "APEX BANK",
   "branch": "APEX BANK - MANYA KROBO RURAL BANK LTD-ODUMASE-KROBO"
  },
  {
   "code": 70106,
   "name": "APEX BANK",
   "branch": "APEX BANK - ANUM RURAL BANK LTD-ANUM"
  },
  {
   "code": 70107,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKUAPEM RURAL BANK LTD-MAMFE"
  },
  {
   "code": 70108,
   "name": "APEX BANK",
   "branch": "APEX BANK - DANGBE RURAL BANK LTD-PRAMPRAM"
  },
  {
   "code": 70109,
   "name": "APEX BANK",
   "branch": "APEX BANK - SHAI RURAL BANK LTD-DODOWA"
  },
  {
   "code": 70110,
   "name": "APEX BANK",
   "branch": "APEX BANK - ADA RURAL BANK LTD-KASSEH"
  },
  {
   "code": 70111,
   "name": "APEX BANK",
   "branch": "APEX BANK - BRAKWA BRAMAN RURAL BANK LTD-BRAKWA"
  },
  {
   "code": 70114,
   "name": "APEX BANK",
   "branch": "APEX BANK - AGONA RURAL BANK LTD-KWANYAKU"
  },
  {
   "code": 70115,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKYEPIM RURAL BANK LTD-GOMOA-DAW"
  },
  {
   "code": 70116,
   "name": "APEX BANK",
   "branch": "APEX BANK - AWUTU EMASA RURAL BANK LTD-AWUMASA"
  },
  {
   "code": 70117,
   "name": "APEX BANK",
   "branch": "APEX BANK - GA RURAL BANK LTD-AMASAMAN"
  },
  {
   "code": 70118,
   "name": "APEX BANK",
   "branch": "APEX BANK - ABOKOBI RURAL BANK LTD-ABOKOBI"
  },
  {
   "code": 70119,
   "name": "APEX BANK",
   "branch": "APEX BANK - BAWJIASE AREA RURAL BANK LTD-AWUTU BAWJIASE"
  },
  {
   "code": 70120,
   "name": "APEX BANK",
   "branch": "APEX BANK - AGAVE RURAL BANK LTD-DABALE"
  },
  {
   "code": 70121,
   "name": "APEX BANK",
   "branch": "APEX BANK - MEPE AREA RURAL BANK LTD-MEPE"
  },
  {
   "code": 70122,
   "name": "APEX BANK",
   "branch": "APEX BANK - UNION RURAL BANK LTD-SENYA BREKU"
  },
  {
   "code": 70123,
   "name": "APEX BANK",
   "branch": "APEX BANK - ANLO RURAL BANK LTD-ANLOGA"
  },
  {
   "code": 70124,
   "name": "APEX BANK",
   "branch": "APEX BANK - ODUPONGKPEHE RURAL BANK LTD-KASOA"
  },
  {
   "code": 70125,
   "name": "APEX BANK",
   "branch": "APEX BANK - LA COMMUNITY BANK LTD-LA"
  },
  {
   "code": 70126,
   "name": "APEX BANK",
   "branch": "APEX LINK CENTRE - CEDI HOUSECED HOUSE"
  },
  {
   "code": 70127,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASUOGYAMAN RURAL BANK LTD-ACCRA"
  },
  {
   "code": 70128,
   "name": "APEX BANK",
   "branch": "APEX BANK - CITIZEN RURAL BANK LTD-ACCRA"
  },
  {
   "code": 70129,
   "name": "APEX BANK",
   "branch": "APEX BANK - OYIBI AREA RURAL BANK LIMITED"
  },
  {
   "code": 70130,
   "name": "APEX BANK",
   "branch": "APEX BANK - MICROFIN RURAL BANK LIMITED"
  },
  {
   "code": 70131,
   "name": "APEX BANK",
   "branch": "APEX BANK - GOMOA COMMUNITY BANK"
  },
  {
   "code": 70201,
   "name": "APEX BANK",
   "branch": "APEX BANK KOFORIDUA CENTRE-KOFORIDUA"
  },
  {
   "code": 70203,
   "name": "APEX BANK",
   "branch": "APEX BANK - KWAHU RURAL BANK LTD-KWAHU PEPEASE"
  },
  {
   "code": 70204,
   "name": "APEX BANK",
   "branch": "APEX BANK - SOUTH BIRIM RURAL BANK LTD-ACHIASE"
  },
  {
   "code": 70205,
   "name": "APEX BANK",
   "branch": "APEX BANK - UPPER MANYA KRO RURAL BANK LTD-ASESEWA"
  },
  {
   "code": 70206,
   "name": "APEX BANK",
   "branch": "APEX BANK - KWAHU PRASO RURAL BANK LTD-KWAHU PRASO"
  },
  {
   "code": 70207,
   "name": "APEX BANK",
   "branch": "APEX BANK - ATIWA RURAL BANK LTD-KWABENG"
  },
  {
   "code": 70208,
   "name": "APEX BANK",
   "branch": "APEX BANK - MUMUADA RURAL BANK LTD-OSINO"
  },
  {
   "code": 70209,
   "name": "APEX BANK",
   "branch": "APEX BANK - AFRAM RURAL BANK LTD-TEASE"
  },
  {
   "code": 70210,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKIM BOSOME RURAL BANK LTD-AKIM SWEDRU"
  },
  {
   "code": 70211,
   "name": "APEX BANK",
   "branch": "APEX BANK - MPONUA RURAL BANK LTD-AMUANA PRASO"
  },
  {
   "code": 70212,
   "name": "APEX BANK",
   "branch": "APEX BANK - KWAEBIBIREM RURAL BANK LTD-ASUOM"
  },
  {
   "code": 70213,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKYEM MANSA RURAL BANK LTD-AYIREBI"
  },
  {
   "code": 70214,
   "name": "APEX BANK",
   "branch": "APEX BANK - SOUTH AKIM RURAL BANK LTD-NANKESE"
  },
  {
   "code": 70215,
   "name": "APEX BANK",
   "branch": "APEX BANK - ODWEN-ANOMA RURAL BANK LTD-KWEEHWEE"
  },
  {
   "code": 70216,
   "name": "APEX BANK",
   "branch": "APEX BANK - DUMPONG RURAL BANK LTD-OFRAMASE"
  },
  {
   "code": 70217,
   "name": "APEX BANK",
   "branch": "APEX BANK - ADONTEN COMMUNITY BANK LTD-NEW TAFO"
  },
  {
   "code": 70219,
   "name": "APEX BANK",
   "branch": "APEX BANK - SUHUM RURAL BANK"
  },
  {
   "code": 70302,
   "name": "APEX BANK",
   "branch": "APEX BANK - ENYAN DENKYIRA RURAL BANK LTD-ENYAN DENKYIRA"
  },
  {
   "code": 70303,
   "name": "APEX BANK",
   "branch": "APEX BANK - KAKUM RURAL BANK LTD-ELMINA"
  },
  {
   "code": 70304,
   "name": "APEX BANK",
   "branch": "APEX BANK - NYANKUMASE AHENKRO RURAL BANK LTD-FANTI NYANKUMASE"
  },
  {
   "code": 70305,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASSINMAN RURAL BANK LTD-ASSIN MANSO"
  },
  {
   "code": 70306,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKATAKYIMAN RURAL BANK LTD-KOMENDA"
  },
  {
   "code": 70307,
   "name": "APEX BANK",
   "branch": "APEX BANK - EKUMFIMAN RURAL BANK LTD-ESSUEHYIA"
  },
  {
   "code": 70308,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKOTI RURAL BANK LTD-ASSIN AKROPONG"
  },
  {
   "code": 70309,
   "name": "APEX BANK",
   "branch": "APEX BANK - TWIFO RURAL BANK LTD-TWIFO AGONA"
  },
  {
   "code": 70310,
   "name": "APEX BANK",
   "branch": "APEX BANK - MFANTSIMAN COMMUNITY RURAL BANK LTD-BIRIWA"
  },
  {
   "code": 70401,
   "name": "APEX BANK",
   "branch": "APEX BANK-TAKORADI CENTRE-TAKORADI"
  },
  {
   "code": 70402,
   "name": "APEX BANK",
   "branch": "APEX BANK - ANKOBRA WEST (ESIAMA) RURAL BANK LTD-ESIAMA"
  },
  {
   "code": 70403,
   "name": "APEX BANK",
   "branch": "APEX BANK - AMENFIMAN RURAL BANK LTD-WASSA AKROPONG"
  },
  {
   "code": 70404,
   "name": "APEX BANK",
   "branch": "APEX BANK - NZEMA MANLE RURAL BANK LTD-AWIEBO"
  },
  {
   "code": 70405,
   "name": "APEX BANK",
   "branch": "APEX BANK - JAPEX BANK - OMORO RURAL BANK LTD-TIKOBO NO. 1"
  },
  {
   "code": 70406,
   "name": "APEX BANK",
   "branch": "APEX BANK - LOWER PRA RURAL BANK LTD-SHAMA"
  },
  {
   "code": 70407,
   "name": "APEX BANK",
   "branch": "APEX BANK - FIASEMAN (BOGOSO AREA) RURAL BANK LTD-BOGOSO"
  },
  {
   "code": 70409,
   "name": "APEX BANK",
   "branch": "APEX BANK - AHANTAMAN RURAL BANK LTD-AGONA NKWANTA"
  },
  {
   "code": 70502,
   "name": "APEX BANK",
   "branch": "APEX BANK - NORTH TONGU RURAL BANK LTD-ADIDOME"
  },
  {
   "code": 70503,
   "name": "APEX BANK",
   "branch": "APEX BANK - AVENOR RURAL BANK LTD-AKATSI"
  },
  {
   "code": 70504,
   "name": "APEX BANK",
   "branch": "APEX BANK - UNITY RURAL BANK LTD-ZIOPE"
  },
  {
   "code": 70505,
   "name": "APEX BANK",
   "branch": "APEX BANK - WETO RURAL BANK LTD-KPEVE"
  },
  {
   "code": 70506,
   "name": "APEX BANK",
   "branch": "APEX BANK - BUTAWU RURAL BANK LTD-HO"
  },
  {
   "code": 70601,
   "name": "APEX BANK",
   "branch": "APEX BANK- KUMASIKUMASI"
  },
  {
   "code": 70602,
   "name": "APEX BANK",
   "branch": "APEX BANK - ATWIMA RURAL BANK LTD-FOASE"
  },
  {
   "code": 70603,
   "name": "APEX BANK",
   "branch": "APEX BANK - SEKYEDUMASI RURAL BANK LTD-SEKYEDUMASI"
  },
  {
   "code": 70604,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASOKORE RURAL BANK LTD-ASOKRE"
  },
  {
   "code": 70605,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASANTE AKYEM RURAL BANK LTD-JUANSA"
  },
  {
   "code": 70606,
   "name": "APEX BANK",
   "branch": "APEX BANK - KWAMANMAN RURAL BANK LTD-KWAMANG"
  },
  {
   "code": 70607,
   "name": "APEX BANK",
   "branch": "APEX BANK - ADANSI RURAL BANK LTD-FOMENA"
  },
  {
   "code": 70608,
   "name": "APEX BANK",
   "branch": "APEX BANK - KUMAWUMAN RURAL BANK LTD-KUMAWU"
  },
  {
   "code": 70609,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKROFUOM AREA RURAL BANK LTD-AKROFUOM"
  },
  {
   "code": 70610,
   "name": "APEX BANK",
   "branch": "APEX BANK - AHAFO ANO PREMIER RURAL BANK LTD-WIOSO"
  },
  {
   "code": 70611,
   "name": "APEX BANK",
   "branch": "APEX BANK - BOSOMTWI RURAL BANK LTD-KUNTANASE"
  },
  {
   "code": 70612,
   "name": "APEX BANK",
   "branch": "APEX BANK - OKOMFO ANOKYE RURAL BANK LTD-WIAMOASE"
  },
  {
   "code": 70613,
   "name": "APEX BANK",
   "branch": "APEX BANK - DENKYIRAMAN RURAL BANK LTD-AYAMFURI"
  },
  {
   "code": 70614,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASAWINSO RURAL BANK LTD-SEFWI-ASAWINSO"
  },
  {
   "code": 70615,
   "name": "APEX BANK",
   "branch": "APEX BANK - ODOTOBRI RURAL BANK LTD-JACOBU"
  },
  {
   "code": 70616,
   "name": "APEX BANK",
   "branch": "APEX BANK - ATWIMA KWANWOMA RURAL BANK LTD-PAKYI NO. 2"
  },
  {
   "code": 70618,
   "name": "APEX BANK",
   "branch": "APEX BANK - SEKYERE RURAL BANK LTD-JAMASI"
  },
  {
   "code": 70619,
   "name": "APEX BANK",
   "branch": "APEX BANK - AMANANO RURAL BANK LTD-NYINAHIM"
  },
  {
   "code": 70620,
   "name": "APEX BANK",
   "branch": "APEX BANK - AMASIE WEST RURAL BANK LTD-ANTOAKROM"
  },
  {
   "code": 70621,
   "name": "APEX BANK",
   "branch": "APEX BANK - JUABEN RURAL BANK LTD-JUABEN"
  },
  {
   "code": 70622,
   "name": "APEX BANK",
   "branch": "APEX BANK - YAPRA RURAL BANK LTD-PRANG"
  },
  {
   "code": 70623,
   "name": "APEX BANK",
   "branch": "APEX BANK - NWABIAGYA RURAL BANK LTD-BAREKESE"
  },
  {
   "code": 70624,
   "name": "APEX BANK",
   "branch": "APEX BANK - ATWIMA MPONUA RURAL BANK LTD-TOASE"
  },
  {
   "code": 70625,
   "name": "APEX BANK",
   "branch": "APEX BANK - OTUASEKAN RURAL BANK LTD-KOFIASE"
  },
  {
   "code": 70626,
   "name": "APEX BANK",
   "branch": "APEX BANK - UPPER AMENFI RURAL BANK LTD-ANKWAWSO"
  },
  {
   "code": 70627,
   "name": "APEX BANK",
   "branch": "APEX BANK - BIA-TORYA RURAL BANK LTD-BONSU-NKWANTA"
  },
  {
   "code": 70628,
   "name": "APEX BANK",
   "branch": "APEX BANK - AMATIN AND KASEI COMMUNITY BANK LTD-KASEI"
  },
  {
   "code": 70629,
   "name": "APEX BANK",
   "branch": "APEX BANK - NSUTAMAN RURAL BANK LTD-NSUTA"
  },
  {
   "code": 70630,
   "name": "APEX BANK",
   "branch": "APEX BANK - SEFWIMAN RURAL BANK LTD-SEFWI-ASAW"
  },
  {
   "code": 70631,
   "name": "APEX BANK",
   "branch": "APEX BANK - OFFINSO RURAL BANK LTD-KUMASI"
  },
  {
   "code": 70632,
   "name": "APEX BANK",
   "branch": "APEX BANK - EJURAMAN RURAL BANK LTD-KUMASI"
  },
  {
   "code": 70633,
   "name": "APEX BANK",
   "branch": "APEX BANK - BOSOME FREHO RURAL BANK LTD-KUMASI"
  },
  {
   "code": 70635,
   "name": "APEX BANK",
   "branch": "APEX BANK - YAA ASANTEWAA RURAL BANK LTD"
  },
  {
   "code": 70636,
   "name": "APEX BANK",
   "branch": "APEX BANK - TEPAMAN RURAL BANK LTD - TEPAMAN"
  },
  {
   "code": 70637,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASOKORE MAMPONG RURAL BANK"
  },
  {
   "code": 70638,
   "name": "APEX BANK",
   "branch": "APEX BANK - AKUMADAN RURAL BANK"
  },
  {
   "code": 70701,
   "name": "APEX BANK",
   "branch": "APEX BANK -SUNYANI CENTRE-SUNYANI"
  },
  {
   "code": 70702,
   "name": "APEX BANK",
   "branch": "APEX BANK - KINTAMPO RURAL BANK LTD-KINTAMPO"
  },
  {
   "code": 70703,
   "name": "APEX BANK",
   "branch": "APEX BANK - WAMFIE RURAL BANK LTD-WAMFIE"
  },
  {
   "code": 70704,
   "name": "APEX BANK",
   "branch": "APEX BANK - SUMA RURAL BANK LTD-SUMA AHENKRO"
  },
  {
   "code": 70706,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASUTIFI RURAL BANK LTD-ACERENSUA"
  },
  {
   "code": 70707,
   "name": "APEX BANK",
   "branch": "APEX BANK - NKORANZA KWABRE RURAL BANK LTD-AKUMA"
  },
  {
   "code": 70708,
   "name": "APEX BANK",
   "branch": "APEX BANK - FIAGYA RURAL BANK LTD-BUSUNYA"
  },
  {
   "code": 70709,
   "name": "APEX BANK",
   "branch": "APEX BANK - BOMAA AREA RURAL BANK LTD-BOMAA"
  },
  {
   "code": 70710,
   "name": "APEX BANK",
   "branch": "APEX BANK - BADUMAN RURAL BANK LTD-BADU"
  },
  {
   "code": 70711,
   "name": "APEX BANK",
   "branch": "APEX BANK - NSOATREMAN RURAL BANK LTD-NSOATRE"
  },
  {
   "code": 70712,
   "name": "APEX BANK",
   "branch": "APEX BANK - DERMA RURAL BANK LTD-DERMA"
  },
  {
   "code": 70714,
   "name": "APEX BANK",
   "branch": "APEX BANK - NKORANMAN RURAL BANK LTD-SEIKWA"
  },
  {
   "code": 70715,
   "name": "APEX BANK",
   "branch": "APEX BANK - KAASEMAN RURAL BANK LTD-KAASE"
  },
  {
   "code": 70716,
   "name": "APEX BANK",
   "branch": "APEX BANK - AHAFO COMMUNITY RURAL BANK LTD-KUKUOM"
  },
  {
   "code": 70717,
   "name": "APEX BANK",
   "branch": "APEX BANK - DROBO COMMUNITY RURAL BANK LTD-DROBO"
  },
  {
   "code": 70718,
   "name": "APEX BANK",
   "branch": "APEX BANK - NAFANA RURAL BANK LTD-SAMPA"
  },
  {
   "code": 70719,
   "name": "APEX BANK",
   "branch": "APEX BANK - CAPITAL RURAL BANK LTD-ABESIM"
  },
  {
   "code": 70720,
   "name": "APEX BANK",
   "branch": "APEX BANK - ATWEABAN RURAL BANK LTD-SUNYANI"
  },
  {
   "code": 70721,
   "name": "APEX BANK",
   "branch": "APEX BANK - NKRANKWANTA RURAL BANK LTD-SUNYANI"
  },
  {
   "code": 70722,
   "name": "APEX BANK",
   "branch": "APEX BANK - WENCHI RURAL BANK LTD"
  },
  {
   "code": 70723,
   "name": "APEX BANK",
   "branch": "APEX BANK - BOMOSADU RURAL BANK LTD"
  },
  {
   "code": 70801,
   "name": "APEX BANK",
   "branch": "APEX BANK - TAMALE CENTRE-TAMALE"
  },
  {
   "code": 70802,
   "name": "APEX BANK",
   "branch": "APEX BANK - BONZALI RURAL BANK LTD-KUMBUNGU"
  },
  {
   "code": 70803,
   "name": "APEX BANK",
   "branch": "APEX BANK - BORIMANGA RURAL BANK LTD-SAVELEGU"
  },
  {
   "code": 70804,
   "name": "APEX BANK",
   "branch": "APEX BANK - BUWUULONSO RURAL BANK LTD-TAMALE"
  },
  {
   "code": 70805,
   "name": "APEX BANK",
   "branch": "APEX BANK - TIZAA RURAL BANK LTD-TAMALE"
  },
  {
   "code": 70806,
   "name": "APEX BANK",
   "branch": "APEX BANK - ZABZUGU RURAL BANK LTD"
  },
  {
   "code": 70901,
   "name": "APEX BANK",
   "branch": "APEX BANK - BOLGA CENTRE-BOLGATANGA"
  },
  {
   "code": 70902,
   "name": "APEX BANK",
   "branch": "APEX BANK - NAARA RURAL BANK LTD-PAGA"
  },
  {
   "code": 70903,
   "name": "APEX BANK",
   "branch": "APEX BANK - BESSFA RURAL BANK LTD-GARU"
  },
  {
   "code": 70904,
   "name": "APEX BANK",
   "branch": "APEX BANK - WEST MANPRUSI COMMUNITY BANK LTD-WALEWALE"
  },
  {
   "code": 70905,
   "name": "APEX BANK",
   "branch": "APEX BANK - EAST MANPRUSI COMMUNITY BABK LTD-GAMBAGA"
  },
  {
   "code": 70906,
   "name": "APEX BANK",
   "branch": "APEX BANK - BUILSA COMMUNITY BANK LTD-SANDEMA"
  },
  {
   "code": 70907,
   "name": "APEX BANK",
   "branch": "APEX BANK - TOENDE RURAL BANK LTD-ZIBILLA"
  },
  {
   "code": 70908,
   "name": "APEX BANK",
   "branch": "APEX BANK - BONGO RURAL BANK LTD-BOLGATANGA"
  },
  {
   "code": 71001,
   "name": "APEX BANK",
   "branch": "APEX BANK -WA CENTRE-WA"
  },
  {
   "code": 71002,
   "name": "APEX BANK",
   "branch": "APEX BANK - NANDOM RURAL BANK LTD-NANDOM"
  },
  {
   "code": 71003,
   "name": "APEX BANK",
   "branch": "APEX BANK - SONZELE RURAL BANK LTD-JIRAPA"
  },
  {
   "code": 71004,
   "name": "APEX BANK",
   "branch": "APEX BANK - SISSALA RURAL BANK LTD-TUMA"
  },
  {
   "code": 71005,
   "name": "APEX BANK",
   "branch": "APEX BANK - LAWRA RURAL BANK LTD-WA"
  },
  {
   "code": 71101,
   "name": "APEX BANK",
   "branch": "APEX BANK - APEX BANK -HOHOE CENTRE-HOHOE"
  },
  {
   "code": 71102,
   "name": "APEX BANK",
   "branch": "APEX BANK - NORTH VOLTA RURAL BANK LTD-GUAMAN"
  },
  {
   "code": 71103,
   "name": "APEX BANK",
   "branch": "APEX BANK - ASUBONTEN RURAL BANK LTD-WORAWORA"
  },
  {
   "code": 71104,
   "name": "APEX BANK",
   "branch": "APEX BANK - GBI RURAL BANK LTD-HOHOE"
  },
  {
   "code": 71105,
   "name": "APEX BANK",
   "branch": "APEX BANK - KPASSA RURAL BANK LTD-HOHOE"
  },
  {
   "code": 71106,
   "name": "APEX BANK",
   "branch": "APEX BANK - KAAKYE RURAL BANK LTD BRANCH"
  },
  {
   "code": 71107,
   "name": "APEX BANK",
   "branch": "APEX BANK - FREROL RURAL BANK LTD"
  },
  {
   "code": 80010,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK -CORPORATE BANKING"
  },
  {
   "code": 80020,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK -CONSUMER BANKING"
  },
  {
   "code": 80030,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK - PARASTATALS"
  },
  {
   "code": 80040,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK - AGRIC FINANCING"
  },
  {
   "code": 80050,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK - COMMERCIAL BANKING"
  },
  {
   "code": 80060,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- AGRIC VALUE CHAIN"
  },
  {
   "code": 80070,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- BUSINESS FINANCE"
  },
  {
   "code": 80100,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-"
  },
  {
   "code": 80100,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-HEAD OFFICE BRANCH"
  },
  {
   "code": 80101,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 80102,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ADABRAKA BRANCH"
  },
  {
   "code": 80103,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TEMA BRANCH"
  },
  {
   "code": 80104,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TESHIE BRANCH"
  },
  {
   "code": 80105,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KANESHIE BRANCH"
  },
  {
   "code": 80106,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-CEDI HOUSE BRANCH"
  },
  {
   "code": 80107,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-INTERNATIONAL BANKING"
  },
  {
   "code": 80108,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-GULF HOUSE BRANCH"
  },
  {
   "code": 80109,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-DANSOMAN BRANCH"
  },
  {
   "code": 80110,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NUNGUA BRANCH"
  },
  {
   "code": 80111,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KORKORDZOR BRANCH"
  },
  {
   "code": 80112,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-OSU BRANCH"
  },
  {
   "code": 80113,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-MADINA BRANCH"
  },
  {
   "code": 80114,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ABEKALAPAZ BRANCH"
  },
  {
   "code": 80115,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-AGONA SWEDRU BRANCH"
  },
  {
   "code": 80116,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ADB HOUSE BRANCH"
  },
  {
   "code": 80117,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ACHIMOTA BRANCH"
  },
  {
   "code": 80118,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SPINTEX ROAD BRANCH"
  },
  {
   "code": 80119,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-MAKOLA BRANCH"
  },
  {
   "code": 80120,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ACCRA NEW TOWN BRANCH"
  },
  {
   "code": 80121,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK LTD - TEMA MERIDIAN BRANCH"
  },
  {
   "code": 80124,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ASHIAMAN BRANCH"
  },
  {
   "code": 80125,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-DANQUAH CIRCLE BRANCH"
  },
  {
   "code": 80126,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK - NIMA BRANCH"
  },
  {
   "code": 80127,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KASOA BRANCH"
  },
  {
   "code": 80128,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK - WINNEBA BRANCH"
  },
  {
   "code": 80129,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- DIAMOND CEMENT BRANCH"
  },
  {
   "code": 80221,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KOFORIDUA BRANCH"
  },
  {
   "code": 80222,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SUHUM BRANCH"
  },
  {
   "code": 80223,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NKAWKAW BRANCH"
  },
  {
   "code": 80229,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK--ASIAKWA BRANCH"
  },
  {
   "code": 80230,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- KADE BRANCH"
  },
  {
   "code": 80331,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-CAPE COAST BRANCH"
  },
  {
   "code": 80332,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ASSIN FOSO BRANCH"
  },
  {
   "code": 80333,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-UCC BRANCH"
  },
  {
   "code": 80334,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-MANKESSIM BRANCH"
  },
  {
   "code": 80441,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TAKORADI BRANCH"
  },
  {
   "code": 80444,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ENCHI BRANCH"
  },
  {
   "code": 80445,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- TAKORADI HARBOUR BRANCH"
  },
  {
   "code": 80446,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-AGONA NKWANTA BRANCH"
  },
  {
   "code": 80447,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- GREL"
  },
  {
   "code": 80448,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-JUABOSO BRANCH"
  },
  {
   "code": 80552,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-HO BRANCH"
  },
  {
   "code": 80553,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KPANDO BRANCH"
  },
  {
   "code": 80554,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NKWANTA BRANCH"
  },
  {
   "code": 80555,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-DENU BRANCH"
  },
  {
   "code": 80556,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-JUAPONG BRANCH"
  },
  {
   "code": 80557,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SOGAKOPE BRANCH"
  },
  {
   "code": 80558,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- KPEVE BRANCH"
  },
  {
   "code": 80559,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- KPASSA BRANCH"
  },
  {
   "code": 80661,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KUMASI ADUM BRANCH"
  },
  {
   "code": 80662,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-BEKWAI BRANCH"
  },
  {
   "code": 80663,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NEW EDUBIASE BRANCH"
  },
  {
   "code": 80664,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-OBUASI BRANCH"
  },
  {
   "code": 80665,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KUMASI CENTRAL  MARKET BRANCH"
  },
  {
   "code": 80666,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KUMASI ASOKWA BRANCH"
  },
  {
   "code": 80667,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KUMASI PREMPEH 11 STREET BRANCH"
  },
  {
   "code": 80668,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-AMAKOM BRANCH"
  },
  {
   "code": 80684,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SEFWI WIAWSO BRANCH"
  },
  {
   "code": 80685,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-ATEBUBU BRANCH"
  },
  {
   "code": 80686,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-BONSO NKWANTA BRANCH"
  },
  {
   "code": 80687,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SEFWI ESSAM BRANCH"
  },
  {
   "code": 80771,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-SUNYANI BRANCH"
  },
  {
   "code": 80772,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-DORMAA AHENKRO BRANCH"
  },
  {
   "code": 80774,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-BEREKUM  BRANCH"
  },
  {
   "code": 80775,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NKORANSAH BRANCH"
  },
  {
   "code": 80776,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TECHIMAN BRANCH"
  },
  {
   "code": 80777,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-GOASO BRANCH"
  },
  {
   "code": 80778,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KWAPONG BRANCH"
  },
  {
   "code": 80779,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-KENYASE BRANCH"
  },
  {
   "code": 80881,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TAMALE BRANCH"
  },
  {
   "code": 80882,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-TAMALE ABOABO BRANCH"
  },
  {
   "code": 80883,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-YENDI BRANCH"
  },
  {
   "code": 80888,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- - BOLE BRANCH"
  },
  {
   "code": 80889,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRIC DEVELOPMENT BANK - KALADAN BRANCH"
  },
  {
   "code": 80890,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- - BUIPE BRANCH"
  },
  {
   "code": 80897,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- SAVELUGU BRANCH"
  },
  {
   "code": 80991,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-BOLGATANGA BRANCH"
  },
  {
   "code": 80992,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-BAWKU BRANCH"
  },
  {
   "code": 80993,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-NAVRONGO BRANCH"
  },
  {
   "code": 80994,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- TUMU BRANCH"
  },
  {
   "code": 80995,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-WA BRANCH"
  },
  {
   "code": 80996,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- WALEWALE BRANCH"
  },
  {
   "code": 81095,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK- WA BRANCH"
  },
  {
   "code": 81151,
   "name": "AGRICULTURAL DEVELOPMENT BANK",
   "branch": "AGRICULTURAL DEVELOPMENT BANK-HOHOE BRANCH"
  },
  {
   "code": 90101,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - ACCRA MAIN BRANCH"
  },
  {
   "code": 90102,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - NORTH INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 90103,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TUDU BRANCH"
  },
  {
   "code": 90104,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - ACCRA NEW TOWN BRANCH"
  },
  {
   "code": 90105,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - FAANOFA BRANCH"
  },
  {
   "code": 90106,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TEMA COMMUNITY TWO"
  },
  {
   "code": 90107,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - OSU BRANCH"
  },
  {
   "code": 90108,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - OKAISHIE"
  },
  {
   "code": 90109,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - KANASHIE"
  },
  {
   "code": 90110,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TEMA FISHING HARBOUR"
  },
  {
   "code": 90114,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - PREMIER TOWERS"
  },
  {
   "code": 90115,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - HEAD OFFICE"
  },
  {
   "code": 90117,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - SPINTEX ROAD BRANCH"
  },
  {
   "code": 90118,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - MADINA BRANCH"
  },
  {
   "code": 90119,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - KASOA BRANCH"
  },
  {
   "code": 90120,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TEMA COMMUNITY ONE BRANCH"
  },
  {
   "code": 90121,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD- ASHIAMAN BRANCH"
  },
  {
   "code": 90122,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - EAST LEGON BRANCH"
  },
  {
   "code": 90123,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - AIRPORT CITY BRANCH"
  },
  {
   "code": 90124,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - DANSOMAN BRANCH"
  },
  {
   "code": 90125,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD -KANESHIE MARKET BRANCH"
  },
  {
   "code": 90126,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 90201,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - KOFORIDUA"
  },
  {
   "code": 90202,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - AKIM ODA BRANCH"
  },
  {
   "code": 90301,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - CAPE COAST BRANCH"
  },
  {
   "code": 90302,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - DUNKWA BRANCH"
  },
  {
   "code": 90401,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TAKORADI BRANCH"
  },
  {
   "code": 90404,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TARKWA BRANCH"
  },
  {
   "code": 90411,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD- TAKORADI MARKET CIRCLE BRANCH"
  },
  {
   "code": 90501,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - HO BRANCH"
  },
  {
   "code": 90601,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - ADUM BRANCH"
  },
  {
   "code": 90602,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - KUMASI CENTRAL BRANCH"
  },
  {
   "code": 90603,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - BIBIANI BRANCH"
  },
  {
   "code": 90605,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - ASAFO BRANCH"
  },
  {
   "code": 90606,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - SUAMI BRANCH"
  },
  {
   "code": 90607,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - KEJETIA BRANCH"
  },
  {
   "code": 90701,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - SUNYANI BRANCH"
  },
  {
   "code": 90741,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - BEREKUM BRANCH"
  },
  {
   "code": 90801,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - TAMALE BRANCH"
  },
  {
   "code": 90901,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - BOLGATANGA BRANCH"
  },
  {
   "code": 91001,
   "name": "SOCIETE GENERAL GHANA LTD",
   "branch": "SOCIETE GENERALE GHANA LTD - WA BRANCH"
  },
  {
   "code": 100100,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD"
  },
  {
   "code": 100101,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ACCRA BRANCH"
  },
  {
   "code": 100102,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TEMA BRANCH"
  },
  {
   "code": 100103,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-RIDGE BRANCH"
  },
  {
   "code": 100104,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ADABRAKA"
  },
  {
   "code": 100105,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-KANESHIE"
  },
  {
   "code": 100106,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ABEKA BRANCH"
  },
  {
   "code": 100107,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-NORTH INDUSTRIAL"
  },
  {
   "code": 100108,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TEMA EAST"
  },
  {
   "code": 100109,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ACHIMOTA"
  },
  {
   "code": 100110,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ABOSEY OKAI"
  },
  {
   "code": 100111,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-SOUTH INDUSTRIAL AREA"
  },
  {
   "code": 100112,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-OSU"
  },
  {
   "code": 100113,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD - LABONE"
  },
  {
   "code": 100114,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-AIRPORT CITY"
  },
  {
   "code": 100115,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK - JUNCTION MALL BRANCH"
  },
  {
   "code": 100116,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD - East Legon Branch"
  },
  {
   "code": 100117,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD - OXFORD STREET"
  },
  {
   "code": 100118,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD- SPINTEX ROAD"
  },
  {
   "code": 100119,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD - SAKAMAN BRANCH"
  },
  {
   "code": 100122,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-MADINA"
  },
  {
   "code": 100204,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-KOFORIDUA"
  },
  {
   "code": 100401,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TAKORADI"
  },
  {
   "code": 100402,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TARKWA"
  },
  {
   "code": 100501,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD - KASOA"
  },
  {
   "code": 100601,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-KUMASI"
  },
  {
   "code": 100602,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-BIBIANI"
  },
  {
   "code": 100603,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ASAFO"
  },
  {
   "code": 100604,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-BANTAMA"
  },
  {
   "code": 100605,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-ADUM"
  },
  {
   "code": 100606,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-KONONGO"
  },
  {
   "code": 100701,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TECHIMAN"
  },
  {
   "code": 100801,
   "name": "UNIVERSAL MERCHANT BANK (GH) LTD",
   "branch": "UNIVERSAL MERCHANT BANK (GH) LTD-TAMALE"
  },
  {
   "code": 110100,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK"
  },
  {
   "code": 110101,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-EBANKESE BRANCH"
  },
  {
   "code": 110103,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK GH LTD-ACCRA CENTRAL"
  },
  {
   "code": 110104,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-RIDGE"
  },
  {
   "code": 110105,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-TEMA"
  },
  {
   "code": 110107,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-LEGON"
  },
  {
   "code": 110108,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-ABOSEY OKAI"
  },
  {
   "code": 110109,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-TUDU"
  },
  {
   "code": 110116,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD- BAATSONA"
  },
  {
   "code": 110117,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-PRIVATE BANKING"
  },
  {
   "code": 110118,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-ASHIAMAN"
  },
  {
   "code": 110119,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-POST OFFICE SQUARE BRANCH"
  },
  {
   "code": 110120,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK - ADABRAKA BRANCH"
  },
  {
   "code": 110121,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD - DANSOMAN BRANCH"
  },
  {
   "code": 110122,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- ACCRA NEW TOWN"
  },
  {
   "code": 110123,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD - MADINA"
  },
  {
   "code": 110124,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- ACHIMOTA"
  },
  {
   "code": 110126,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD -ADJIRIGANO BRANCH"
  },
  {
   "code": 110127,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD - Community 25"
  },
  {
   "code": 110215,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-KOFORIDUA"
  },
  {
   "code": 110216,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-ASAMANKESE BRANCH"
  },
  {
   "code": 110301,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  - KASOA BRANCH"
  },
  {
   "code": 110302,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK GHANA LTD-SWEDRU BRANCH"
  },
  {
   "code": 110303,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD - CAPE COAST BRANCH"
  },
  {
   "code": 110304,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-WINNEBA"
  },
  {
   "code": 110401,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-TAKORADI"
  },
  {
   "code": 110402,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-SEFWI WIAWSO"
  },
  {
   "code": 110403,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-SEFWI BEKWAI"
  },
  {
   "code": 110404,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- JUABESO"
  },
  {
   "code": 110405,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- AKONTOMBRA"
  },
  {
   "code": 110406,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- ESSAM"
  },
  {
   "code": 110407,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-ASEMPANAYE"
  },
  {
   "code": 110409,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- ASANKRAGWA"
  },
  {
   "code": 110601,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-KUMASI"
  },
  {
   "code": 110604,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-KUMASI MAGAZINE BRANCH"
  },
  {
   "code": 110605,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD- ASOKWA"
  },
  {
   "code": 110613,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-KNUST"
  },
  {
   "code": 110710,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK (GH) LTD-TECHIMAN"
  },
  {
   "code": 110711,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD - GOASO"
  },
  {
   "code": 110814,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD-TAMALE"
  },
  {
   "code": 110901,
   "name": "REPUBLIC BANK (GH) LTD",
   "branch": "REPUBLIC BANK  (GH) LTD - BOLGA"
  },
  {
   "code": 120101,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-PREMIER TOWERS"
  },
  {
   "code": 120102,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-PATRICE LUMUMBA ROAD"
  },
  {
   "code": 120103,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-TEMA COMMUNITY 1"
  },
  {
   "code": 120104,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK GHANA LTD-KOJO THOMPSON ROAD BRANCH"
  },
  {
   "code": 120105,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK GHANA LTD- SPINTEX"
  },
  {
   "code": 120106,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-GRAPHIC ROAD"
  },
  {
   "code": 120107,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-NORTH INDUSTRIAL AREA"
  },
  {
   "code": 120108,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-LABONE"
  },
  {
   "code": 120109,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK GHANA LTD-EAST LEGON"
  },
  {
   "code": 120110,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-TEMA INDUSTRIAL AREA"
  },
  {
   "code": 120111,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 120112,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-AKOSOMBO BRANCH"
  },
  {
   "code": 120113,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - TEMA METRO BRANCH"
  },
  {
   "code": 120114,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - FREE ZONES BRANCH"
  },
  {
   "code": 120115,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - TRADE FAIR BRANCH"
  },
  {
   "code": 120116,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - SAKAMAN BRANCH"
  },
  {
   "code": 120117,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-PREMIER TOWERS BRANCH"
  },
  {
   "code": 120201,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK GHANA LTD - KOFORIDUA BRANCH"
  },
  {
   "code": 120301,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GHANA) LTD - CAPE COAST BRANCH"
  },
  {
   "code": 120401,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-TAKORADI MAIN"
  },
  {
   "code": 120402,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-TAKORADI HABOUR BRANCH"
  },
  {
   "code": 120403,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - TARKWA"
  },
  {
   "code": 120501,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD - Ho Branch"
  },
  {
   "code": 120601,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-KUMASI MAIN"
  },
  {
   "code": 120602,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD- Adum"
  },
  {
   "code": 120603,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GHANA) LTD - SUAME BRANCH"
  },
  {
   "code": 120701,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD-SUNYANI"
  },
  {
   "code": 120801,
   "name": "ZENITH BANK",
   "branch": "ZENITH BANK (GH) LTD -Tamale"
  },
  {
   "code": 130101,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-HEAD OFFICE BRANCH BRANCH"
  },
  {
   "code": 130102,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TEMA BRANCH BRANCH"
  },
  {
   "code": 130103,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 130104,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TUDU BRANCH"
  },
  {
   "code": 130105,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SILVER STAR BRANCH"
  },
  {
   "code": 130106,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-OSU BRANCH"
  },
  {
   "code": 130107,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-A AND C BRANCH"
  },
  {
   "code": 130108,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TEMA LONG ROOM BRANCH"
  },
  {
   "code": 130109,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-McCARTHY HILL BRANCH"
  },
  {
   "code": 130110,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - ROMAN RIDGE BRANCH"
  },
  {
   "code": 130111,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ABEKA LAPAZ BRANCH"
  },
  {
   "code": 130112,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-DANSOMAN BRANCH"
  },
  {
   "code": 130113,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH)LTD-TEMA COMMUNITY 6 BRANCH"
  },
  {
   "code": 130114,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-DARKUMAN BRANCH"
  },
  {
   "code": 130115,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-LEGON BRANCH"
  },
  {
   "code": 130116,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-SOUTH INDUSTRIAL AREA(SIA) BRANCH"
  },
  {
   "code": 130117,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SPINTEX BRANCH"
  },
  {
   "code": 130118,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ACCRA SHOPPING MALL BRANCH"
  },
  {
   "code": 130119,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TEMA SHOPPING MALL BRANCH"
  },
  {
   "code": 130120,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-WEIJA BRANCH"
  },
  {
   "code": 130121,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH)LTD-ACHIMOTA MILE 7 BRANCH"
  },
  {
   "code": 130122,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-MADINA BRANCH"
  },
  {
   "code": 130123,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-HAATSOO BRANCH"
  },
  {
   "code": 130124,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH)LTD-WESTLANDS BRANCH"
  },
  {
   "code": 130125,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-MOTOR WAY ROUNDABOUT BRANCH"
  },
  {
   "code": 130127,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH)LTD-KOTOBABI BRANCH"
  },
  {
   "code": 130128,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-SAFE BOND BRANCH"
  },
  {
   "code": 130129,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-LABONE BRANCH"
  },
  {
   "code": 130130,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-BURMA CAMP BRANCH"
  },
  {
   "code": 130131,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-REINSURANCE HOUSE BRANCH"
  },
  {
   "code": 130132,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TRUST TOWERS BRANCH"
  },
  {
   "code": 130133,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TESANO BRANCH"
  },
  {
   "code": 130134,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-HOSPITAL ROAD BRANCH"
  },
  {
   "code": 130135,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KASOA BRANCH"
  },
  {
   "code": 130136,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KANTAMANTO BRANCH"
  },
  {
   "code": 130137,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-MADINA CENTRAL BRANCH"
  },
  {
   "code": 130138,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-COMMUNITY1 BRANCH"
  },
  {
   "code": 130139,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SAKUMONO BRANCH"
  },
  {
   "code": 130140,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-HIGH STREET BRANCH"
  },
  {
   "code": 130141,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KWASHIEMAN BRANCH"
  },
  {
   "code": 130142,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KISSEIMAN BRANCH"
  },
  {
   "code": 130145,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ACCION"
  },
  {
   "code": 130146,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-OPPORTUNITY INT. SAVINGS AND LOAN"
  },
  {
   "code": 130147,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-EAST AIRPORT BRANCH"
  },
  {
   "code": 130148,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KWABENYA BRANCH"
  },
  {
   "code": 130149,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-OKPONGLO BRANCH"
  },
  {
   "code": 130150,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ASHAIMAN BRANCH"
  },
  {
   "code": 130153,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - KWAME NKRUMAH AVENUE BRANCH"
  },
  {
   "code": 130154,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ADEHYEMAN SAVINGS &amp; LOAN"
  },
  {
   "code": 130161,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-NBFI-ADVANS GH"
  },
  {
   "code": 130162,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - NEW ABEKA BRANCH"
  },
  {
   "code": 130163,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - GOLDEN PRIDE S&amp;L"
  },
  {
   "code": 130164,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - PRIVATE BANKING"
  },
  {
   "code": 130201,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-NEW ABIREM BRANCH"
  },
  {
   "code": 130401,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TAKORADI BRANCH"
  },
  {
   "code": 130402,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TARKWA BRANCH"
  },
  {
   "code": 130403,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TAKORADI MARKET CIRCLE BRANCH"
  },
  {
   "code": 130404,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-ELUBU BRANCH"
  },
  {
   "code": 130405,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) TAKORADI COLLINS STREET BRANCH"
  },
  {
   "code": 130406,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD - ESIAMA BRANCH"
  },
  {
   "code": 130501,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-AFLAO BRANCH"
  },
  {
   "code": 130601,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KUMASI HARPER ROAD BRANCH"
  },
  {
   "code": 130602,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-JUBILEE HOUSE BRANCH"
  },
  {
   "code": 130603,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KNUST BRANCH"
  },
  {
   "code": 130604,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-ADUM BRANCH"
  },
  {
   "code": 130605,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH)LTD-ABREPO JUNCTION BRANCH"
  },
  {
   "code": 130606,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH)LTD-TAFO BRANCH"
  },
  {
   "code": 130607,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ASH TOWN BRANCH"
  },
  {
   "code": 130608,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-KEJETIA BRANCH"
  },
  {
   "code": 130609,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ABREPO MAIN BRANCH"
  },
  {
   "code": 130610,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK(GH) LTD-BANTAMA BRANCH"
  },
  {
   "code": 130611,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-STADIUM BRANCH"
  },
  {
   "code": 130612,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TANOSO BRANCH"
  },
  {
   "code": 130614,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SSNIT HOUSE BRANCH"
  },
  {
   "code": 130615,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SUAME BRANCH"
  },
  {
   "code": 130616,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-ASHTOWN EAST BRANCH"
  },
  {
   "code": 130701,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-KENYASI AGENCY"
  },
  {
   "code": 130702,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-SUNYANI BRANCH"
  },
  {
   "code": 130801,
   "name": "ECOBANK GHANA LTD",
   "branch": "ECOBANK (GH) LTD-TAMALE"
  },
  {
   "code": 140100,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD"
  },
  {
   "code": 140100,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - HEAD OFFICE BRANCH"
  },
  {
   "code": 140101,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-INDEPENDENCE AVENUE BRANCH"
  },
  {
   "code": 140102,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TEMA BRANCH"
  },
  {
   "code": 140103,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-DERBY AVENUE BRANCH"
  },
  {
   "code": 140104,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-SPINTEX ROAD BRANCH"
  },
  {
   "code": 140105,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-GRAPHIC ROAD BRANCH"
  },
  {
   "code": 140106,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TEMA HARBOUR BRANCH"
  },
  {
   "code": 140107,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - WEIJA BRANCH"
  },
  {
   "code": 140108,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - CIRCLE BRANCH"
  },
  {
   "code": 140109,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-LEGON BRANCH"
  },
  {
   "code": 140110,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 140111,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 140112,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK - OSU BRANCH"
  },
  {
   "code": 140113,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD- COMMUNITY 25 BRANCH"
  },
  {
   "code": 140114,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK - EAST LEGON BRANCH"
  },
  {
   "code": 140115,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK - DANSOMAN BRANCH"
  },
  {
   "code": 140116,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-LABONE BRANCH"
  },
  {
   "code": 140117,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - AIRPORT CITY BRANCH"
  },
  {
   "code": 140118,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-AIRPORT REFINERY"
  },
  {
   "code": 140190,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-PRIVATE BANKING"
  },
  {
   "code": 140199,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - OPPORTUNITY SAVINGS &amp; LOANS"
  },
  {
   "code": 140401,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TAKORADI BRANCH"
  },
  {
   "code": 140402,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TARKWA BRANCH BRANCH"
  },
  {
   "code": 140403,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TAKORADI HARBOUR BRANCH"
  },
  {
   "code": 140404,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - ESIAMA BRANCH"
  },
  {
   "code": 140405,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-SEKONDI ROAD BRANCH"
  },
  {
   "code": 140601,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-NHYIEASO BRANCH"
  },
  {
   "code": 140602,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-SUAME BRANCH"
  },
  {
   "code": 140603,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-KEJETIA BRANCH"
  },
  {
   "code": 140604,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-KNUST BRANCH"
  },
  {
   "code": 140605,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD - ASAFO BRANCH"
  },
  {
   "code": 140801,
   "name": "CAL BANK LTD",
   "branch": "CAL BANK LTD-TAMALE BRANCH"
  },
  {
   "code": 170114,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC BANK LTD - EAST LEGON MAIN BRANCH"
  },
  {
   "code": 170115,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC BANK LTD - KOTOBABI BRANCH"
  },
  {
   "code": 170116,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC BANK LTD - SAKUMONO BRANCH"
  },
  {
   "code": 170117,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - AMERICAN HOUSEBRANCH"
  },
  {
   "code": 170118,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - LAPAZ BRANCH"
  },
  {
   "code": 170119,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - SAKAMAN  BRANCH"
  },
  {
   "code": 170120,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD-DWORWULU  BRANCH"
  },
  {
   "code": 170121,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD-RING ROAD BRANCH"
  },
  {
   "code": 170122,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - MADINA BRANCH"
  },
  {
   "code": 170123,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD -KASOA BRANCH"
  },
  {
   "code": 170124,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - OSU MAIN BRANCH"
  },
  {
   "code": 170126,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - TEMA COMM 1 BRANCH"
  },
  {
   "code": 170127,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - SPINTEX BRANCH 2"
  },
  {
   "code": 170128,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - 37 BRANCH"
  },
  {
   "code": 170129,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - TRADE FAIR BRANCH"
  },
  {
   "code": 170180,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC BANK LTD -SIC LIFE SAVINGS AND LOANS LIMITED"
  },
  {
   "code": 170401,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD-TADI MARKT CIRCLE BRANCH"
  },
  {
   "code": 170601,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD-KUMASI BRANCH"
  },
  {
   "code": 170602,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD-SUAME BRANCH"
  },
  {
   "code": 170603,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD -ADUM BRANCH"
  },
  {
   "code": 170605,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - MANHYIA BRANCH"
  },
  {
   "code": 170650,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - MULTICREDIT SAVINGS &amp; LOANS LIMITED"
  },
  {
   "code": 170701,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD - TECHIMAN BRANCH"
  },
  {
   "code": 170801,
   "name": "FIRST ATLANTIC BANK LTD",
   "branch": "FIRST ATLANTIC  BANK LTD -TAMALE BRANCH"
  },
  {
   "code": 180100,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-"
  },
  {
   "code": 180101,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ACCRA BRANCH"
  },
  {
   "code": 180102,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ABOSSEY OKAI BRANCH"
  },
  {
   "code": 180103,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-GICEL"
  },
  {
   "code": 180104,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TEMA FISHING HABOUR"
  },
  {
   "code": 180105,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-MADINA BRANCH"
  },
  {
   "code": 180107,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-MAKOLA BRANCH"
  },
  {
   "code": 180109,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 180110,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-SPINTEX ROAD BRANCH"
  },
  {
   "code": 180111,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TEMA COMMUNITY 1 BRANCH"
  },
  {
   "code": 180112,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-WEIJA BRANCH"
  },
  {
   "code": 180113,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TESANO BRANCH"
  },
  {
   "code": 180114,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ZONGO JUNCTION BRANCH"
  },
  {
   "code": 180115,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ODORKOR BRANCH"
  },
  {
   "code": 180116,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ABEKA BRANCH"
  },
  {
   "code": 180117,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD - NORTH INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 180118,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ADENTA BRANCH"
  },
  {
   "code": 180119,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-KWAME NKRUMAH CIRCLE"
  },
  {
   "code": 180120,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-MATAHEKO BRANCH"
  },
  {
   "code": 180121,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK    LTD - OKAISHIE BRANCH"
  },
  {
   "code": 180122,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD - EAST LEGON BRANCH"
  },
  {
   "code": 180123,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK - BAWALESHIE BRANCH"
  },
  {
   "code": 180124,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD -NUNGUA BRANCH"
  },
  {
   "code": 180125,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD- VALLEY VIEW UNIVERSITY BRANCH"
  },
  {
   "code": 180126,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK - UNIVERSITY OF GHANA BRANCH"
  },
  {
   "code": 180127,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK - TAIFA BRANCH"
  },
  {
   "code": 180128,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD- AIRPORT CITY BRANCH"
  },
  {
   "code": 180129,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-CANTONMENTS BRANCH"
  },
  {
   "code": 180199,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-GOLDEN LINK SAVINGS AND LOANS COMPANY"
  },
  {
   "code": 180201,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-KOFORIDUA BRANCH"
  },
  {
   "code": 180301,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-CAPECOAST BRANCH"
  },
  {
   "code": 180302,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-UNIV. OF CAPE COAST BRANCH"
  },
  {
   "code": 180401,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TAKORADI HARBOUR BRANCH"
  },
  {
   "code": 180402,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TAKORADI MARKET CIRCLE BRANCH"
  },
  {
   "code": 180601,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-KUMASI BRANCH"
  },
  {
   "code": 180602,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ADUM-KUMASI BRANCH"
  },
  {
   "code": 180603,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-AFFUL NKWANTA BRANCH"
  },
  {
   "code": 180604,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ABOABO BRANCH"
  },
  {
   "code": 180605,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-ATONSU BRANCH"
  },
  {
   "code": 180606,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-SUAME MAAKRO BRANCH"
  },
  {
   "code": 180607,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD -SANTASI ROUNDABOUT BRANCH"
  },
  {
   "code": 180701,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD - TECHIMAN BRANCH"
  },
  {
   "code": 180801,
   "name": "PRUDENTIAL BANK LTD",
   "branch": "PRUDENTIAL BANK LTD-TAMALE BRANCH"
  },
  {
   "code": 190101,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ACCRA MAIN BRANCH"
  },
  {
   "code": 190102,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-AIRPORT CITY BRANCH"
  },
  {
   "code": 190103,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-SPINTEX ROAD BRANCH"
  },
  {
   "code": 190104,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ACCRA MALL BRANCH"
  },
  {
   "code": 190105,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-NORTH INDUSTIAL AREA BRANCH"
  },
  {
   "code": 190106,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-TEMA INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 190107,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-GRAPHIC ROAD BRANCH"
  },
  {
   "code": 190108,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-MAKOLA BRANCH"
  },
  {
   "code": 190109,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-RIND ROAD BRANCH"
  },
  {
   "code": 190110,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 190112,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-KASOA BRANCH"
  },
  {
   "code": 190113,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GH LTD - TEMA FISHING HABOUR BRANCH"
  },
  {
   "code": 190114,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-MOVENPICK BRANCH"
  },
  {
   "code": 190115,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-MADINA BRANCH"
  },
  {
   "code": 190116,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-DANSOMAN BRANCH"
  },
  {
   "code": 190117,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ASHAIMAN BRANCH"
  },
  {
   "code": 190118,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-TEMA COMMUNITY ONE BRANCH"
  },
  {
   "code": 190119,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-EAST LEGON BRANCH"
  },
  {
   "code": 190120,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-LAPAZ BRANCH"
  },
  {
   "code": 190121,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-STANBIC HEIGHTS BRANCH"
  },
  {
   "code": 190122,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA - INTEGRATED PROCESSING CENTER"
  },
  {
   "code": 190123,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD - CASH CENTRE"
  },
  {
   "code": 190124,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK - WEST HILLS MALL BRANCH"
  },
  {
   "code": 190125,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK - JUNCTION MALL BRANCH"
  },
  {
   "code": 190127,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK - TUDU BRANCH"
  },
  {
   "code": 190128,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD - ACHIMOTA MALL BRANCH"
  },
  {
   "code": 190130,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD - LEGON BRANCH"
  },
  {
   "code": 190132,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD- SERVICES INTERGRITY SAVINGS AND LOANS LIMITED"
  },
  {
   "code": 190133,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD - AGJIRINGANOR BRANCH"
  },
  {
   "code": 190401,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-TAKORADI BRANCH"
  },
  {
   "code": 190402,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-TARKWA BRANCH"
  },
  {
   "code": 190601,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-HARPER-KUMASI BRANCH"
  },
  {
   "code": 190602,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-SUAME BRANCH"
  },
  {
   "code": 190603,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ADUM BRANCH"
  },
  {
   "code": 190604,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-ASHTOWN BRANCH"
  },
  {
   "code": 190605,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "MULTI CREDIT SAVINGS AND LOANS - KUMASI"
  },
  {
   "code": 190606,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-KNUST BRANCH"
  },
  {
   "code": 190607,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD - ASOKWA BRANCH"
  },
  {
   "code": 190701,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-SUNYANI BRANCH"
  },
  {
   "code": 190801,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-TAMALE BRANCH"
  },
  {
   "code": 190901,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-BOLGATANGA BRANCH"
  },
  {
   "code": 191001,
   "name": "STANBIC BANK GHANA LTD",
   "branch": "STANBIC BANK GHANA LTD-WA BRANCH"
  },
  {
   "code": 200101,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -MAKOLA BRANCH"
  },
  {
   "code": 200102,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -KASOA BRANCH"
  },
  {
   "code": 200103,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -TEMA BRANCH"
  },
  {
   "code": 200104,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -KANESHIE BRANCH"
  },
  {
   "code": 200105,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 200106,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -DANSOMAN BRANCH"
  },
  {
   "code": 200107,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -SPINTEX ROAD BRANCH"
  },
  {
   "code": 200108,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -SWEDRU BRANCH"
  },
  {
   "code": 200109,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -ACHIMOTA BRANCH"
  },
  {
   "code": 200110,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -SWANMILL BRANCH"
  },
  {
   "code": 200111,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -KORLE-BU BRANCH"
  },
  {
   "code": 200112,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -DOME BRANCH"
  },
  {
   "code": 200113,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -SANTA MARIA BRANCH"
  },
  {
   "code": 200114,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD - SPINTEX 2 BRANCH"
  },
  {
   "code": 200115,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD - AIRPORT BRANCH"
  },
  {
   "code": 200401,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -TAKORADI BRANCH"
  },
  {
   "code": 200601,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -ADUM BRANCH"
  },
  {
   "code": 200602,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -SUAME BRANCH"
  },
  {
   "code": 200701,
   "name": "FIRST BANK NIGERIA",
   "branch": "FBN BANK LTD -TECHIMAN BRANCH"
  },
  {
   "code": 210101,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-FARRAR AVE BRANCH"
  },
  {
   "code": 210102,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-RIDGE BRANCH"
  },
  {
   "code": 210103,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-MAAMOBI BRANCH"
  },
  {
   "code": 210104,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-ACCRA CENTRAL BRANCH"
  },
  {
   "code": 210105,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-NEWTOWN BRANCH"
  },
  {
   "code": 210106,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-MICHEL CAMP BRANCH"
  },
  {
   "code": 210111,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-EAST LEGON BRANCH"
  },
  {
   "code": 210112,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-KWASHIEMAN BRANCH"
  },
  {
   "code": 210113,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-OSU BRANCH"
  },
  {
   "code": 210114,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-SPINTEX ROAD BRANCH"
  },
  {
   "code": 210116,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-TEMA BRANCH"
  },
  {
   "code": 210117,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA- DANSOMAN BRANCH"
  },
  {
   "code": 210118,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-MADINA BRANCH"
  },
  {
   "code": 210119,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-ABOSSEY OKAI BRANCH"
  },
  {
   "code": 210122,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-WHOLESALE CENTER"
  },
  {
   "code": 210123,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-TESHIE NUNGUA BRANCH"
  },
  {
   "code": 210124,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-OPERA SQUARE BRANCH"
  },
  {
   "code": 210125,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-AIRPORT CITY BRANCH"
  },
  {
   "code": 210126,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-OCTAGON BRANCH"
  },
  {
   "code": 210401,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA -TAKORADI BRANCH"
  },
  {
   "code": 210601,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA -KUMASI AMAKOM BRANCH"
  },
  {
   "code": 210602,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-KUMASI -ADUM BRANCH"
  },
  {
   "code": 210603,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-SOKOBAN BRANCH"
  },
  {
   "code": 210604,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA- SUAME BRANCH"
  },
  {
   "code": 210699,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-MULTICREDIT SAVINGS AND LOANS CO."
  },
  {
   "code": 210801,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-TAMALE BRANCH"
  },
  {
   "code": 210901,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-BOLGATANGA BRANCH"
  },
  {
   "code": 211001,
   "name": "BANK OF AFRICA",
   "branch": "BANK OF AFRICA-WA BRANCH BRANCH"
  },
  {
   "code": 230101,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-HEAD OFFICE BRANCH"
  },
  {
   "code": 230102,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-AIRPORT BRANCH"
  },
  {
   "code": 230103,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TEMA BRANCH"
  },
  {
   "code": 230104,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-OSU BRANCH"
  },
  {
   "code": 230105,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-SPINTEX ROAD BRANCH"
  },
  {
   "code": 230106,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-LABONE BRANCH"
  },
  {
   "code": 230107,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-GRAPHIC ROAD BRANCH"
  },
  {
   "code": 230108,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ASHIAMAN BRANCH"
  },
  {
   "code": 230109,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TUDU BRANCH"
  },
  {
   "code": 230110,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-MADINA BRANCH"
  },
  {
   "code": 230111,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ACHIMOTA BRANCH"
  },
  {
   "code": 230112,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-NIA BRANCH"
  },
  {
   "code": 230113,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-COMMUNITY 6 BRANCH"
  },
  {
   "code": 230114,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-OPERA SQUARE BRANCH"
  },
  {
   "code": 230115,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-LAPAZ BRANCH"
  },
  {
   "code": 230116,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - EAST LEGON BRANCH"
  },
  {
   "code": 230117,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - DOME BRANCH"
  },
  {
   "code": 230118,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - MAKOLA BRANCH"
  },
  {
   "code": 230119,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST BANK - RING ROAD BRANCH"
  },
  {
   "code": 230120,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARNTY TRUST BANK - BAATSONA BRANCH"
  },
  {
   "code": 230122,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARNTY TRUST BANK - TEMA MAIN HARBOUR BRANCH"
  },
  {
   "code": 230123,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - ONE AIRPORT SQUARE BRANCH"
  },
  {
   "code": 230124,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - DANSOMAN BRANCH"
  },
  {
   "code": 230184,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ASURANCE SAVINGS AND LOANS LTD"
  },
  {
   "code": 230301,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST BANK - CAPE - COAST BRANCH"
  },
  {
   "code": 230302,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD - KASOA BRANCH"
  },
  {
   "code": 230401,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TAKORADI BRANCH"
  },
  {
   "code": 230402,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TARKWA BRANCH"
  },
  {
   "code": 230501,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-AFLAO BRANCH"
  },
  {
   "code": 230601,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-KUMASI-LAKE  ROAD BRANCH"
  },
  {
   "code": 230602,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ADUM BRANCH"
  },
  {
   "code": 230603,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD- - ALABAR BRANCH"
  },
  {
   "code": 230652,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ST PETER'S CO-OPERATIVE CREDIT UNION"
  },
  {
   "code": 230653,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-NOBLE DREAM MICROFINANCE LTD"
  },
  {
   "code": 230680,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-ADEHYEMAN SAVINGS &amp; LOANS LTD"
  },
  {
   "code": 230701,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TECHIMAN BRANCH"
  },
  {
   "code": 230801,
   "name": "GUARANTY TRUST (GH) LTD",
   "branch": "GUARANTY TRUST (GH) LTD-TAMALE BRANCH"
  },
  {
   "code": 240100,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD"
  },
  {
   "code": 240100,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-HEAD OFFICE BRANCH"
  },
  {
   "code": 240101,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-RIDGE TOWERS"
  },
  {
   "code": 240102,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-SPINTEX ROAD"
  },
  {
   "code": 240103,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-HIGH STREET"
  },
  {
   "code": 240104,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-OSU"
  },
  {
   "code": 240105,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ABOSSEY OKAI BRANCH"
  },
  {
   "code": 240106,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TEMA SAFE BOND BRANCH"
  },
  {
   "code": 240107,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-KANTAMANTO BRANCH"
  },
  {
   "code": 240108,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TUDU BRANCH"
  },
  {
   "code": 240109,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TEMA-COMMUNITY ONE"
  },
  {
   "code": 240110,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-OKAISHIE BRANCH"
  },
  {
   "code": 240111,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ACTION CHAPEL BRANCH"
  },
  {
   "code": 240112,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD- A AND C MALL BRANCH"
  },
  {
   "code": 240113,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-DANSOMAN BRANCH"
  },
  {
   "code": 240114,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-RING ROAD BRANCH"
  },
  {
   "code": 240115,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-HAATSO BRANCH"
  },
  {
   "code": 240116,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TEMA COMMUNITY 2 BRANCH"
  },
  {
   "code": 240117,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ACCRA CENTRAL POSTBANK BRANCH"
  },
  {
   "code": 240118,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ADENTA BRANCH"
  },
  {
   "code": 240119,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-IPS BRANCH"
  },
  {
   "code": 240120,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TRADE FAIR LA BRANCH"
  },
  {
   "code": 240121,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TESANO BRANCH"
  },
  {
   "code": 240122,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-DZORWULU BRANCH"
  },
  {
   "code": 240123,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-MAMPROBI POSTBANK BRANCH"
  },
  {
   "code": 240124,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-KWAME NKRUMAH AVENUE BRANCH"
  },
  {
   "code": 240125,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD -  ACHIMOTA BRANCH"
  },
  {
   "code": 240126,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - GWB LAPAZ BRANCH"
  },
  {
   "code": 240127,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-NUNGUA BRANCH"
  },
  {
   "code": 240128,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ASHAIMAN BRANCH"
  },
  {
   "code": 240129,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-AIRPORT ACCRA BRANCH"
  },
  {
   "code": 240130,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - MAAMOBI BRANCH"
  },
  {
   "code": 240131,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - KOKOMLEMLE BRANCH"
  },
  {
   "code": 240132,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - KANESHIE MAIN BRANCH"
  },
  {
   "code": 240133,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TEMA COMM. 1 MAIN BRANCH"
  },
  {
   "code": 240134,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - MADINA MARKET BRANCH"
  },
  {
   "code": 240135,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TUDU MAIN BRANCH"
  },
  {
   "code": 240136,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - DANSOMAN MAIN BRANCH"
  },
  {
   "code": 240138,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK  - ABEKA BRANCH"
  },
  {
   "code": 240142,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - ASHAIMAN MARKET BRANCH"
  },
  {
   "code": 240143,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - AIRPORT PC BRANCH"
  },
  {
   "code": 240144,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK  - KASOA BRANCH"
  },
  {
   "code": 240145,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - DOME BRANCH"
  },
  {
   "code": 240146,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - KANESHIE MARKET BRANCH"
  },
  {
   "code": 240147,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - MADINA BRANCH"
  },
  {
   "code": 240148,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - OSU DANQUAH CIRCLE BRANCH"
  },
  {
   "code": 240149,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - NUNGUA BRIGADE BRANCH"
  },
  {
   "code": 240150,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - TEMA COMMUNITY 25 BRANCH"
  },
  {
   "code": 240151,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - WEIJA BRANCH"
  },
  {
   "code": 240152,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD- EAST LEGON BRANCH"
  },
  {
   "code": 240191,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-HOHOE BRANCH BRANCH"
  },
  {
   "code": 240201,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - NKWAKAW BRANCH"
  },
  {
   "code": 240203,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - KOFORIDUA BRANCH"
  },
  {
   "code": 240301,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-ASSIN FOSU BRANCH"
  },
  {
   "code": 240302,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - CAPE COAST BRANCH"
  },
  {
   "code": 240303,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - CAPECOAST MAIN BRANCH"
  },
  {
   "code": 240401,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TAKORADI MARKET CIRCLE"
  },
  {
   "code": 240402,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TARKWA BRANCH"
  },
  {
   "code": 240403,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TAKORADI POSTBANK BRANCH"
  },
  {
   "code": 240405,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TARKWA MAIN BRANCH"
  },
  {
   "code": 240406,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TAKORADI EFFIEKUMA BRANCH"
  },
  {
   "code": 240407,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TAKORADI MAIN BRANCH"
  },
  {
   "code": 240501,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-HO BRANCH"
  },
  {
   "code": 240601,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-STADIUM POST"
  },
  {
   "code": 240602,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-KUMASI-ADUM"
  },
  {
   "code": 240603,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-KUMASI-SUAME"
  },
  {
   "code": 240604,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - ATONSU BRANCH"
  },
  {
   "code": 240605,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-AHODWO BRANCH"
  },
  {
   "code": 240606,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-KUMASI ADUM POSTBANK"
  },
  {
   "code": 240607,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - KO METHODIST BRANCH"
  },
  {
   "code": 240608,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-SANTASI ROUNDABOUT BRANCH"
  },
  {
   "code": 240609,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - ADUM SAGOE LANE BRANCH"
  },
  {
   "code": 240610,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - SUAME MAIN BRANCH"
  },
  {
   "code": 240611,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - ADUM PZ BRANCH"
  },
  {
   "code": 240612,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - SUAME MAAKRO BRANCH"
  },
  {
   "code": 240613,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - KNUST BRANCH"
  },
  {
   "code": 240701,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-SUNYANI POSTBANK BRANCH"
  },
  {
   "code": 240702,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-BEREKUM BRANCH"
  },
  {
   "code": 240703,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - TECHIMAN BRANCH"
  },
  {
   "code": 240704,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK - SUNYANI BRANCH"
  },
  {
   "code": 240801,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-TAMALE"
  },
  {
   "code": 240901,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD-BOLGATANGA POSTBANK BRANCH"
  },
  {
   "code": 241090,
   "name": "FIDELITY BANK GHANA",
   "branch": "FIDELITY BANK GHANA LTD - WA BRANCH"
  },
  {
   "code": 270101,
   "name": "BSIC BANK GHANA LTD",
   "branch": "BSIC GHANA LTD-ADABRAKA BRANCH"
  },
  {
   "code": 270102,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-ACCRA CENTRAL BRANCH"
  },
  {
   "code": 270103,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-SPINTEX BRANCH"
  },
  {
   "code": 270104,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-NIMA BRANCH"
  },
  {
   "code": 270105,
   "name": "BSIC BANK GHANA",
   "branch": "BISC GHANA LTD-NORTH INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 270106,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-MADINA BRANCH"
  },
  {
   "code": 270602,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-KUMASI (ALABAR) BRANCH"
  },
  {
   "code": 270801,
   "name": "BSIC BANK GHANA",
   "branch": "BSIC GHANA LTD-TAMALE BRANCH"
  },
  {
   "code": 280100,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK"
  },
  {
   "code": 280100,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - HEAD OFFICE BRANCH"
  },
  {
   "code": 280101,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - EAST CANTONMENTS BRANCH"
  },
  {
   "code": 280102,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TEMA MAIN BRANCH"
  },
  {
   "code": 280103,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - OSU  OXFORD BRANCH"
  },
  {
   "code": 280104,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - LASHIBI BRANCH"
  },
  {
   "code": 280105,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - OSU WATSON BRANCH"
  },
  {
   "code": 280106,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KANTAMANTO BRANCH"
  },
  {
   "code": 280107,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KANESHIE BRANCH"
  },
  {
   "code": 280108,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - CASTLE ROAD BRANCH"
  },
  {
   "code": 280109,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK -MADINA BRANCH"
  },
  {
   "code": 280110,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - SOUTH INDUSTRIAL BRANCH"
  },
  {
   "code": 280111,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - NIA BRANCH"
  },
  {
   "code": 280112,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - RING ROAD CENTRAL BRANCH"
  },
  {
   "code": 280113,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KANESHIE POST OFFICE BRANCH"
  },
  {
   "code": 280114,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - ABEKA LAPAZ BRANCH"
  },
  {
   "code": 280115,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - OKAISHIE BRANCH"
  },
  {
   "code": 280116,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - ASHAIMAN BRANCH"
  },
  {
   "code": 280117,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - IPS BRANCH"
  },
  {
   "code": 280118,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - ACHIMOTA BRANCH"
  },
  {
   "code": 280119,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TEMA COMMUNITY 1 BRANCH"
  },
  {
   "code": 280120,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - NIMA BRANCH"
  },
  {
   "code": 280121,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TIA BRANCH"
  },
  {
   "code": 280122,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - AIRPORT BRANCH"
  },
  {
   "code": 280123,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KASOA BRANCH"
  },
  {
   "code": 280124,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - SPINTEX BRANCH"
  },
  {
   "code": 280125,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - NEWTOWN BRANCH"
  },
  {
   "code": 280126,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - HAATSO BRANCH"
  },
  {
   "code": 280127,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - AIRPORT BRANCH"
  },
  {
   "code": 280128,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - LEGON BRANCH"
  },
  {
   "code": 280129,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS - ADJIRIGANOR BRANCH"
  },
  {
   "code": 280130,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - OCTAGON ACCRA"
  },
  {
   "code": 280201,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KOFORIDUA BRANCH"
  },
  {
   "code": 280401,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TARKWA BRANCH"
  },
  {
   "code": 280402,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TAKORADI BRANCH"
  },
  {
   "code": 280403,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - SEFWI BRANCH"
  },
  {
   "code": 280404,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - ENCHI BRANCH"
  },
  {
   "code": 280405,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - MARKET CIRCLE TAKORADI BRANCH"
  },
  {
   "code": 280501,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - HO BRANCH"
  },
  {
   "code": 280601,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KUMASI ASAFO BRANCH"
  },
  {
   "code": 280602,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - ADUM BRANCH"
  },
  {
   "code": 280603,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - SUAME BRANCH"
  },
  {
   "code": 280604,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - AMAKOM BRANCH"
  },
  {
   "code": 280605,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK -  ALABAR BRANCH"
  },
  {
   "code": 280606,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK  - KNUST BRANCH"
  },
  {
   "code": 280607,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - KEJETIA BRANCH"
  },
  {
   "code": 280701,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TECHIMAN BRANCH"
  },
  {
   "code": 280801,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - TAMALE BRANCH"
  },
  {
   "code": 280901,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK - BOLGATANGA BRANCH"
  },
  {
   "code": 281001,
   "name": "ACCESSBANK GHANA LTD",
   "branch": "ACCESS BANK -  WA  BRANCH"
  },
  {
   "code": 330100,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK"
  },
  {
   "code": 330101,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - JUNCTION SHOPPING CENTRE BRANCH"
  },
  {
   "code": 330102,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - ACCRA BRANCH"
  },
  {
   "code": 330106,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - ACCRA MALL BRANCH"
  },
  {
   "code": 330107,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - ACHIMOTA MALL BRANCH"
  },
  {
   "code": 330108,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - WEST HILLS MALL BRANCH"
  },
  {
   "code": 330111,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK - MAKOLA BRANCH"
  },
  {
   "code": 330112,
   "name": "FIRST NATIONAL BANK",
   "branch": "FIRST NATIONAL BANK  - TEMA BRANCH"
  },
  {
   "code": 340100,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - HEAD OFFICE BRANCH"
  },
  {
   "code": 340101,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -AIRPORT CITY BRANCH"
  },
  {
   "code": 340102,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -RIDGE BRANCH"
  },
  {
   "code": 340103,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TUDU BRANCH"
  },
  {
   "code": 340104,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TEMA COMM 1 BRANCH"
  },
  {
   "code": 340105,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - MANET TOWER 3 BRANCH"
  },
  {
   "code": 340106,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MAKOLA BRANCH"
  },
  {
   "code": 340107,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - ARENA BRANCH"
  },
  {
   "code": 340108,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KOKOMLEMLE BRANCH"
  },
  {
   "code": 340109,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ACHIMOTA BRANCH"
  },
  {
   "code": 340110,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ADABRAKAH BRANCH"
  },
  {
   "code": 340111,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ADENTA BRANCH"
  },
  {
   "code": 340112,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SPINTEX BRANCH"
  },
  {
   "code": 340113,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -AMERICAN HOUSE BRANCH"
  },
  {
   "code": 340114,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ANYAA MARKET BRANCH"
  },
  {
   "code": 340115,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -APENKWA BRANCH"
  },
  {
   "code": 340116,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASHAIMAN ROUND ABOUT BRANCH"
  },
  {
   "code": 340117,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASHAIMAN MAIN BRANCH"
  },
  {
   "code": 340118,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASHALLEY BOTWE BRANCH"
  },
  {
   "code": 340119,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASHIYEA BRANCH"
  },
  {
   "code": 340120,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ATOMIC JUNCTION BRANCH"
  },
  {
   "code": 340121,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ATOMIC BRANCH"
  },
  {
   "code": 340122,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DANSOMAN ROUND-ABOUT BRANCH"
  },
  {
   "code": 340123,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DANSOMAN EXHIBITION BRANCH"
  },
  {
   "code": 340124,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -RUSSIA ROAD BRANCH"
  },
  {
   "code": 340125,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DARKUMAN BRANCH"
  },
  {
   "code": 340126,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DOME BRANCH"
  },
  {
   "code": 340127,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DZORWULU BRANCH"
  },
  {
   "code": 340128,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -EAST LEGON BRANCH"
  },
  {
   "code": 340129,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -GIMPA BRANCH"
  },
  {
   "code": 340130,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KANESHIR BRANCH"
  },
  {
   "code": 340131,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KASOA MAIN BRANCH"
  },
  {
   "code": 340132,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - KASOA NEW MARKET"
  },
  {
   "code": 340133,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KORLE- BU BRANCH"
  },
  {
   "code": 340134,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KORLE DUDOR BRANCH"
  },
  {
   "code": 340135,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KWABENYA BRANCH"
  },
  {
   "code": 340136,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -LABONE BRANCH"
  },
  {
   "code": 340137,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -LAPAZ BRANCH"
  },
  {
   "code": 340138,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MADINA MAIN BRANCH"
  },
  {
   "code": 340139,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MADINA NEW ROAD BRANCH"
  },
  {
   "code": 340140,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MALLAM JUNCTION BRANCH"
  },
  {
   "code": 340141,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -PIG FARM BRANCH"
  },
  {
   "code": 340142,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MAMOBI BRANCH"
  },
  {
   "code": 340143,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -NIMA MAIN BRANCH"
  },
  {
   "code": 340144,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MERIDIAN BRANCH"
  },
  {
   "code": 340145,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -NORTH INDUSTRIAL AREA BRANCH"
  },
  {
   "code": 340146,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -CASTLE ROAD BRANCH"
  },
  {
   "code": 340147,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -OXFORD STREET BRANCH"
  },
  {
   "code": 340148,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -POKUASE BRANCH"
  },
  {
   "code": 340149,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ABBOSSEY-OKAI BRANCH"
  },
  {
   "code": 340150,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - SHIPPERS HOUSE BRANCH"
  },
  {
   "code": 340151,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SAKUMONO BRANCH"
  },
  {
   "code": 340152,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SOUTH LEGON BRANCH"
  },
  {
   "code": 340153,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -EAST AIRPORT BRANCH"
  },
  {
   "code": 340154,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BAATSONA BRANCH"
  },
  {
   "code": 340155,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -OPERA SQUARE BRANCH"
  },
  {
   "code": 340156,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TEMA COMM 2 BRANCH"
  },
  {
   "code": 340157,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TEMA COMM 25 BRANCH"
  },
  {
   "code": 340158,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TESANO BRANCH"
  },
  {
   "code": 340159,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TESHIE BRANCH"
  },
  {
   "code": 340160,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TRADE FAIR BRANCH"
  },
  {
   "code": 340161,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ABEKA BRANCH"
  },
  {
   "code": 340162,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -UNIVERSITY OF GHANA BRANCH"
  },
  {
   "code": 340163,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -WEIJA BRANCH"
  },
  {
   "code": 340164,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -WISCONSIN BRANCH"
  },
  {
   "code": 340165,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ZENU BRANCH"
  },
  {
   "code": 340166,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ACCRA BRANCH"
  },
  {
   "code": 340191,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -GOLDENLINK SAVINGS AND LOANS"
  },
  {
   "code": 340197,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -PROGRESS SAVINGS AND LOANS"
  },
  {
   "code": 340198,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BEST POINT SAVINGS AND LOANS"
  },
  {
   "code": 340201,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ABETIFI BRANCH"
  },
  {
   "code": 340202,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KOFORIDUA BRANCH"
  },
  {
   "code": 340203,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MAMFE BRANCH"
  },
  {
   "code": 340204,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -NEW ABIREM BRANCH"
  },
  {
   "code": 340301,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -UNIVERSITY OF CAPE COAST BRANCH"
  },
  {
   "code": 340302,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -DUNKWAW-ON OFFIN BRANCH"
  },
  {
   "code": 340303,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SWEDRU BRANCH"
  },
  {
   "code": 340304,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -WINNEBA BRANCH"
  },
  {
   "code": 340401,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASAWINSO BRANCH"
  },
  {
   "code": 340402,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -AXIM ROAD BRANCH"
  },
  {
   "code": 340403,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MARKET CIRCLE BRANCH"
  },
  {
   "code": 340404,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TARKWA BRANCH"
  },
  {
   "code": 340501,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -HO BRANCH"
  },
  {
   "code": 340601,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ADUM BRANCH"
  },
  {
   "code": 340602,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -AFFUL NKWANTA BRANCH"
  },
  {
   "code": 340603,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -AHODWO BRANCH"
  },
  {
   "code": 340604,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ALABAR BRANCH"
  },
  {
   "code": 340605,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASAFO BRANCH"
  },
  {
   "code": 340606,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -MAAKRO BRANCH"
  },
  {
   "code": 340607,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASOKWA BRANCH"
  },
  {
   "code": 340608,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ATONSU BRANCH"
  },
  {
   "code": 340609,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BANTAMA BRANCH"
  },
  {
   "code": 340610,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -EJISU BRANCH"
  },
  {
   "code": 340611,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -HARPER ROAD BRANCH"
  },
  {
   "code": 340612,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - KEJETIA BRANCH"
  },
  {
   "code": 340613,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KNUST BRANCH"
  },
  {
   "code": 340614,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -NHYIAESO BRANCH"
  },
  {
   "code": 340615,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ROMAN HILL BRANCH"
  },
  {
   "code": 340616,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SOKOBAN BRANCH"
  },
  {
   "code": 340617,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -ASHTOWN BRANCH"
  },
  {
   "code": 340618,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SUAME BRANCH"
  },
  {
   "code": 340619,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TAFO BRANCH"
  },
  {
   "code": 340620,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - ROMAN HILL MARKET BRANCH"
  },
  {
   "code": 340621,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -KRONUM BRANCH"
  },
  {
   "code": 340622,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - ABUAKWA BRANCH"
  },
  {
   "code": 340701,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - SUNYANI MAIN BRANCH"
  },
  {
   "code": 340702,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -SUNYANI POST OFFICE BRANCH"
  },
  {
   "code": 340703,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TECHIMAN MARKET BRANCH"
  },
  {
   "code": 340704,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - TECHIMAN WENCHI ROAD BRANCH"
  },
  {
   "code": 340705,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TECHIMAN VALLEY VIEW BRANCH"
  },
  {
   "code": 340801,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - TAMALE MAIN BRANCH"
  },
  {
   "code": 340802,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -TAMALE ABOABO BRANCH"
  },
  {
   "code": 340803,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - TAMALE HOSPITAL ROAD BRANCH"
  },
  {
   "code": 340804,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BOLE BRANCH"
  },
  {
   "code": 340901,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA - BAWKU BRANCH"
  },
  {
   "code": 340902,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BOLGA POLICE STATION ROAD BRANCH"
  },
  {
   "code": 340903,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -BOLGA COMMERCIAL ROAD BRANCH"
  },
  {
   "code": 341001,
   "name": "CONSOLIDATED BANK GHANA",
   "branch": "CONSOLIDATED BANK GHANA -WA BRANCH"
  },
  {
   "code": 360101,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - HEAD OFFICE BRANCH"
  },
  {
   "code": 360102,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - ABOSSEY OKAI BRANCH"
  },
  {
   "code": 360103,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - ASHAIMAN BRANCH"
  },
  {
   "code": 360104,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - DZORWULU BRANCH"
  },
  {
   "code": 360105,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - DOME BRANCH"
  },
  {
   "code": 360106,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - NMAI DJORN BRANCH"
  },
  {
   "code": 360107,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - TEMA COMM 1 BRANCH"
  },
  {
   "code": 360108,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD- KOKOMLEMLE BRANCH"
  },
  {
   "code": 360109,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - MADINA BRANCH"
  },
  {
   "code": 360110,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - TUDU BRANCH"
  },
  {
   "code": 360111,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - SPINTEX BRANCH"
  },
  {
   "code": 360112,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - OSU BRANCH"
  },
  {
   "code": 360113,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - WEIJA BRANCH"
  },
  {
   "code": 360114,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD- EAST LEGON BRANCH"
  },
  {
   "code": 360115,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - TEMA COMM 2 BRANCH"
  },
  {
   "code": 360201,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - KOFORIDUA BRANCH"
  },
  {
   "code": 360301,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - KASOA BRANCH"
  },
  {
   "code": 360401,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD -  TAKORADI BRANCH"
  },
  {
   "code": 360402,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - TARKWA BRANCH"
  },
  {
   "code": 360601,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD- MANHYIA BRANCH"
  },
  {
   "code": 360602,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - KUMASI CENTRAL MARKET BRANCH"
  },
  {
   "code": 360603,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - KEJETIA BRANCH"
  },
  {
   "code": 360604,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - ANLOGA BRANCH"
  },
  {
   "code": 360605,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - KRONUM BRANCH"
  },
  {
   "code": 360606,
   "name": "OMNI BANK GHANA LTD",
   "branch": "OMNI BANK GHANA LTD - ADUM BRANCH"
  },
  {
   "code": 390100,
   "name": "GHL BANK",
   "branch": "GHL HEAD OFFICE"
  },
  {
   "code": 390100,
   "name": "GHL BANK",
   "branch": "GHL BANK Ltd"
  },
  {
   "code": 390101,
   "name": "GHL BANK",
   "branch": "GHL BANK- AIRPORT CITY BRANCH"
  },
  {
   "code": 390401,
   "name": "GHL BANK",
   "branch": "GHL BANK- TAKORADI BRANCH"
  },
  {
   "code": 390601,
   "name": "GHL BANK",
   "branch": "GHL BANK-KUMASI BRANCH"
  }
 ]