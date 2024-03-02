import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Experience = () => {
  const dataExperience = [
    {
      year: "2023",
      company: "PT BANK BTPN TBK",
      role: "Website Developer",
      jobDesk: [
        "Development website jenius.com with wordpress",
        "Insert content on the jenius.com website, including pages, landing pages, faqs, etc.",
        "Make component ui with codeigniter that can reuse in wordpress",
      ],
    },
    {
      year: "2022",
      company: "PT HASHMICRO SOLUTION",
      role: "Software Programmer Internship",
      jobDesk: [
        "Developing system ERP named Equip with Odoo framework",
        "Fixing bug and error with Odoo (based on python)",
      ],
    },
    {
      year: "2021",
      company: "DIGITIKET",
      role: "Front-End Web Developer Internship",
      jobDesk: [
        "Make mobile website for www.digitiket.com",
        "Developing mobile website using ReactJS",
      ],
    },
    {
      year: "2021",
      company: "YAASMIN (Yayasan Amal dan Sosial Media Insani)",
      role: "Web Developer Internship",
      jobDesk: [
        "Developing website and create fitur with Wordpress",
        "Maintenance website www.yaasmin.or.id",
      ],
    },
  ];

  return (
    <div id="experience" className="container mx-auto">
      <h1 className="text-center pb-10">Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {dataExperience.map((exp, index) => (
          <li>
            <div className="timeline-middle">
              <FontAwesomeIcon
                icon="fa-solid fa-briefcase"
                className="text-base-content"
              />
            </div>
            <div
              className={
                index % 2 === 0
                  ? "timeline-start md:text-end mb-10"
                  : "timeline-end mb-10"
              }
            >
              <time className="font-mono italic">{exp.year}</time>
              <div className="text-lg font-black">{exp.company}</div>
              <div className="pb-5 font-base-content">{exp.role}</div>
              {exp.jobDesk.map((desk) => (
                <div>
                  <p className="md:block hidden text-sm pb-2">
                    {index % 2 === 0 ? `${desk}  ●` : `●  ${desk}`}
                  </p>
                  <p className="md:hidden block text-sm pb-2">● {desk}</p>
                </div>
              ))}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
