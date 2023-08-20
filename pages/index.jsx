import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Card, Accordion, AccordionItem } from "@nextui-org/react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import { countries } from "../components/Data";
import { properties } from "../constants/data";
import { motion, Variants } from "framer-motion";
import ApplicateCard from "../components/ApplicateCard";

import Image from "next/image";
import img01 from "../public/images/brazil.jpg";


import CardHover from '../components/CardHover';


import styles from '../components/two-colum/twoColumn.module.scss'
import { projects } from '../components/two-colum/data';

import Double from '../components/two-colum/Double';



export default function App() {
  



    const imageAnimate = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            rotate: [0, 10, 0],
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1
            }
        }

    }

    const textAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1
            }
        }

    }



    //展開收折
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");
    

    return (
        <div className="root pt-20 border flex flex-col gap-2 transition-colors duration-1000">



          
     
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onClick={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        

            <div className="App">
                <div className="topContent">
                    <motion.div className="card"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.3 }}
                    >
                        {/* <motion.div className="image-container"
                variants={imageAnimate}
            >{image}</motion.div> */}
                        <motion.h2
                            className="text-neutral-950 dark:text-gray-50 font-bold lg:text-6xl"
                            variants={textAnimate}
                        >超越感測界線,極致健康生活</motion.h2>
                        <motion.p
                            className="text-neutral-600 text-base	 dark:text-gray-50"
                            variants={textAnimate}
                        >Developed by UltraE with patented technology</motion.p>

                    </motion.div>
                 
                </div>
                {/* Carousel */}
               
            </div>
            <section className="2xl:w-3/4  w-full px-20 border">
                <Carousel images={countries} />
                <CardHover />



            </section>

            <section>
                <div className="full-banner   ">
                    <Image
                        src={img01}
                        alt="Picture of the author"
                        width={1920}
                        height={500}
                        priority={true}
                    />
                </div>
            
            </section>
    
         
       
           
          
          
          <div className="wrap w-full flex justify-center">    
                <div className="Applicate-section w-full flex justify-center align-middle justify-around	flex-wrap ">
                    <ApplicateCard />
                   
                </div>

          
          </div>

            <div className="App">
                <div className="properties flex">
                    {properties.map((item) => (
                        <Cards data={item} key={item.id} />
                    ))}
                </div>
            </div>
          
            <div className="section-accordion border w-full flex flex-col justify-center items-center mb-48">
                <div className="wrap w-4/5 flex border my-5">
                    <div className="left w-1/2 flex  justify-center items-center ">
                        <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >
                          
                            <motion.h2
                                className="text-2xl dark:text-gray-500"
                                variants={textAnimate}
                            >Hello OEM/ODM Customers</motion.h2>
                         

                        </motion.div>
                  
                   </div>
                   <div className="right w-1/2">
                        <Accordion variant="shadow">
                            <AccordionItem  key="1" className="text-gray-500" aria-label="Accordion 1" title="Original Equipment Manufacturing/OEM">
                               - 按照您的規格和設計圖全程為您代工製造
                            </AccordionItem>
                            <AccordionItem key="2" className="text-gray-500" aria-label="Accordion 2" title="Original Design Manufacturing/ODM
">
                               - 提供我們您的需求，我們也可以為您設計規格和外觀並客製化的製造


                            </AccordionItem>
                          
                        </Accordion>


                   </div>
                </div>
          
                 <div className="wrap w-4/5 flex border my-5">
                    <div className="left w-1/2 flex  justify-center items-center ">
                        <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >
                         
                            <motion.h2
                                className="text-2xl dark:text-gray-500"
                                variants={textAnimate}
                            >Hello OEM/ODM Customers</motion.h2>


                        </motion.div>

                    </div>
                    <div className="right w-1/2">
                        <Accordion variant="shadow">
                            <AccordionItem key="1" className="text-gray-500" aria-label="Accordion 1" title="Original Equipment Manufacturing/OEM">
                                - 按照您的規格和設計圖全程為您代工製造
                            </AccordionItem>
                            <AccordionItem key="2" className="text-gray-500" aria-label="Accordion 2" title="Original Design Manufacturing/ODM
">
                                - 提供我們您的需求，我們也可以為您設計規格和外觀並客製化的製造


                            </AccordionItem>

                        </Accordion>




                    </div>
                   

                  
                </div> 
               
             </div>
            <section>
                <div className="container flex justify-center px-10">
                    <main className={styles.main}>

                        <div className={styles.gallery}>
                            {/* <a href="https://www.google.com">
                                <Double projects={[projects[0], projects[1]]} />
                            </a> */}
                            <Double projects={[projects[2], projects[3]]} reversed={true} />
                            {/* <Double projects={[projects[4], projects[5]]} />
                            <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
                        </div>
                    </main>
                </div>
            </section>
           
        
           
        
        </div>
    );
    
}
