import React from "react";
import "./Resume.css";
import { FileText, Download, Eye } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Resume PDF lives at public/resume.pdf -> replace that file with your real resume
// (keep the same filename) and this whole section updates automatically.
const RESUME_PATH = "/Resume-2.pdf";

const Resume = () => {
  useGSAP(() => {
    gsap.from(".resume-left", {
      x: -100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#resume",
        scroll: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 30%",
      },
    });
    gsap.from(".resume-preview", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#resume",
        scroll: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="resume">
      <div className="resume-left">
        <FileText size={40} className="resume-icon" />
        <h1>My Resume</h1>
        <p>
          Want the full picture? Preview my resume right here, or download a
          copy to share with your team when you refer me for a role.
        </p>
        <div className="resume-btns">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="resume-btn resume-view"
          >
            <Eye size={18} /> View Resume
          </a>
          <a href={RESUME_PATH} download className="resume-btn resume-download">
            <Download size={18} /> Download PDF
          </a>
        </div>
      </div>

      <div className="resume-preview">
        <iframe
          src={`${RESUME_PATH}#view=FitH`}
          title="Shubham Kumar Resume"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Resume;
