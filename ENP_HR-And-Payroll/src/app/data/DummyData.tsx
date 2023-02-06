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
        name:'ANNUAL',
    },
    {
        code:'002',
        name:'PROMOTION',
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


