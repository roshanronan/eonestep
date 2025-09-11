import React from 'react'
import CourseCards from '../components/Courses'

const SoftwareCourse = () => {


      const courses =[
  {
    "id": 73,
    "lessons": 6,
    "rating": 3,
    "students": 215,
    "title": "CERTIFICATE IN COMPUTER FUNDAMENTALS",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms Office (Word, Excel, Power Point).",
    "duration": "3 Month"
  },
  {
    "id": 74,
    "lessons": 2,
    "rating": 1,
    "students": 411,
    "title": "CERTIFICATE IN OFFICE AUTOMATION",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms Office (Word, Excel), Internet.",
    "duration": "3 Month"
  },
  {
    "id": 75,
    "lessons": 7,
    "rating": 2,
    "students": 301,
    "title": "CERTIFICATE IN MS WORD",
    "part": "",
    "description": "Computer Fundamentals, Ms Word.",
    "duration": "3 Month"
  },
  {
    "id": 76,
    "lessons": 4,
    "rating": 0,
    "students": 315,
    "title": "CERTIFICATE IN MS EXCEL",
    "part": "",
    "description": "Computer Fundamentals, Ms Excel.",
    "duration": "3 Month"
  }
,
  {
    "id": 1,
    "lessons": 18,
    "rating": 2,
    "students": 117,
    "title": "CERTIFICATE IN MS ACCESS",
    "part": "",
    "description": "Computer Fundamentals, Ms Access.",
    "duration": "3 Month"
  },
  {
    "id": 2,
    "lessons": 4,
    "rating": 1,
    "students": 186,
    "title": "CERTIFICATE IN MS POWER POINT",
    "part": "",
    "description": "Computer Fundamentals, Ms Power Point.",
    "duration": "3 Month"
  },
  {
    "id": 3,
    "lessons": 12,
    "rating": 2,
    "students": 334,
    "title": "CERTIFICATE IN WINDOWS 7",
    "part": "",
    "description": "Computer Fundamentals, Windows 7.",
    "duration": "3 Month"
  },
  {
    "id": 4,
    "lessons": 6,
    "rating": 1,
    "students": 188,
    "title": "CERTIFICATE IN DOS",
    "part": "",
    "description": "Computer Fundamentals, DOS.",
    "duration": "3 Month"
  },
  {
    "id": 5,
    "lessons": 16,
    "rating": 2,
    "students": 138,
    "title": "CERTIFICATE IN ENGLISH TYPING",
    "part": "",
    "description": "Computer Fundamentals, English Typing.",
    "duration": "3 Month"
  },
  {
    "id": 6,
    "lessons": 19,
    "rating": 2,
    "students": 339,
    "title": "CERTIFICATE IN HINDI TYPING",
    "part": "",
    "description": "Computer Fundamentals, Hindi Typing using Hindi Font.",
    "duration": "3 Month"
  },
  {
    "id": 7,
    "lessons": 10,
    "rating": 1,
    "students": 291,
    "title": "CERTIFICATE IN TALLY",
    "part": "",
    "description": "Computer Fundamentals, Tally.",
    "duration": "3 Month"
  },
  {
    "id": 8,
    "lessons": 19,
    "rating": 3,
    "students": 438,
    "title": "CERTIFICATE IN INTERNET",
    "part": "",
    "description": "Computer Fundamentals, Internet.",
    "duration": "3 Month"
  },
  {
    "id": 9,
    "lessons": 7,
    "rating": 1,
    "students": 494,
    "title": "CERTIFICATE IN PAGEMAKER",
    "part": "",
    "description": "Computer Fundamentals, PageMaker.",
    "duration": "3 Month"
  },
  {
    "id": 10,
    "lessons": 3,
    "rating": 2,
    "students": 290,
    "title": "CERTIFICATE IN COREL DRAW",
    "part": "",
    "description": "Computer Fundamentals, Corel Draw.",
    "duration": "3 Month"
  },
  {
    "id": 11,
    "lessons": 17,
    "rating": 1,
    "students": 52,
    "title": "CERTIFICATE IN PHOTOSHOP",
    "part": "",
    "description": "Computer Fundamentals, Photoshop.",
    "duration": "3 Month"
  },
  {
    "id": 12,
    "lessons": 3,
    "rating": 2,
    "students": 61,
    "title": "CERTIFICATE IN ADOBE PREMIER",
    "part": "",
    "description": "Computer Fundamentals, Adobe Premier.",
    "duration": "3 Month"
  },
  {
    "id": 13,
    "lessons": 3,
    "rating": 4,
    "students": 155,
    "title": "CERTIFICATE IN 3D STUDIO MAX",
    "part": "",
    "description": "Computer Fundamentals, 3D Studio Max.",
    "duration": "3 Month"
  },
  {
    "id": 14,
    "lessons": 16,
    "rating": 3,
    "students": 298,
    "title": "CERTIFICATE IN AFTER EFFECTS",
    "part": "",
    "description": "Computer Fundamentals, After Effects.",
    "duration": "3 Month"
  },
  {
    "id": 15,
    "lessons": 2,
    "rating": 2,
    "students": 251,
    "title": "CERTIFICATE IN ADOBE IN-DESIGN",
    "part": "",
    "description": "Computer Fundamentals, Adobe In-Design.",
    "duration": "3 Month"
  },
  {
    "id": 16,
    "lessons": 4,
    "rating": 4,
    "students": 218,
    "title": "CERTIFICATE IN ILLUSTRATOR",
    "part": "",
    "description": "Computer Fundamentals, Illustrator.",
    "duration": "3 Month"
  },
  {
    "id": 17,
    "lessons": 3,
    "rating": 3,
    "students": 240,
    "title": "CERTIFICATE IN DREAMWEAVER",
    "part": "",
    "description": "Computer Fundamentals, Dreamweaver.",
    "duration": "3 Month"
  },
  {
    "id": 18,
    "lessons": 15,
    "rating": 1,
    "students": 113,
    "title": "CERTIFICATE IN HTML",
    "part": "",
    "description": "Computer Fundamentals, HTML.",
    "duration": "3 Month"
  },
  {
    "id": 19,
    "lessons": 17,
    "rating": 2,
    "students": 347,
    "title": "CERTIFICATE IN FOXPRO",
    "part": "",
    "description": "Computer Fundamentals, FoxPro.",
    "duration": "3 Month"
  },
  {
    "id": 20,
    "lessons": 16,
    "rating": 1,
    "students": 210,
    "title": "CERTIFICATE IN C",
    "part": "",
    "description": "Computer Fundamentals, C.",
    "duration": "3 Month"
  },
  {
    "id": 21,
    "lessons": 18,
    "rating": 3,
    "students": 121,
    "title": "CERTIFICATE IN C++, OOPS",
    "part": "",
    "description": "Computer Fundamentals, C++, Oops.",
    "duration": "3 Month"
  },
  {
    "id": 22,
    "lessons": 12,
    "rating": 3,
    "students": 84,
    "title": "CERTIFICATE IN DATA STRUCTURE",
    "part": "",
    "description": "Computer Fundamentals, Data Structure.",
    "duration": "3 Month"
  },
  {
    "id": 23,
    "lessons": 15,
    "rating": 0,
    "students": 439,
    "title": "CERTIFICATE IN ASP.NET, ADO.NET",
    "part": "",
    "description": "Computer Fundamentals, Asp.Net, ADO.Net.",
    "duration": "3 Month"
  },
  {
    "id": 24,
    "lessons": 14,
    "rating": 1,
    "students": 282,
    "title": "CERTIFICATE IN AJAX",
    "part": "",
    "description": "Computer Fundamentals, Ajax",
    "duration": "3 Month"
  },
  {
    "id": 25,
    "lessons": 8,
    "rating": 2,
    "students": 209,
    "title": "CERTIFICATE IN CORE JAVA",
    "part": "",
    "description": "Computer Fundamentals, Core Java",
    "duration": "3 Month"
  },
  {
    "id": 26,
    "lessons": 16,
    "rating": 0,
    "students": 464,
    "title": "CERTIFICATE IN SERVLET, JSP, JDBC",
    "part": "",
    "description": "Computer Fundamentals, Servlet, Jsp, Jdbc.",
    "duration": "3 Month"
  },
  {
    "id": 27,
    "lessons": 7,
    "rating": 4,
    "students": 150,
    "title": "CERTIFICATE IN PHP",
    "part": "",
    "description": "Computer Fundamentals, PHP.",
    "duration": "3 Month"
  },
  {
    "id": 28,
    "lessons": 16,
    "rating": 0,
    "students": 185,
    "title": "CERTIFICATE IN VISUAL BASIC",
    "part": "",
    "description": "Computer Fundamentals, Visual Basic.",
    "duration": "3 Month"
  },
  {
    "id": 29,
    "lessons": 13,
    "rating": 0,
    "students": 301,
    "title": "DIPLOMA IN INFORMATION TECHNOLOGY",
    "part": "",
    "description": "MS Access, HTML , Visual Basic 6, Bangla Ward, Internet, Photoimpact XL",
    "duration": "8 Month"
  },
  {
    "id": 30,
    "lessons": 19,
    "rating": 1,
    "students": 90,
    "title": "DIPLOMA IN DESKTOP PUBLISHING",
    "part": "",
    "description": "Adobe Pagemaker 6.5/7 , Adobe Photoshop 7/CS, Corel Draw , Flas.",
    "duration": "8 Month"
  },
  {
    "id": 31,
    "lessons": 18,
    "rating": 3,
    "students": 145,
    "title": "DIPLOMA IN MULTIMEDIA",
    "part": "",
    "description": "Adobe Premeir, Flash, Photoshop , Vegas 6.0, Xara 3D ,Cool 3D, Animated GIF",
    "duration": "8 Month"
  },
  {
    "id": 32,
    "lessons": 16,
    "rating": 0,
    "students": 163,
    "title": "ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Office 2010 (Word, Excel, Access, Power Point), Pagemaker, Coral Draw, Photoshop, Tally, Hardware Concept, Internet",
    "duration": "12 Month"
  },
  {
    "id": 33,
    "lessons": 7,
    "rating": 1,
    "students": 411,
    "title": "ADVANCE DIPLOMA IN COMPUTER ACCOUNTING",
    "part": "",
    "description": "omputer Fundamentals, Fundamental of Accounts, Accounting Package Tally, Statutory Taxation, ERP Accounting Packages (Advance), Accounting for Business Decisions, Banking & Finance, Soft Skills and Job Skills, Personality Development Programme, Internet",
    "duration": "12 Month"
  },
  {
    "id": 34,
    "lessons": 14,
    "rating": 3,
    "students": 161,
    "title": "ADVANCE DIPLOMA IN WEBSITE DESIGNING",
    "part": "",
    "description": "Computer Fundamentals, Designing Concept, Corel Draw, Photo Shop, Flash, Page Maker, Dream Weaver, HTML, DHTML, VB Script",
    "duration": "12 Month"
  },
  {
    "id": 35,
    "lessons": 14,
    "rating": 2,
    "students": 223,
    "title": "ADVANCE DIPLOMA IN COMPUTER SOFTWARE SYSTEM ANALYSIS & APPLICATION",
    "part": "",
    "description": "Computer Basics, Windows 7, MS Office 2010 (Word, Excel, Access, Power Point), Internet, Photo Shop, HTML, CSS, Language C, C++, Structural Analysis, Prgramming Concept, PHP, MySQL, Oracle, Data Base Management",
    "duration": "12 Month"
  },
  {
    "id": 36,
    "lessons": 12,
    "rating": 2,
    "students": 271,
    "title": "ADVANCE DIPLOMA IN COMPUTER APPLICATION & PROGRAMMING",
    "part": "",
    "description": "Computer Basics, Windows 7, MS Office 2010 (Word, Excel, Access Power Point), Internet, Photo Shop, HTML, CSS, Language C, C++, Structural Analysis, Prgramming Concept, PHP, Data Base Management",
    "duration": "12 Month"
  },
  {
    "id": 37,
    "lessons": 12,
    "rating": 2,
    "students": 458,
    "title": "POST GRADUATE DIPLOMA IN COMPUTER APPLICATION",
    "part": "",
    "description": "Fundamentals of Computers, Windows XP/Vista/7/8, MS Office 2010 (Word, Excel, Access, Power Point), English Typing, Internet, Photoshop, Accounting Concept, Tally, Computer Hardware & Networking Concept",
    "duration": "12 Month"
  },
  {
    "id": 38,
    "lessons": 13,
    "rating": 1,
    "students": 250,
    "title": "Diploma in Office Accounting & Publishing(DOAP)",
    "part": "",
    "description": "Computer Concept & Fundamentals, Operating System, MS-office (MS-Word, MS-Excel, MS-Power Point, MS-Access), HTML & Front Page, DTP,Financial Accounting,Tally with GST",
    "duration": "12 Month"
  },
  {
    "id": 39,
    "lessons": 7,
    "rating": 3,
    "students": 112,
    "title": "YEAR DIPLOMA IN COMPUTER APPLICATION",
    "part": "",
    "description": "Computer Fundamentals, DOS, Windows 7, Ms Office 2010 (Word, Excel, Power Point, Access), English Typing, Regional Typing, HTML, C Programming, Internet",
    "duration": "12 Month"
  },
  {
    "id": 40,
    "lessons": 8,
    "rating": 2,
    "students": 343,
    "title": "YEAR DIPLOMA IN FINANCIAL ACCOUNTING",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Accounting Concept, Tally, Others Accounting Package, Internet..",
    "duration": "12 Month"
  },
  {
    "id": 41,
    "lessons": 15,
    "rating": 3,
    "students": 378,
    "title": "ADVANCE DIPLOMA IN HARDWARE & NETWORKING PROFESSIONAL",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Construction & Functioning of Different PC Parts (Monitor, Mother Board, Hard Disk, CD-ROM etc.), Software Installation, Troubleshooting,LAN,Networking etc",
    "duration": "12 Month"
  },
  {
    "id": 42,
    "lessons": 18,
    "rating": 1,
    "students": 127,
    "title": "ADVANCE DIPLOMA IN COMPUTER TEACHER TRAINING PROGRAM",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Typing Master, Nudi 4.0,Ms Office 2010 (Word, Excel, Power Point, Access), Internet, Business Communication, C, C++, VB, Oracle, Java, HTML",
    "duration": "12 Month"
  },
  {
    "id": 43,
    "lessons": 12,
    "rating": 1,
    "students": 233,
    "title": "DIPLOMA IN APPLICATION AND MANAGEMENT",
    "part": "",
    "description": "Semester -1 : Fundamental of Computer, Operating System (DOS, Windows), MS Office (Word, Excel, Power Point, Access), Internet in Details (Email, Online Searching, Downloading, Chatting, Online Banking). Semester -2 : Back Office Training, Desk Top Publishing (Photoshop, Page Maker, Corel Draw), Printing and Scanning, Computer Accounting (Tally), Introduction of Hardware (Formatting,OS and Software Loading)",
    "duration": "12 Month"
  },
  {
    "id": 44,
    "lessons": 16,
    "rating": 3,
    "students": 66,
    "title": "MASTER TRAINER COMPUTER APPLICATION",
    "part": "",
    "description": "Fundamental of Computer, Notepad, Wordpad, MS-Paint, using Calculator, Advance Windows, MS-DOS, MS-Office 2007 (Word,Excel,Powerpoint,Access) Visual Basic, Internet, BanglaWord. Adobe Pagemaker 6.5/7, Adobe Photoshop 7/cs",
    "duration": "12 Month"
  },
  {
    "id": 45,
    "lessons": 18,
    "rating": 2,
    "students": 212,
    "title": "DIPLOMA IN MULTIMEDIA",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Photoshop, Corel Draw, Flash, Premiere, After Effects, Sound Forge, 3Ds Max",
    "duration": "12 Month"
  },
  {
    "id": 46,
    "lessons": 18,
    "rating": 1,
    "students": 360,
    "title": "ADVANCE DIPLOMA IN OFFICE MANAGEMENT",
    "part": "",
    "description": "Computer Fundamentals, Windows, Ms Office (Word, Excel, Power Point), Accounting Concept with Tally, Internet & Email, Communication Skill, Front Office & Back Office Maintenance , Public relation and Customer Handling, Office File Handling, Scanner & Printer Handling, Basic Hardware Concept",
    "duration": "12 Month"
  },
  {
    "id": 47,
    "lessons": 12,
    "rating": 4,
    "students": 241,
    "title": "ADVANCE DIPLOMA IN DESK TOP PUBLISHING",
    "part": "",
    "description": "Semester - 1 : Computer Concept & Fundamentals, Opperating System (Windows XP, windows 7), MS Office (Word,Excel,Power Point), Regional Typing, Introduction to Internet & Emaill. Semester - 2 : Page Maker, Croel Draw, Photo Shop, Free Hand, Project Work & Practical.",
    "duration": "12 Month"
  },
  {
    "id": 48,
    "lessons": 8,
    "rating": 3,
    "students": 377,
    "title": "DIPLOMA IN OFFICE APPLICATION AND MANAGEMENT",
    "part": "",
    "description": "Computer Fundamentals, Ms Office 2010 (Word, Excel, Access, Power Point), Internet, English & Regional Typing,Spoken English,DTP (Pagemaker, Corel Draw, Photoshop), Accounting Concept, Tally, Introduction of Hardware & Software, Internet.",
    "duration": "12 Month"
  },
  {
    "id": 49,
    "lessons": 12,
    "rating": 3,
    "students": 146,
    "title": "ADVANCE DIPLOMA IN COMPUTER APPLICATION",
    "part": "",
    "description": "Computer Fundamentals, Operating System (Windows), Microsoft Office (Word, Excel, Power Point, Access), Internet Concept, HTML/DHTML, GW Basic, Programing C and C++, Java Basic",
    "duration": "12 Month"
  },
  {
    "id": 50,
    "lessons": 11,
    "rating": 1,
    "students": 237,
    "title": "ADVANCED DIPLOMA IN IT APLICATION",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms -Paint, Notepad, Wordpad, English Typing using Typing Master, Bangla Word, Ms Office (Word, Excel, Access, Power Point), Internet, Scanner & Printer Handling.",
    "duration": "12 Month"
  },
  {
    "id": 51,
    "lessons": 3,
    "rating": 3,
    "students": 445,
    "title": "DIPLOMA IN COMPUTER APPLICATION AND PROGRAMMING",
    "part": "",
    "description": "Computer Fundamental , Windows -7, Ms Office (Word, Excel, Power Point, Access), Adobe Pagemaker, Adobe Photoshop, Coral Draw, Regional Typing, HTML, Internet, Basic Of Programming with C Language, Tally",
    "duration": "12 Month"
  },
  {
    "id": 52,
    "lessons": 6,
    "rating": 1,
    "students": 406,
    "title": "DIPLOMA IN MODERN COMPUTER APPLICATION",
    "part": "",
    "description": "emester - I : Computer Fundamentals, Operating System (Window XP / Windows 2007), Data Representation & Boolean Algebra, Visual Basic (Basic Concepts), MS Office (Word Power Point). Semester - II : Introduction to Network & Internet, Introduction to DBMS and SQL, MS Office (Excel, Access)",
    "duration": "12 Month"
  },
  {
    "id": 53,
    "lessons": 4,
    "rating": 1,
    "students": 119,
    "title": "ADVANCE DIPLOMA IN COMPUTER TECHNOLOGY",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Office 2010 (Word, Excel, Power Point, Access), Regional Typing, Photoshop 7, Video Mixing, HTML, Hardware Concept & Internet.",
    "duration": "12 Month"
  },
  {
    "id": 54,
    "lessons": 4,
    "rating": 2,
    "students": 147,
    "title": "DIPLOMA IN DESKTOP PUBLISHING",
    "part": "",
    "description": "Computer Fundamental, Windows XP/7/8.1, Microsoft Office (Word, Excel, PowerPoint), Regional Typing, Internet. SEMI Ã¢â‚¬â€œ II : Adobe PageMaker, Adobe Photoshop, Corel Draw, Leap Office, All Type Computer Printing, Real Life Project Work.",
    "duration": "12 Month"
  },
  {
    "id": 55,
    "lessons": 5,
    "rating": 3,
    "students": 324,
    "title": "DIPLOMA IN COMPUTER HARDWARE",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Construction & Functioning of Different PC Parts (Monitor, Mother Board, Hard Disk, CD-ROM, Video System, Sound System, Modems etc.), Configuring the CMOS Setup, Maintenance & Troubleshooting, Software Installation, Troubleshooting,Computer Virus, LAN, Networking etc",
    "duration": "12 Month"
  },
  {
    "id": 56,
    "lessons": 11,
    "rating": 2,
    "students": 414,
    "title": "DIPLOMA IN INFORMATION TECHNOLOG",
    "part": "",
    "description": "Computer Fundamentals, Windows, Ms Office (Word, Excel, Access, Power Point), Internet, Web Page Design, Regional Typing, Pagemaker, Corel Draw, Photoshop.",
    "duration": "12 Month"
  },
  {
    "id": 57,
    "lessons": 2,
    "rating": 3,
    "students": 92,
    "title": "MASTER DIPLOMA IN INFORMATION TECHNOLOGY",
    "part": "",
    "description": "omputer Fundamentals, Ms DOS, Windows 7, Ms Office 2010 (Ms Word, Ms Excel, Ms Power Point, Ms Access) Regional Typing, Page Maker, Photoshop, Instant Artist C++, Visual Basic, Basic Concepts of Tally, HTML, Internet & E-mail",
    "duration": "12 Month"
  },
  {
    "id": 58,
    "lessons": 12,
    "rating": 3,
    "students": 72,
    "title": "DIPLOMA IN IT",
    "part": "",
    "description": "Computer Fundamentals, Typing Tutor, O/S, Ms Office 2007 (Ms Word, Ms Excel, Ms Power Point, Ms Access) Regional Typing, Pagemaker, Photoshop, Instant Artist, Visual Basic, Internet & E-mail.",
    "duration": "12 Month"
  },
  {
    "id": 59,
    "lessons": 17,
    "rating": 2,
    "students": 317,
    "title": "Diploma In Computer Teacher Training Certificat",
    "part": "",
    "description": "Computer Fundamentals, Operating System - Windows 7 & DOS, Ms - Paint, Ms Office 2010 (Word, Excel, Power Point, Access), English & Regional Typing, Internet & E-Mail, HTML, Visual Basic, C++, , Instant Artist,Page Maker 6.5/7, Photoshop 7, Multimedia, Tally (Basic Concept).",
    "duration": "12 Month"
  },
  {
    "id": 60,
    "lessons": 16,
    "rating": 1,
    "students": 244,
    "title": "DIPLOMA IN INFORMATION TECHNOLOGY",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms. Paint, Wordpad, DOS, Ms. Office 2007 (Word, Excel, Power Point), HTML, Bengla Word, Visual Foxpro, English Typing, Internet.",
    "duration": "12 Month"
  },
  {
    "id": 61,
    "lessons": 8,
    "rating": 1,
    "students": 355,
    "title": "DIPLOMA IN FINANCIAL ACCOUNTING",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms. Paint, Wordpad, DOS, Ms Office 2007 (Word, Excel, Power Point), HTML, Bengla Word, Visual Foxpro, English Typing, Internet, Tally.",
    "duration": "12 Month"
  },
  {
    "id": 62,
    "lessons": 7,
    "rating": 3,
    "students": 450,
    "title": "DIPLOMA IN GRAPHIC DESIGNING",
    "part": "",
    "description": "Computer Fundamentals, Photoshop, Corel Draw, Adobe Illustrator, Adobe In Design, Flash.",
    "duration": "12 Month"
  },
  {
    "id": 63,
    "lessons": 13,
    "rating": 4,
    "students": 237,
    "title": "ADVANCE DIPLOMA IN FINANCIAL ACCOUNTIN",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, MS Office (MS Word, MS Excel, MS Power Point), Accounting Concept, Tally ERP9, Taxation, Internet",
    "duration": "12 Month"
  },
  {
    "id": 64,
    "lessons": 7,
    "rating": 4,
    "students": 58,
    "title": "MASTER DIPLOMA IN COMPUTER APPLICATION",
    "part": "",
    "description": "Computer Basic, Tally, D.T.P., HTML, Programming C, C++, JAVA Script",
    "duration": "12 Month"
  },
  {
    "id": 65,
    "lessons": 10,
    "rating": 2,
    "students": 403,
    "title": "Diploma in Commercial Application",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms Office 2007, System Tools, Virus, Internet, MS Access, Programming in HTML, Programming in C, Accounting Concept & Tally ERP and Regional Software",
    "duration": "12 Month"
  },
  {
    "id": 66,
    "lessons": 9,
    "rating": 1,
    "students": 378,
    "title": "Advanced Diploma in Commercial Application",
    "part": "",
    "description": "Computer Fundamentals, Typing Practice, Windows 7, Ms Office 2007, System Tools, Virus, Internet, MS Access, Programming in HTML, Programming in C, Programming using Visual Basic.",
    "duration": "12 Month"
  },
  {
    "id": 67,
    "lessons": 8,
    "rating": 0,
    "students": 329,
    "title": "Diploma in Commercial Application & Desktop Publishing",
    "part": "",
    "description": "Computer Fundamentals, Typing Practice, Windows 7, Ms Office 2007, System Tools, Virus, Internet, MS Access, Programming in HTML, Pagemaker, Corel Draw, Photoshop, Project Work, Regional Software.",
    "duration": "12 Month"
  },
  {
    "id": 68,
    "lessons": 8,
    "rating": 2,
    "students": 343,
    "title": "PG DIPLOMA IN COMPUTER LANGUAGE",
    "part": "",
    "description": "Accounting Concept, Tally Erp.9, C,C++, VB, JAVA, Multimedia Concept, Internet.",
    "duration": "12 Month"
  },
  {
    "id": 69,
    "lessons": 14,
    "rating": 1,
    "students": 125,
    "title": "Diploma in Computer Teacher Training Cours",
    "part": "",
    "description": "Computer Fundamentals, Windows 7, Ms Office 2010 (Word, Excel, PowerPoint), System Tools, Virus, Internet, HTML, DHTML, Programming in C, Visual Basic, Accounting Concept & Tally, Programming in C++, CPD.",
    "duration": "12 Month"
  },
  {
    "id": 70,
    "lessons": 12,
    "rating": 1,
    "students": 134,
    "title": "Advanced Diploma in Data Entry",
    "part": "",
    "description": "Computer Fundamental, Operating System, MS Office (Word, Excel, Power Point), Photoshop, Corel Draw, Page Maker, HTML, Internet, Multimedia, Tally 9.0, Hardware & Networking, Data Entry Work.",
    "duration": "12 Month"
  },
  {
    "id": 71,
    "lessons": 16,
    "rating": 0,
    "students": 249,
    "title": "Advanced PG Diploma in Computer Application",
    "part": "",
    "description": "Fundamental of Computer,Windows, MS Office (Word, Excel, Access, Power Point), C and C++, RDBMS Concepts with SQL SERVER, HTML AND DHTML, VB.NET, JAVA Script, Tally ERP.9, DTP (Pagemaker, Corel Draw, Photoshop, Regional Typing) Hardware (PC Assembling & Software Installation)",
    "duration": "12 Month"
  },
  {
    "id": 72,
    "lessons": 7,
    "rating": 1,
    "students": 277,
    "title": "DIPLOMA IN OFFICE AUTOMATION",
    "part": "",
    "description": "Semester I : Computer Fundamentals, Ms Office (Ms Word, Ms Excel, Ms Power Point), Pagemaker, Corel Draw. Semester II : Photoshop, Tally With Basic Accounting Concept, Project Work",
    "duration": "12 Month"
  }
]

  return (
    <div className='container my-5'>
        <h1 className='mb-4 fw-bold text-center text-white display-5'>Computer Software Courses</h1>
        <CourseCards courses={courses}/>
    </div>
  )
}

export default SoftwareCourse