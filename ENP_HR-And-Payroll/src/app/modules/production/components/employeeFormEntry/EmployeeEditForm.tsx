
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const EmployeeEditForm= () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');


  const param:any  = useParams();

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server
  
  }

  console.log(param.id+" test")

  const employeedata=[
    {
     "code": 1,
     "region": "NORTHERN",
     "empcode": "2001",
     "ssfno": "44112290",
     "firstname": "ADONIS",
     "lastname": "ASANTE DANSO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221342,
     "annsal": 24000,
     "bsal": 2000,
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
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221343,
     "annsal": 36000,
     "bsal": 3000,
     "status": "Active"
    },
    {
     "code": 3,
     "region": "WESTERN",
     "empcode": "2003",
     "ssfno": "44112292",
     "firstname": "ADO",
     "lastname": "KOMI NOEL",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221344,
     "annsal": 48000,
     "bsal": 4000,
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
     "annsal": 60000,
     "bsal": 5000,
     "status": "Active"
    },
    {
     "code": 5,
     "region": "NORTHERN",
     "empcode": "2005",
     "ssfno": "44112294",
     "firstname": "EMMA",
     "lastname": "COFFIE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221346,
     "annsal": 72000,
     "bsal": 6000,
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
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221347,
     "annsal": 84000,
     "bsal": 7000,
     "status": "Active"
    },
    {
     "code": 7,
     "region": "WESTERN",
     "empcode": "2007",
     "ssfno": "44112296",
     "firstname": "BEN",
     "lastname": "BOSS",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221348,
     "annsal": 96000,
     "bsal": 8000,
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
     "annsal": 108000,
     "bsal": 9000,
     "status": "Active"
    },
    {
     "code": 9,
     "region": "NORTHERN",
     "empcode": "2009",
     "ssfno": "44112298",
     "firstname": "RICHMOND",
     "lastname": "BEN",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221350,
     "annsal": 120000,
     "bsal": 10000,
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
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221351,
     "annsal": 132000,
     "bsal": 11000,
     "status": "Active"
    },
    {
     "code": 11,
     "region": "WESTERN",
     "empcode": "20011",
     "ssfno": "44112300",
     "firstname": "BRIGHT",
     "lastname": "ABAN",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221352,
     "annsal": 144000,
     "bsal": 12000,
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
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221353,
     "annsal": 156000,
     "bsal": 13000,
     "status": "Active"
    },
    {
     "code": 13,
     "region": "NORTHERN",
     "empcode": "20013",
     "ssfno": "44112302",
     "firstname": "ENYO",
     "lastname": "NAMA",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221354,
     "annsal": 168000,
     "bsal": 14000,
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
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 4",
     "accnum": 221355,
     "annsal": 180000,
     "bsal": 15000,
     "status": "Active"
    },
    {
     "code": 15,
     "region": "WESTERN",
     "empcode": "20015",
     "ssfno": "44112304",
     "firstname": "DEEN",
     "lastname": "GINA",
     "sex": "Male",
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
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221357,
     "annsal": 204000,
     "bsal": 17000,
     "status": "Active"
    },
    {
     "code": 17,
     "region": "NORTHERN",
     "empcode": "20017",
     "ssfno": "44112306",
     "firstname": "HEELU",
     "lastname": "BAAR",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221358,
     "annsal": 216000,
     "bsal": 18000,
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
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221359,
     "annsal": 228000,
     "bsal": 19000,
     "status": "Active"
    },
    {
     "code": 19,
     "region": "WESTERN",
     "empcode": "20019",
     "ssfno": "44112308",
     "firstname": "FIE",
     "lastname": "AIU",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221360,
     "annsal": 240000,
     "bsal": 20000,
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
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221361,
     "annsal": 252000,
     "bsal": 21000,
     "status": "Active"
    },
    {
     "code": 21,
     "region": "NORTHERN",
     "empcode": "20021",
     "ssfno": "44112310",
     "firstname": "VERONICA",
     "lastname": "APPIAH",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221362,
     "annsal": 264000,
     "bsal": 22000,
     "status": "Active"
    },
    {
     "code": 22,
     "region": "ASHANTI",
     "empcode": "20022",
     "ssfno": "44112311",
     "firstname": "SOLOMON",
     "lastname": "QUARCOO",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221363,
     "annsal": 276000,
     "bsal": 23000,
     "status": "Active"
    },
    {
     "code": 23,
     "region": "WESTERN",
     "empcode": "20023",
     "ssfno": "44112312",
     "firstname": "SETH",
     "lastname": "MENSAH",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221364,
     "annsal": 288000,
     "bsal": 24000,
     "status": "Active"
    },
    {
     "code": 24,
     "region": "VOLTA",
     "empcode": "20024",
     "ssfno": "44112313",
     "firstname": "SARAH",
     "lastname": "ALABI",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221365,
     "annsal": 300000,
     "bsal": 25000,
     "status": "Active"
    },
    {
     "code": 25,
     "region": "NORTHERN",
     "empcode": "20025",
     "ssfno": "44112314",
     "firstname": "SANDRA",
     "lastname": "FRIMPONG",
     "sex": "Female",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221366,
     "annsal": 312000,
     "bsal": 26000,
     "status": "Active"
    },
    {
     "code": 26,
     "region": "ASHANTI",
     "empcode": "20026",
     "ssfno": "44112315",
     "firstname": "ROKIA",
     "lastname": "KOITA",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221367,
     "annsal": 324000,
     "bsal": 27000,
     "status": "Active"
    },
    {
     "code": 27,
     "region": "WESTERN",
     "empcode": "20027",
     "ssfno": "44112316",
     "firstname": "PRINCE",
     "lastname": "BUENORTEY",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221368,
     "annsal": 336000,
     "bsal": 28000,
     "status": "Active"
    },
    {
     "code": 28,
     "region": "VOLTA",
     "empcode": "20028",
     "ssfno": "44112317",
     "firstname": "PATRICK",
     "lastname": "OFFEI",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221369,
     "annsal": 348000,
     "bsal": 29000,
     "status": "Active"
    },
    {
     "code": 29,
     "region": "NORTHERN",
     "empcode": "20029",
     "ssfno": "44112318",
     "firstname": "OWUSU",
     "lastname": "PETER",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221370,
     "annsal": 360000,
     "bsal": 30000,
     "status": "Active"
    },
    {
     "code": 30,
     "region": "ASHANTI",
     "empcode": "20030",
     "ssfno": "44112319",
     "firstname": "NICHOLAS",
     "lastname": "GASSA",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221371,
     "annsal": 372000,
     "bsal": 31000,
     "status": "Active"
    },
    {
     "code": 31,
     "region": "WESTERN",
     "empcode": "20031",
     "ssfno": "44112320",
     "firstname": "MUSAH",
     "lastname": "SALIFU",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 5",
     "accnum": 221372,
     "annsal": 384000,
     "bsal": 32000,
     "status": "Active"
    },
    {
     "code": 32,
     "region": "VOLTA",
     "empcode": "20032",
     "ssfno": "44112321",
     "firstname": "MARY",
     "lastname": " SHAN",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221373,
     "annsal": 396000,
     "bsal": 33000,
     "status": "Active"
    },
    {
     "code": 33,
     "region": "NORTHERN",
     "empcode": "20033",
     "ssfno": "44112322",
     "firstname": "MARIAN",
     "lastname": "BENTUM",
     "sex": "Female",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221374,
     "annsal": 408000,
     "bsal": 34000,
     "status": "Active"
    },
    {
     "code": 34,
     "region": "ASHANTI",
     "empcode": "20034",
     "ssfno": "44112323",
     "firstname": "KWABENA",
     "lastname": "AGYEMAN",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221375,
     "annsal": 420000,
     "bsal": 35000,
     "status": "Active"
    },
    {
     "code": 35,
     "region": "WESTERN",
     "empcode": "20035",
     "ssfno": "44112324",
     "firstname": "JOSEPH",
     "lastname": "OKPOTI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221376,
     "annsal": 432000,
     "bsal": 36000,
     "status": "Active"
    },
    {
     "code": 36,
     "region": "VOLTA",
     "empcode": "20036",
     "ssfno": "44112325",
     "firstname": "JOSEPH",
     "lastname": "LAMPTEY",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 4",
     "accnum": 221377,
     "annsal": 444000,
     "bsal": 37000,
     "status": "Active"
    },
    {
     "code": 37,
     "region": "NORTHERN",
     "empcode": "20037",
     "ssfno": "44112326",
     "firstname": "JOEL",
     "lastname": "KODJO",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221378,
     "annsal": 456000,
     "bsal": 38000,
     "status": "Active"
    },
    {
     "code": 38,
     "region": "ASHANTI",
     "empcode": "20038",
     "ssfno": "44112327",
     "firstname": "JILDAS",
     "lastname": "QUARTEY",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221379,
     "annsal": 468000,
     "bsal": 39000,
     "status": "Active"
    },
    {
     "code": 39,
     "region": "WESTERN",
     "empcode": "20039",
     "ssfno": "44112328",
     "firstname": "JEAN",
     "lastname": "ABIE",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221380,
     "annsal": 480000,
     "bsal": 40000,
     "status": "Active"
    },
    {
     "code": 40,
     "region": "VOLTA",
     "empcode": "20040",
     "ssfno": "44112329",
     "firstname": "JAMES",
     "lastname": "AGGREY",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221381,
     "annsal": 492000,
     "bsal": 41000,
     "status": "Active"
    },
    {
     "code": 41,
     "region": "NORTHERN",
     "empcode": "20041",
     "ssfno": "44112330",
     "firstname": "ISMAEL",
     "lastname": "DODOO",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221382,
     "annsal": 504000,
     "bsal": 42000,
     "status": "Active"
    },
    {
     "code": 42,
     "region": "ASHANTI",
     "empcode": "20042",
     "ssfno": "44112331",
     "firstname": "ISAAC",
     "lastname": "ADDO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221383,
     "annsal": 516000,
     "bsal": 43000,
     "status": "Active"
    },
    {
     "code": 43,
     "region": "WESTERN",
     "empcode": "20043",
     "ssfno": "44112332",
     "firstname": "IGNACE",
     "lastname": "GALLEY KOMIVI",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221384,
     "annsal": 528000,
     "bsal": 44000,
     "status": "Active"
    },
    {
     "code": 44,
     "region": "VOLTA",
     "empcode": "20044",
     "ssfno": "44112333",
     "firstname": "HIPPOLYTE",
     "lastname": "DAH",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221385,
     "annsal": 540000,
     "bsal": 45000,
     "status": "Active"
    },
    {
     "code": 45,
     "region": "NORTHERN",
     "empcode": "20045",
     "ssfno": "44112334",
     "firstname": "GIFTY",
     "lastname": " AYEW",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221386,
     "annsal": 552000,
     "bsal": 46000,
     "status": "Active"
    },
    {
     "code": 46,
     "region": "ASHANTI",
     "empcode": "20046",
     "ssfno": "44112335",
     "firstname": "FABRICE",
     "lastname": " N'ZONOU",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 4",
     "accnum": 221387,
     "annsal": 564000,
     "bsal": 47000,
     "status": "Active"
    },
    {
     "code": 47,
     "region": "WESTERN",
     "empcode": "20047",
     "ssfno": "44112336",
     "firstname": "ERNEST",
     "lastname": "AGBLEVOR",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 5",
     "accnum": 221388,
     "annsal": 576000,
     "bsal": 48000,
     "status": "Active"
    },
    {
     "code": 48,
     "region": "VOLTA",
     "empcode": "20048",
     "ssfno": "44112337",
     "firstname": "ELIJAH",
     "lastname": "OWUSU",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221389,
     "annsal": 588000,
     "bsal": 49000,
     "status": "Active"
    },
    {
     "code": 49,
     "region": "NORTHERN",
     "empcode": "20049",
     "ssfno": "44112338",
     "firstname": "DAVID",
     "lastname": "ADDO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221390,
     "annsal": 600000,
     "bsal": 50000,
     "status": "Active"
    },
    {
     "code": 50,
     "region": "ASHANTI",
     "empcode": "20050",
     "ssfno": "44112339",
     "firstname": "DABIE",
     "lastname": "BOALI",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221391,
     "annsal": 612000,
     "bsal": 51000,
     "status": "Active"
    },
    {
     "code": 51,
     "region": "WESTERN",
     "empcode": "20051",
     "ssfno": "44112340",
     "firstname": "COMFORT",
     "lastname": "OBBIH",
     "sex": "Female",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221392,
     "annsal": 624000,
     "bsal": 52000,
     "status": "Active"
    },
    {
     "code": 52,
     "region": "VOLTA",
     "empcode": "20052",
     "ssfno": "44112341",
     "firstname": "COMFORT",
     "lastname": "ADORKU",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 4",
     "accnum": 221393,
     "annsal": 636000,
     "bsal": 53000,
     "status": "Active"
    },
    {
     "code": 53,
     "region": "NORTHERN",
     "empcode": "20053",
     "ssfno": "44112342",
     "firstname": "CHRISTIAN",
     "lastname": "ACORLATSEY",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221394,
     "annsal": 648000,
     "bsal": 54000,
     "status": "Active"
    },
    {
     "code": 54,
     "region": "ASHANTI",
     "empcode": "20054",
     "ssfno": "44112343",
     "firstname": "CAROLINE",
     "lastname": "REINDOLPH",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221395,
     "annsal": 660000,
     "bsal": 55000,
     "status": "Active"
    },
    {
     "code": 55,
     "region": "WESTERN",
     "empcode": "20055",
     "ssfno": "44112344",
     "firstname": "BOHOUO",
     "lastname": "CELESTIN",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221396,
     "annsal": 672000,
     "bsal": 56000,
     "status": "Active"
    },
    {
     "code": 56,
     "region": "VOLTA",
     "empcode": "20056",
     "ssfno": "44112345",
     "firstname": "BASIL",
     "lastname": "EKLOU",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221397,
     "annsal": 684000,
     "bsal": 57000,
     "status": "Active"
    },
    {
     "code": 57,
     "region": "NORTHERN",
     "empcode": "20057",
     "ssfno": "44112346",
     "firstname": "BAFFOUR",
     "lastname": "ADU BEMPAH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221398,
     "annsal": 696000,
     "bsal": 58000,
     "status": "Active"
    },
    {
     "code": 58,
     "region": "ASHANTI",
     "empcode": "20058",
     "ssfno": "44112347",
     "firstname": "ANTHONY",
     "lastname": "HERVE",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221399,
     "annsal": 708000,
     "bsal": 59000,
     "status": "Active"
    },
    {
     "code": 59,
     "region": "WESTERN",
     "empcode": "20059",
     "ssfno": "44112348",
     "firstname": "ALBERTA",
     "lastname": "NORTEY",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221400,
     "annsal": 720000,
     "bsal": 60000,
     "status": "Active"
    },
    {
     "code": 60,
     "region": "VOLTA",
     "empcode": "20060",
     "ssfno": "44112349",
     "firstname": "AGNES",
     "lastname": "ANTWI",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221401,
     "annsal": 732000,
     "bsal": 61000,
     "status": "Active"
    },
    {
     "code": 61,
     "region": "NORTHERN",
     "empcode": "20061",
     "ssfno": "44112350",
     "firstname": "ADO",
     "lastname": "NOEL",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221402,
     "annsal": 744000,
     "bsal": 62000,
     "status": "Active"
    },
    {
     "code": 62,
     "region": "ASHANTI",
     "empcode": "20062",
     "ssfno": "44112351",
     "firstname": "ABIGAIL",
     "lastname": "ANKRAH",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 4",
     "accnum": 221403,
     "annsal": 756000,
     "bsal": 63000,
     "status": "Active"
    },
    {
     "code": 63,
     "region": "WESTERN",
     "empcode": "20063",
     "ssfno": "44112352",
     "firstname": "YVONNE",
     "lastname": "AGBO",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 5",
     "accnum": 221404,
     "annsal": 768000,
     "bsal": 64000,
     "status": "Active"
    },
    {
     "code": 64,
     "region": "VOLTA",
     "empcode": "20064",
     "ssfno": "44112353",
     "firstname": "YUSSIF",
     "lastname": "ABUBAKAR",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221405,
     "annsal": 780000,
     "bsal": 65000,
     "status": "Active"
    },
    {
     "code": 65,
     "region": "NORTHERN",
     "empcode": "20065",
     "ssfno": "44112354",
     "firstname": "WILLIAM",
     "lastname": "NORTEY",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221406,
     "annsal": 792000,
     "bsal": 66000,
     "status": "Active"
    },
    {
     "code": 66,
     "region": "ASHANTI",
     "empcode": "20066",
     "ssfno": "44112355",
     "firstname": "VIDA",
     "lastname": "ASARE",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221407,
     "annsal": 804000,
     "bsal": 67000,
     "status": "Active"
    },
    {
     "code": 67,
     "region": "WESTERN",
     "empcode": "20067",
     "ssfno": "44112356",
     "firstname": "VERONICA",
     "lastname": "APETOR",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221408,
     "annsal": 816000,
     "bsal": 68000,
     "status": "Active"
    },
    {
     "code": 68,
     "region": "VOLTA",
     "empcode": "20068",
     "ssfno": "44112357",
     "firstname": "VANESSA",
     "lastname": "FORSON",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221409,
     "annsal": 828000,
     "bsal": 69000,
     "status": "Active"
    },
    {
     "code": 69,
     "region": "NORTHERN",
     "empcode": "20069",
     "ssfno": "44112358",
     "firstname": "VALENCIA",
     "lastname": "T",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221410,
     "annsal": 840000,
     "bsal": 70000,
     "status": "Active"
    },
    {
     "code": 70,
     "region": "ASHANTI",
     "empcode": "20070",
     "ssfno": "44112359",
     "firstname": "THEOPHILUS",
     "lastname": "ABBEY",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221411,
     "annsal": 852000,
     "bsal": 71000,
     "status": "Active"
    },
    {
     "code": 71,
     "region": "WESTERN",
     "empcode": "20071",
     "ssfno": "44112360",
     "firstname": "TENGUE",
     "lastname": "KOKOU",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221412,
     "annsal": 864000,
     "bsal": 72000,
     "status": "Active"
    },
    {
     "code": 72,
     "region": "VOLTA",
     "empcode": "20072",
     "ssfno": "44112361",
     "firstname": "STEPHEN",
     "lastname": "TACKIE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221413,
     "annsal": 876000,
     "bsal": 73000,
     "status": "Active"
    },
    {
     "code": 73,
     "region": "NORTHERN",
     "empcode": "20073",
     "ssfno": "44112362",
     "firstname": "STEPHEN",
     "lastname": "OFFEI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221414,
     "annsal": 888000,
     "bsal": 74000,
     "status": "Active"
    },
    {
     "code": 74,
     "region": "ASHANTI",
     "empcode": "20074",
     "ssfno": "44112363",
     "firstname": "STEPHEN",
     "lastname": "TETTEH",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221415,
     "annsal": 900000,
     "bsal": 75000,
     "status": "Active"
    },
    {
     "code": 75,
     "region": "WESTERN",
     "empcode": "20075",
     "ssfno": "44112364",
     "firstname": "SOULEYMANE",
     "lastname": " SY (JULES)",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221416,
     "annsal": 912000,
     "bsal": 76000,
     "status": "Active"
    },
    {
     "code": 76,
     "region": "VOLTA",
     "empcode": "20076",
     "ssfno": "44112365",
     "firstname": "SHINE",
     "lastname": "NUGLO",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221417,
     "annsal": 924000,
     "bsal": 77000,
     "status": "Active"
    },
    {
     "code": 77,
     "region": "NORTHERN",
     "empcode": "20077",
     "ssfno": "44112366",
     "firstname": "SHERIFATU",
     "lastname": "AMUZU",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221418,
     "annsal": 936000,
     "bsal": 78000,
     "status": "Active"
    },
    {
     "code": 78,
     "region": "ASHANTI",
     "empcode": "20078",
     "ssfno": "44112367",
     "firstname": "SARAH",
     "lastname": "ARTHUR",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221419,
     "annsal": 948000,
     "bsal": 79000,
     "status": "Active"
    },
    {
     "code": 79,
     "region": "WESTERN",
     "empcode": "20079",
     "ssfno": "44112368",
     "firstname": "SAMUEL",
     "lastname": "SELASI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 5",
     "accnum": 221420,
     "annsal": 960000,
     "bsal": 80000,
     "status": "Active"
    },
    {
     "code": 80,
     "region": "VOLTA",
     "empcode": "20080",
     "ssfno": "44112369",
     "firstname": "SAMUEL",
     "lastname": "OFORI",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221421,
     "annsal": 972000,
     "bsal": 81000,
     "status": "Active"
    },
    {
     "code": 81,
     "region": "NORTHERN",
     "empcode": "20081",
     "ssfno": "44112370",
     "firstname": "SAMIR",
     "lastname": "TALEB",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221422,
     "annsal": 984000,
     "bsal": 82000,
     "status": "Active"
    },
    {
     "code": 82,
     "region": "ASHANTI",
     "empcode": "20082",
     "ssfno": "44112371",
     "firstname": "NANA",
     "lastname": "KORANTENG",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221423,
     "annsal": 996000,
     "bsal": 83000,
     "status": "Active"
    },
    {
     "code": 83,
     "region": "WESTERN",
     "empcode": "20083",
     "ssfno": "44112372",
     "firstname": "RICHARD",
     "lastname": "KOFFI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221424,
     "annsal": 1008000,
     "bsal": 84000,
     "status": "Active"
    },
    {
     "code": 84,
     "region": "VOLTA",
     "empcode": "20084",
     "ssfno": "44112373",
     "firstname": "RICHARD",
     "lastname": "ANOM",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 4",
     "accnum": 221425,
     "annsal": 1020000,
     "bsal": 85000,
     "status": "Active"
    },
    {
     "code": 85,
     "region": "NORTHERN",
     "empcode": "20085",
     "ssfno": "44112374",
     "firstname": "REX",
     "lastname": "YEMOH",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221426,
     "annsal": 1032000,
     "bsal": 86000,
     "status": "Active"
    },
    {
     "code": 86,
     "region": "ASHANTI",
     "empcode": "20086",
     "ssfno": "44112375",
     "firstname": "REGINALD",
     "lastname": "MANTEY",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221427,
     "annsal": 1044000,
     "bsal": 87000,
     "status": "Active"
    },
    {
     "code": 87,
     "region": "WESTERN",
     "empcode": "20087",
     "ssfno": "44112376",
     "firstname": "RAZAK",
     "lastname": "BAGNALE",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221428,
     "annsal": 1056000,
     "bsal": 88000,
     "status": "Active"
    },
    {
     "code": 88,
     "region": "VOLTA",
     "empcode": "20088",
     "ssfno": "44112377",
     "firstname": "RASHID",
     "lastname": "RAHMAN",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221429,
     "annsal": 1068000,
     "bsal": 89000,
     "status": "Active"
    },
    {
     "code": 89,
     "region": "NORTHERN",
     "empcode": "20089",
     "ssfno": "44112378",
     "firstname": "PROSPER",
     "lastname": "ADJONKU",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221430,
     "annsal": 1080000,
     "bsal": 90000,
     "status": "Active"
    },
    {
     "code": 90,
     "region": "ASHANTI",
     "empcode": "20090",
     "ssfno": "44112379",
     "firstname": "PRINCE",
     "lastname": "BOAMPONG",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221431,
     "annsal": 1092000,
     "bsal": 91000,
     "status": "Active"
    },
    {
     "code": 91,
     "region": "WESTERN",
     "empcode": "20091",
     "ssfno": "44112380",
     "firstname": "PRINCE",
     "lastname": "ANKRAH",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221432,
     "annsal": 1104000,
     "bsal": 92000,
     "status": "Active"
    },
    {
     "code": 92,
     "region": "VOLTA",
     "empcode": "20092",
     "ssfno": "44112381",
     "firstname": "PRINCE",
     "lastname": "ADUMUAH OWUO",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221433,
     "annsal": 1116000,
     "bsal": 93000,
     "status": "Active"
    },
    {
     "code": 93,
     "region": "NORTHERN",
     "empcode": "20093",
     "ssfno": "44112382",
     "firstname": "PEARLINA",
     "lastname": "OBUOBI",
     "sex": "Female",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221434,
     "annsal": 1128000,
     "bsal": 94000,
     "status": "Active"
    },
    {
     "code": 94,
     "region": "ASHANTI",
     "empcode": "20094",
     "ssfno": "44112383",
     "firstname": "PAULINA",
     "lastname": "GYAMERA",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 4",
     "accnum": 221435,
     "annsal": 1140000,
     "bsal": 95000,
     "status": "Active"
    },
    {
     "code": 95,
     "region": "WESTERN",
     "empcode": "20095",
     "ssfno": "44112384",
     "firstname": "PATRICK",
     "lastname": "ASARE",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 5",
     "accnum": 221436,
     "annsal": 1152000,
     "bsal": 96000,
     "status": "Active"
    },
    {
     "code": 96,
     "region": "VOLTA",
     "empcode": "20096",
     "ssfno": "44112385",
     "firstname": "PATRICK",
     "lastname": "AMOAKWAH",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221437,
     "annsal": 1164000,
     "bsal": 97000,
     "status": "Active"
    },
    {
     "code": 97,
     "region": "NORTHERN",
     "empcode": "20097",
     "ssfno": "44112386",
     "firstname": "NOUWAVI",
     "lastname": "THEOPHILE",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221438,
     "annsal": 1176000,
     "bsal": 98000,
     "status": "Active"
    },
    {
     "code": 98,
     "region": "ASHANTI",
     "empcode": "20098",
     "ssfno": "44112387",
     "firstname": "NII",
     "lastname": "ADU-ARYEE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221439,
     "annsal": 1188000,
     "bsal": 99000,
     "status": "Active"
    },
    {
     "code": 99,
     "region": "WESTERN",
     "empcode": "20099",
     "ssfno": "44112388",
     "firstname": "NAOMI",
     "lastname": " BAAH",
     "sex": "Female",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221440,
     "annsal": 1200000,
     "bsal": 100000,
     "status": "Active"
    },
    {
     "code": 100,
     "region": "VOLTA",
     "empcode": "200100",
     "ssfno": "44112389",
     "firstname": "MUSAH",
     "lastname": " ALI",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221441,
     "annsal": 1212000,
     "bsal": 101000,
     "status": "Active"
    },
    {
     "code": 101,
     "region": "NORTHERN",
     "empcode": "200101",
     "ssfno": "44112390",
     "firstname": "MUMUNI",
     "lastname": " SULEMAN",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221442,
     "annsal": 1224000,
     "bsal": 102000,
     "status": "Active"
    },
    {
     "code": 102,
     "region": "ASHANTI",
     "empcode": "200102",
     "ssfno": "44112391",
     "firstname": "MOSES",
     "lastname": " NII ARMAH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221443,
     "annsal": 1236000,
     "bsal": 103000,
     "status": "Active"
    },
    {
     "code": 103,
     "region": "WESTERN",
     "empcode": "200103",
     "ssfno": "44112392",
     "firstname": "MICHAEL",
     "lastname": "OSEI",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221444,
     "annsal": 1248000,
     "bsal": 104000,
     "status": "Active"
    },
    {
     "code": 104,
     "region": "VOLTA",
     "empcode": "200104",
     "ssfno": "44112393",
     "firstname": "MICHAEL",
     "lastname": "JAKAMBA",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221445,
     "annsal": 1260000,
     "bsal": 105000,
     "status": "Active"
    },
    {
     "code": 105,
     "region": "NORTHERN",
     "empcode": "200105",
     "ssfno": "44112394",
     "firstname": "MENSAH",
     "lastname": "NUNOO",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221446,
     "annsal": 1272000,
     "bsal": 106000,
     "status": "Active"
    },
    {
     "code": 106,
     "region": "ASHANTI",
     "empcode": "200106",
     "ssfno": "44112395",
     "firstname": "MATTHIAS",
     "lastname": "AMENOVI",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221447,
     "annsal": 1284000,
     "bsal": 107000,
     "status": "Active"
    },
    {
     "code": 107,
     "region": "WESTERN",
     "empcode": "200107",
     "ssfno": "44112396",
     "firstname": "MARY",
     "lastname": "GABION",
     "sex": "Female",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221448,
     "annsal": 1296000,
     "bsal": 108000,
     "status": "Active"
    },
    {
     "code": 108,
     "region": "VOLTA",
     "empcode": "200108",
     "ssfno": "44112397",
     "firstname": "MARCEL",
     "lastname": "DANSI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221449,
     "annsal": 1308000,
     "bsal": 109000,
     "status": "Active"
    },
    {
     "code": 109,
     "region": "NORTHERN",
     "empcode": "200109",
     "ssfno": "44112398",
     "firstname": "LISA",
     "lastname": "ASANTE",
     "sex": "Female",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221450,
     "annsal": 1320000,
     "bsal": 110000,
     "status": "Active"
    },
    {
     "code": 110,
     "region": "ASHANTI",
     "empcode": "200110",
     "ssfno": "44112399",
     "firstname": "LAMBERT",
     "lastname": "QUARTEY",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221451,
     "annsal": 1332000,
     "bsal": 111000,
     "status": "Active"
    },
    {
     "code": 111,
     "region": "WESTERN",
     "empcode": "200111",
     "ssfno": "44112400",
     "firstname": "KWAME",
     "lastname": "AFRIYIE",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 5",
     "accnum": 221452,
     "annsal": 1344000,
     "bsal": 112000,
     "status": "Active"
    },
    {
     "code": 112,
     "region": "VOLTA",
     "empcode": "200112",
     "ssfno": "44112401",
     "firstname": "KATHY",
     "lastname": "AWARTEY",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221453,
     "annsal": 1356000,
     "bsal": 113000,
     "status": "Active"
    },
    {
     "code": 113,
     "region": "NORTHERN",
     "empcode": "200113",
     "ssfno": "44112402",
     "firstname": "JUDITH",
     "lastname": "ADEKU",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221454,
     "annsal": 1368000,
     "bsal": 114000,
     "status": "Active"
    },
    {
     "code": 114,
     "region": "ASHANTI",
     "empcode": "200114",
     "ssfno": "44112403",
     "firstname": "JOSEPH",
     "lastname": "OCQUAYE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221455,
     "annsal": 1380000,
     "bsal": 115000,
     "status": "Active"
    },
    {
     "code": 115,
     "region": "WESTERN",
     "empcode": "200115",
     "ssfno": "44112404",
     "firstname": "JERIMIAH",
     "lastname": "BIWIIN",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221456,
     "annsal": 1392000,
     "bsal": 116000,
     "status": "Active"
    },
    {
     "code": 116,
     "region": "VOLTA",
     "empcode": "200116",
     "ssfno": "44112405",
     "firstname": "JEFFERY",
     "lastname": "ADE-DANIELS",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 4",
     "accnum": 221457,
     "annsal": 1404000,
     "bsal": 117000,
     "status": "Active"
    },
    {
     "code": 117,
     "region": "NORTHERN",
     "empcode": "200117",
     "ssfno": "44112406",
     "firstname": "JAMES",
     "lastname": "ADOTEY",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221458,
     "annsal": 1416000,
     "bsal": 118000,
     "status": "Active"
    },
    {
     "code": 118,
     "region": "ASHANTI",
     "empcode": "200118",
     "ssfno": "44112407",
     "firstname": "JACOB",
     "lastname": "MENSAH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221459,
     "annsal": 1428000,
     "bsal": 119000,
     "status": "Active"
    },
    {
     "code": 119,
     "region": "WESTERN",
     "empcode": "200119",
     "ssfno": "44112408",
     "firstname": "ISSAH",
     "lastname": "ALHASSAN",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221460,
     "annsal": 1440000,
     "bsal": 120000,
     "status": "Active"
    },
    {
     "code": 120,
     "region": "VOLTA",
     "empcode": "200120",
     "ssfno": "44112409",
     "firstname": "ISAIAH",
     "lastname": "GYEWU",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221461,
     "annsal": 1452000,
     "bsal": 121000,
     "status": "Active"
    },
    {
     "code": 121,
     "region": "NORTHERN",
     "empcode": "200121",
     "ssfno": "44112410",
     "firstname": "ISAAC",
     "lastname": "OTUTEY",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221462,
     "annsal": 1464000,
     "bsal": 122000,
     "status": "Active"
    },
    {
     "code": 122,
     "region": "ASHANTI",
     "empcode": "200122",
     "ssfno": "44112411",
     "firstname": "ISAAC",
     "lastname": " BUBU",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221463,
     "annsal": 1476000,
     "bsal": 123000,
     "status": "Active"
    },
    {
     "code": 123,
     "region": "WESTERN",
     "empcode": "200123",
     "ssfno": "44112412",
     "firstname": "HERBERT",
     "lastname": "LARYEA",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221464,
     "annsal": 1488000,
     "bsal": 124000,
     "status": "Active"
    },
    {
     "code": 124,
     "region": "VOLTA",
     "empcode": "200124",
     "ssfno": "44112413",
     "firstname": "GORDON",
     "lastname": "OHENE ASARE",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221465,
     "annsal": 1500000,
     "bsal": 125000,
     "status": "Active"
    },
    {
     "code": 125,
     "region": "NORTHERN",
     "empcode": "200125",
     "ssfno": "44112414",
     "firstname": "GODWIN",
     "lastname": "BAWA",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221466,
     "annsal": 1512000,
     "bsal": 126000,
     "status": "Active"
    },
    {
     "code": 126,
     "region": "ASHANTI",
     "empcode": "200126",
     "ssfno": "44112415",
     "firstname": "GEORGINA",
     "lastname": "ARHIN",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 4",
     "accnum": 221467,
     "annsal": 1524000,
     "bsal": 127000,
     "status": "Active"
    },
    {
     "code": 127,
     "region": "WESTERN",
     "empcode": "200127",
     "ssfno": "44112416",
     "firstname": "FREDERICK",
     "lastname": "TETTEH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 5",
     "accnum": 221468,
     "annsal": 1536000,
     "bsal": 128000,
     "status": "Active"
    },
    {
     "code": 128,
     "region": "VOLTA",
     "empcode": "200128",
     "ssfno": "44112417",
     "firstname": "FRANZ",
     "lastname": "NUNOOFIO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221469,
     "annsal": 1548000,
     "bsal": 129000,
     "status": "Active"
    },
    {
     "code": 129,
     "region": "NORTHERN",
     "empcode": "200129",
     "ssfno": "44112418",
     "firstname": "FRANCIS",
     "lastname": "SEKU",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221470,
     "annsal": 1560000,
     "bsal": 130000,
     "status": "Active"
    },
    {
     "code": 130,
     "region": "ASHANTI",
     "empcode": "200130",
     "ssfno": "44112419",
     "firstname": "FAISAL",
     "lastname": "AMADU",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221471,
     "annsal": 1572000,
     "bsal": 131000,
     "status": "Active"
    },
    {
     "code": 131,
     "region": "WESTERN",
     "empcode": "200131",
     "ssfno": "44112420",
     "firstname": "EVANS",
     "lastname": "ANNANG",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221472,
     "annsal": 1584000,
     "bsal": 132000,
     "status": "Active"
    },
    {
     "code": 132,
     "region": "VOLTA",
     "empcode": "200132",
     "ssfno": "44112421",
     "firstname": "EUGENE",
     "lastname": "TRAORE",
     "sex": "FEMALE",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 4",
     "accnum": 221473,
     "annsal": 1596000,
     "bsal": 133000,
     "status": "Active"
    },
    {
     "code": 133,
     "region": "NORTHERN",
     "empcode": "200133",
     "ssfno": "44112422",
     "firstname": "ERNESTINA",
     "lastname": "SOWAH",
     "sex": "Female",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221474,
     "annsal": 1608000,
     "bsal": 134000,
     "status": "Active"
    },
    {
     "code": 134,
     "region": "ASHANTI",
     "empcode": "200134",
     "ssfno": "44112423",
     "firstname": "ENOCH",
     "lastname": "LAMPTEY",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 2",
     "accnum": 221475,
     "annsal": 1620000,
     "bsal": 135000,
     "status": "Active"
    },
    {
     "code": 135,
     "region": "WESTERN",
     "empcode": "200135",
     "ssfno": "44112424",
     "firstname": "ENOCH",
     "lastname": "ADJETEY",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221476,
     "annsal": 1632000,
     "bsal": 136000,
     "status": "Active"
    },
    {
     "code": 136,
     "region": "VOLTA",
     "empcode": "200136",
     "ssfno": "44112425",
     "firstname": "EMMANUELLA",
     "lastname": "OWUSU",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 1",
     "accnum": 221477,
     "annsal": 1644000,
     "bsal": 137000,
     "status": "Active"
    },
    {
     "code": 137,
     "region": "NORTHERN",
     "empcode": "200137",
     "ssfno": "44112426",
     "firstname": "EMMANUEL",
     "lastname": "ZAH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 2",
     "accnum": 221478,
     "annsal": 1656000,
     "bsal": 138000,
     "status": "Active"
    },
    {
     "code": 138,
     "region": "ASHANTI",
     "empcode": "200138",
     "ssfno": "44112427",
     "firstname": "EMMANUEL",
     "lastname": "ODAMTTEN",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 3",
     "accnum": 221479,
     "annsal": 1668000,
     "bsal": 139000,
     "status": "Active"
    },
    {
     "code": 139,
     "region": "WESTERN",
     "empcode": "200139",
     "ssfno": "44112428",
     "firstname": "EMMANUEL",
     "lastname": "LAMPTEY",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221480,
     "annsal": 1680000,
     "bsal": 140000,
     "status": "Active"
    },
    {
     "code": 140,
     "region": "VOLTA",
     "empcode": "200140",
     "ssfno": "44112429",
     "firstname": "EMMANUEL",
     "lastname": "MENSAH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221481,
     "annsal": 1692000,
     "bsal": 141000,
     "status": "Active"
    },
    {
     "code": 141,
     "region": "NORTHERN",
     "empcode": "200141",
     "ssfno": "44112430",
     "firstname": "EMMANUEL",
     "lastname": "BAFFOUR",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221482,
     "annsal": 1704000,
     "bsal": 142000,
     "status": "Active"
    },
    {
     "code": 142,
     "region": "ASHANTI",
     "empcode": "200142",
     "ssfno": "44112431",
     "firstname": "ELVIS",
     "lastname": " ASANTE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 4",
     "accnum": 221483,
     "annsal": 1716000,
     "bsal": 143000,
     "status": "Active"
    },
    {
     "code": 143,
     "region": "WESTERN",
     "empcode": "200143",
     "ssfno": "44112432",
     "firstname": "EBENEZER",
     "lastname": "QUAYE",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 5",
     "accnum": 221484,
     "annsal": 1728000,
     "bsal": 144000,
     "status": "Active"
    },
    {
     "code": 144,
     "region": "VOLTA",
     "empcode": "200144",
     "ssfno": "44112433",
     "firstname": "EBENEZER",
     "lastname": "GALLEY",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221485,
     "annsal": 1740000,
     "bsal": 145000,
     "status": "Active"
    },
    {
     "code": 145,
     "region": "NORTHERN",
     "empcode": "200145",
     "ssfno": "44112434",
     "firstname": "DENNIS",
     "lastname": "LARYEA",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221486,
     "annsal": 1752000,
     "bsal": 146000,
     "status": "Active"
    },
    {
     "code": 146,
     "region": "ASHANTI",
     "empcode": "200146",
     "ssfno": "44112435",
     "firstname": "DELALI",
     "lastname": "AMEKU",
     "sex": "FEMALE",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221487,
     "annsal": 1764000,
     "bsal": 147000,
     "status": "Active"
    },
    {
     "code": 147,
     "region": "WESTERN",
     "empcode": "200147",
     "ssfno": "44112436",
     "firstname": "DEFENCER",
     "lastname": "ANYETEI",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221488,
     "annsal": 1776000,
     "bsal": 148000,
     "status": "Active"
    },
    {
     "code": 148,
     "region": "VOLTA",
     "empcode": "200148",
     "ssfno": "44112437",
     "firstname": "DAVID",
     "lastname": "TETTEH",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221489,
     "annsal": 1788000,
     "bsal": 149000,
     "status": "Active"
    },
    {
     "code": 149,
     "region": "NORTHERN",
     "empcode": "200149",
     "ssfno": "44112438",
     "firstname": "DAVID",
     "lastname": "BOALI",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "HEADOFFICE",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 1",
     "accnum": 221490,
     "annsal": 1800000,
     "bsal": 150000,
     "status": "Active"
    },
    {
     "code": 150,
     "region": "ASHANTI",
     "empcode": "200150",
     "ssfno": "44112439",
     "firstname": "DAVID",
     "lastname": "AJUICK",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "PRODUCTION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221491,
     "annsal": 1812000,
     "bsal": 151000,
     "status": "Active"
    },
    {
     "code": 151,
     "region": "WESTERN",
     "empcode": "200151",
     "ssfno": "44112440",
     "firstname": "DANIEL",
     "lastname": "ANUM",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "ADMINISTRATION",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 3",
     "accnum": 221492,
     "annsal": 1824000,
     "bsal": 152000,
     "status": "Active"
    },
    {
     "code": 152,
     "region": "VOLTA",
     "empcode": "200152",
     "ssfno": "44112441",
     "firstname": "DANIEL",
     "lastname": "ADDO",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 1",
     "accnum": 221493,
     "annsal": 1836000,
     "bsal": 153000,
     "status": "Active"
    },
    {
     "code": 153,
     "region": "NORTHERN",
     "empcode": "200153",
     "ssfno": "44112442",
     "firstname": "COLLINS",
     "lastname": "ASANTE",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "HEADOFFICE",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 2",
     "accnum": 221494,
     "annsal": 1848000,
     "bsal": 154000,
     "status": "Active"
    },
    {
     "code": 154,
     "region": "ASHANTI",
     "empcode": "200154",
     "ssfno": "44112443",
     "firstname": "CHRISTOPHER",
     "lastname": " AGILINKO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "PRODUCTION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 3",
     "accnum": 221495,
     "annsal": 1860000,
     "bsal": 155000,
     "status": "Active"
    },
    {
     "code": 155,
     "region": "WESTERN",
     "empcode": "200155",
     "ssfno": "44112444",
     "firstname": "BISMARK",
     "lastname": " ABLADE",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "ADMINISTRATION",
     "grade": "FACTORY MANAGER",
     "notch": "NOTCH 1",
     "accnum": 221496,
     "annsal": 1872000,
     "bsal": 156000,
     "status": "Active"
    },
    {
     "code": 156,
     "region": "VOLTA",
     "empcode": "200156",
     "ssfno": "44112445",
     "firstname": "BELGET",
     "lastname": "KOOMSON",
     "sex": "FEMALE",
     "paygroup": "MANAGEMENT",
     "depart": "RESEARCH AND DEVELOPMENT",
     "grade": "ASSISTANT ACCONTANT",
     "notch": "NOTCH 2",
     "accnum": 221497,
     "annsal": 1884000,
     "bsal": 157000,
     "status": "Active"
    },
    {
     "code": 157,
     "region": "NORTHERN",
     "empcode": "200157",
     "ssfno": "44112446",
     "firstname": "KOFO",
     "lastname": "ABOO",
     "sex": "Male",
     "paygroup": "CASUAL",
     "depart": "HEADOFFICE",
     "grade": "ACCOUNT OFFICER",
     "notch": "NOTCH 3",
     "accnum": 221498,
     "annsal": 1896000,
     "bsal": 158000,
     "status": "Active"
    },
    {
     "code": 158,
     "region": "ASHANTI",
     "empcode": "200158",
     "ssfno": "44112447",
     "firstname": "ANTHONY",
     "lastname": "GYASI",
     "sex": "Male",
     "paygroup": "GENERAL",
     "depart": "PRODUCTION",
     "grade": "HUMAN RESOURCE MANAGER",
     "notch": "NOTCH 4",
     "accnum": 221499,
     "annsal": 1908000,
     "bsal": 159000,
     "status": "Active"
    },
    {
     "code": 159,
     "region": "WESTERN",
     "empcode": "200159",
     "ssfno": "44112448",
     "firstname": "ANTHONY",
     "lastname": "MASOPERH",
     "sex": "Male",
     "paygroup": "MANAGEMENT",
     "depart": "ADMINISTRATION",
     "grade": "SALES REP ENTRY",
     "notch": "NOTCH 5",
     "accnum": 221500,
     "annsal": 1920000,
     "bsal": 160000,
     "status": "Active"
    }
   ]

  const dataByID = employeedata.find((employee:any) =>{
    return employee.code.toString() ===param.id
  });

  // console.log(dataByID)
  const handleTabChange = (newTab:any) => {
    setActiveTab(newTab);
  }

  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

    // to preview the uploaded file
    const onPreview = async (file: UploadFile) => {
      let src = file.url as string;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj as RcFile);
          reader.onload = () => resolve(reader.result as string);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
  

  return (
    <div
    className="col-12"
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',
     
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >


      
      <Link to="/employee">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to list
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        {/* <div className="tabs">
          <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
            <li className="nav-item">
              <a  onClick={() => handleTabChange(1)} className={ activeTab === 1 ? 'active' : ''}>Tab 1</a>
            </li>
            <li className="nav-item">
              <button onClick={() => handleTabChange(2)} className={activeTab === 2 ? 'active' : ''}>Tab 2</button>
            </li>
            <li className="nav-item">
              <a onClick={() => handleTabChange(3)} className={activeTab === 3 ? 'active' : ''}>Tab 3</a>
            </li>
          
          </ul>
        </div> */}
        <div className="tabs">
          
          <button 
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab1')}
          >
            Details
          </button>
          <button 
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab2')}
          >
            Communication
          </button>
          <button 
            className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab3')}
          >
            Administration
          </button>
          <button 
            className={`tab ${activeTab === 'tab4' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab4')}
          >
            Payroll
          </button>
          <button 
            className={`tab ${activeTab === 'tab5' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab5')}
          >
            Notes
          </button>
          <button 
            className={`tab ${activeTab === 'tab6' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab6')}
          >
            Training
          </button>
          <button 
            className={`tab ${activeTab === 'tab7' ? 'active' : ''}`} 
            onClick={() => handleTabClick('tab7')}
          >
            Medicals
          </button>
          
        </div>
        
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <Upload
                      
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                > 
                  <UploadOutlined />
                </Upload>
              </div>
              
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">First Name</label>
              <input type="text" name="fname" value={dataByID?.firstname}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Surname</label>
              <input type="text" name="mname" value={dataByID?.lastname} className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Other Name</label>
                <input type="text" name="lname"  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                <input type="date" name="dob"  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option value={dataByID?.sex}>{dataByID?.sex}</option>
                  {/* <option value="1">MALE</option>
                  <option value="2">FEMALE</option> */}
                 
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Marital Status</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">SINGLE</option>
                  <option value="2">MARRIED</option>
                 
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Nationality</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">GHANAIAN</option>
                  <option value="2">NIGERIAN</option>
                  <option value="3">TOGOLESE</option>
                  <option value="4">AMERICAN</option>
                  <option value="5">CANADIAN</option>
                </select>
              </div>
            </div>

          </div>
          }

          {/* Communications */}
          {
          activeTab === 'tab2' && 
            <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Phone Number</label>
                  <input type="phone" name="phone"  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Alternative Phone numbe</label>
                  <input type="phone" name="aphone" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Address</label>
                  <input type="text" name="address" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Residential Address</label>
                  <input type="text" name="raddress" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Email</label>
                  <input type="email" name="email" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Personal Email</label>
                  <input type="email" name="pemail" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Next of kin</label>
                  <input type="text" name="email" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Guarantor</label>
                  <input type="text" name="guarantor" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
          }
          {/* Administration */}
          {activeTab === 'tab3' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Pay Group</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.paygroup} </option>
                  <option value="1">MANAGEMENT</option>
                  <option value="2">CASUAL</option>
                  <option value="3">GENERAL</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Notch</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.notch} </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Grade</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.grade} </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Basic Salary</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">Ghc100</option>
                  <option value="2">Ghc400</option>
                  <option value="3">Ghc3000</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Category</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">PERMANENT</option>
                  <option value="2">SERVICE</option>
                  <option value="3">CONTRACT</option>
                  <option value="4">SENIOR STAFF</option>
                  <option value="5">JUNIOR STAFF</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Department</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.depart} </option>
                  <option value="1">HUMAN RESOURCES</option>
                  <option value="2">FACTORY</option>
                  <option value="3">ACCOUNTING AND FINANCE</option>
                  <option value="4">FACTORY</option>
                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Division</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-3 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Employment Date</label>
                <input type="date" name="edate" onChange={handleChange}  className="form-control form-control-solid" />

              </div>
              <div className='col-3 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Terminate</a>
              </div>
            </div>
            <div className='row mb-0'>
              {/* <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Termination Date</label>
                <input type="text" name="tdate" onChange={handleChange}  className="form-control form-control-solid" />

              </div> */}
              {/* <div className='col-6 mb-7'>
                <br></br>
             
                <a href="#" className="btn btn-danger"> Terminate</a>
              </div> */}
            </div>
          </div>}

          {/* Payroll */}
          {activeTab === 'tab4' && 
          <div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Salary Type</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Payment Method</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Bank</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Account </label>
                <input type="text" name="account" value={dataByID?.accnum} className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSF</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>{dataByID?.ssfno} </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">SSN </label>
                <input type="text" name="ssn" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div  className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Tax</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">TIN </label>
                <input type="text" name="tin" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }
          {/* Disciplinary Actions */}
          {activeTab === 'tab5' && 
          <div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                <input type="text" name="dnote" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }

          {/* Trainings */}
          {activeTab === 'tab6' && 
            <div>
            
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="tnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
            }

            {/* Medicals */}
          {activeTab === 'tab7' && 
            <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Date</label>
                  <input type="date" name="date" onChange={handleChange}  className="form-control form-control-solid" />

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className=" form-label">Note </label>
                  <input type="text" name="mnote" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>}
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}


export  {EmployeeEditForm}