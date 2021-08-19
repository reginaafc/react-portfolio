import React from "react";
import "../assets/css/Resumec.css";
import Pdf from "./img/Resume.pdf";


function Resumec(props) {
  return (
    
<section className="py-8 bg-gray-100 ">
<div className="container px-2 pt-4 pb-12 m-5 mx-auto text-gray-800">
  <h1
    className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 "
  >
    Resume
  </h1>
  <div className="w-full mb-4">
    <div
      className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"
    ></div>

    <div className="grid grid-cols-2 gap-4">
      
    <div className="col-span-1 p-5 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg shadow-sm m-7 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl"> <i className="w-12 h-12 p-3.5 mb-3 mr-3 text-lg rounded-full gradient fas fa-graduation-cap"></i> Education</h3>
    
    <h4 className="text-lg "><strong>Junior High School</strong></h4>
    <p>Centro Escolar del Lago</p>
    <p className="mb-6 text-sm"><i>08/2016 - 06/2019</i></p>
    
    <h4 className="text-lg"><strong>High School</strong></h4>
    <p >Centro Escolar del Lago</p>
    <p className="text-sm"><i>08/2019 - Present</i></p>
      
    </div>
    
    <div className="col-span-1 p-5 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg shadow-sm m-7 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl"> <i className="w-12 h-12 p-3.5 mb-3 mr-3 text-lg rounded-full gradient  fas fa-archive"> </i>Certificates</h3>
    
    <h4 className="text-lg">Cisco Networking Essentials</h4>
    <p className="mb-4 text-sm"><i>(08/2020 - 12/2020)</i></p>

    <h4 className="text-lg">Cisco Programming Essentials in Python</h4>
    <p className="mb-4 text-sm"><i>(01/2021 - Present)</i></p>

    <h4 className="text-lg">Mimo Web Development</h4>
    <p className="mb-4 text-sm"><i>(04/2020 - 08/2020)</i></p>

    <h4 className="text-lg">Tecnológico De Monterrey Coding Bootcamp</h4>
    <p className="text-sm"><i>(02/2021 - Present)</i></p>
      
    </div>


    <div className="col-span-2 p-5 m-5 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg shadow-sm hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl"> <i class="w-12 h-12 p-3.5 mb-3 mr-3 text-lg rounded-full gradient fas fa-code"></i> Programming Skills</h3>
      <div className="float-left mr-3 leading-7">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>JSON</p>
        <p>DOM</p>
        <p>API</p>
        <p>Python</p>
        <p>Swift</p>
      </div>
      
      <div className="mt-2">
        <div className="relative pt-1 ">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div  className="flex flex-col justify-center text-center text-white gradient shadow-n7ne whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div  className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div  className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div  className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
            <div className="flex flex-col justify-center text-center text-white shadow-none gradient whitespace-nowrap"></div>
          </div>
        </div>
        
        </div>
      </div>
    </div>



    
    <div className="col-span-2 p-5 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg shadow-sm m-7 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl"> <i className="w-12 h-12 p-3.5 mb-3 mr-3 text-lg rounded-full gradient fas fa-language"></i>Languages</h3>

      <div className=" progress-circle over50 p100">
        <span>Spanish</span>
        <div className="left-half-clipper">
           <div className="first50-bar gradient"></div>
           <div className="value-bar gradient"></div>
        </div>
      </div>
      <div className=" progress-circle over50 p85">
        <span>English</span>
        <div className="left-half-clipper">
           <div className="first50-bar gradient"></div>
           <div className="value-bar gradient"></div>
        </div>
      </div>
      
      <div className=" progress-circle over100 p19">
        <span>French</span>
        <div className="left-half-clipper">
           <div className="first50-bar gradient"></div>
           <div className="value-bar gradient"></div>
        </div>
      </div>
    
      
    </div>

    <div className="col-span-1 p-5 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg shadow-sm m-7 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl"> <i className="w-12 h-12 p-3.5 mb-3 mr-3 text-lg rounded-full gradient  fas fa-drafting-compass"></i>Skills</h3>

      <div id="skills-div" className="">   
        <div className="inline-block">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fab fa-teamspeak"></i></p>
          <p>Public Speaking</p>
        </div>

        <div className="inline-block m-5 ">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fas fa-users"></i></p>
          <p>Teamwork</p>
        </div>
        
        <div className="inline-block m-4">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fas fa-pencil-ruler"></i></p>
          <p>Decision Making</p>
        </div>

        <div className="inline-block m-4">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fas fa-book"></i></p>
          <p>Responsability</p>
        </div>

        <div className="inline-block m-4">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fas fa-exclamation-triangle"></i></p>
          <p>Problem Solving</p>
        </div>

        <div className="inline-block m-4">
          <p className="text-center"><i className="mt-2 mb-2 text-4xl fas fa-chalkboard-teacher"></i></p>
          <p>Leadership</p>
        </div></div>
      
     

    </div>
    <a href={Pdf} download="Regina Resume" class="p-4 pl-8 pr-8 m-10  text-lg font-bold text-white rounded-full gradient ">Download</a>
    </div>
    </div>

</section>
  );
}

export default Resumec;
