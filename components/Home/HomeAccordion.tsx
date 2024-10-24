"use client";
import AnimateOnLoad from "../AnimateOnLoad";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

const HomeAccordion = () => {
  return (
    <AnimateOnLoad>
      <div className="relative select-none h-full overflow-hidden">
        <div className="flex justify-center flex-col m-auto my-20 max-w-[1200px]">
            <h1 className="text-3xl md:text-6xl font-bold text-secondary text-center">Frequently Asked Questions</h1>
            <div className="flex flex-wrap my-12 w-full max-w-[1200px] px-3 md:px-0">
            <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem key="1" aria-label="Accordion 1" title="What are the primary responsibilities of software developers?" className="text-secondary border-b text-left">
                    <p>Software developers retrieve, store, and alter data to analyze a system’s requirements and capability. They design, program, build, deploy and maintain software using different skills and tools. Additionally, they meet with clients, determine needs, help develop, ensure usability, and complete quality assurance.</p>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="What services do your talented and tech-savvy software developers offer?" className="text-secondary border-b">
                    <p>Our team of software developers provides unmatched development services, encompassing design, programming, building, deployment, and maintenance of software. They also engage in client meetings, needs assessment, development assistance, usability assurance, and quality control.</p>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="How do software developers ensure the usability of the developed software?" className="text-secondary border-b">
                    <p>Software developers ensure usability by actively engaging with clients, determining their needs, and incorporating user-friendly design principles during the development process. This involves creating interfaces and functionalities that enhance the overall user experience.</p>
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="What skills and tools do your software developers use in their development process?" className="text-secondary border-b">
                    <p>Our software developers leverage a diverse set of skills and tools in their development process, adapting to project requirements. This includes programming languages, development frameworks, design tools, and other technologies tailored to meet the specific needs of each project.</p>
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Can you elaborate on the quality assurance process implemented by your software development team?" className="text-secondary border-b">
                    <p>Our software development team follows a rigorous quality assurance process, encompassing testing, debugging, and validation procedures. This ensures that the software meets the specified requirements, functions seamlessly, and delivers a high-quality user experience.</p>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
      </div>
    </AnimateOnLoad>
  );
};

export default HomeAccordion;