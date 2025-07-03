import React from 'react'
import CourseCards from '../components/Courses'



const HardwareCourse = () => {

      const courses = [
    {
      id: 1,
      lessons: 35,
      rating: 4.5,
      students: 463,
      title: "Certificate in Computer Hardware & Peripherals (CCHP)",
      part: "PART - I",
      description: "Study of Computer System, Study of Sddres Bus, Data Nus, Study of Intel, Pentium, Processor - 486/ Cyrix/ Celeron/ etc. Concept of Memory - Conventional/ Extended , Cache Memory, Installation of OS & Software, Installing Floppy Drive, CD-Rom Drive, Monitor, Modem, Printer in Dos/Widows Computer Hardware Lab Practical",
      duration: "9 Month"
    },
    {
      id: 2,
      lessons: 5,
      rating: 4.5,
      students: 179,
      title: "Diploma in Computer Hardware (DCH)",
      part: "PART - I",
      description: "Basic electronics (Analog & Digital), Basic concept of H/W, OS, Mother board, printer, S.M.P.S Keyboard, Mouse) , Assembling of PC & Installation of OS & Software's Computer Hardware Lab practical",
      duration: "6 Month"
    },
    {
      id: 3,
      lessons: 64,
      rating: 4.5,
      students: 472,
      title: "Certificate in Basic Electronic (CCHP)",
      part: "PART - I",
      description: "Concept of Analog & Digital Electronic, Structure of ElectronicsType of Memory, Functions of Electronic Components , Resistor, Capacitor, Transistor Number System, Logic Gates, Flop-Flip, Combination , OP -AMP, Soldering , Multimeter, Electronic Lab Practical",
      duration: "8 Month"
    },
     {
      id: 4,
      lessons: 57,
      rating: 4.5,
      students: 231,
      title: "Advance Diploma in Computer Hard & Soft Technology (ADCHST)",
      part: "PART - I",
      description: "Basic Fundamental of Computer Hardware & Software,Window/DOS,MS-Word, Excel, Powerpoint, MS Access, HTML/DHTML C & C++, Intemet Computer Software Lab Practical Project/Viva",
      duration: "9 Month"
    },
     {
      id: 5,
      lessons: 57,
      rating: 4.5,
      students: 231,
      title: "Advance Diploma in Computer Hard & Soft Technology (ADCHST)",
      part: "PART - II",
      description: "Basic of Analog & Digital Electronics, Computer Hardware & Peripherals, Installation of Software, PC Maintenance, assembling, and Computer Virus & Antivirus Utilities .Networking & its Types, Devices, OS, Full Process & Trouble Shooting Computer Hardware Lab Practical Project/Viva",
      duration: "9 Month"
    },
     {
      id: 6,
      lessons: 131,
      rating: 4.5,
      students: 305,
      title: "Advance Diploma in Computer Hardware & Networking (ADCHN)",
      part: "PART - I",
      description: "",
      duration: "9 Month"
    },
     {
      id: 7,
      lessons: 131,
      rating: 4.5,
      students: 305,
      title: "Advance Diploma in Computer Hardware & Networking (ADCHN)",
      part: "PART - II",
      description: "Assembling, Troubleshooting of Pc, Virus, Antivirus Utilities Concept of Networking Computer Hardworking Lab Practical-2 Project/Viva",
      duration: "9 Month"
    }
  ];
  return (
  <div className='container my-5'>
        <CourseCards courses={courses}/>
    </div>
  )
}

export default HardwareCourse