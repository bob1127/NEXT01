import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../components/Icons.jsx";
import { AcmeLogo } from "../components/AcmeLogo.jsx";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from 'next-themes';
import Image from 'next/image';
import MobileMenu from '../components/mobile-menu/MobileMenu.jsx'

export default function App() {


    const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;


    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }


    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    return (
      
        <Navbar className='nav'>
      
            <header>
                <div className="menu" onClick={isOpen}>
                    <i className="fa fa-bars"></i>
                </div>
            </header>
            <AnimatePresence >
                {
                    open && (
                        <motion.div className="menu_container  bg-pink-600"
                            variants={item}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            transition={{ duration: .5 }}
                            exit="exit"
                        >
                            <div className="btn_close" onClick={closeMenu}>X</div>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .8 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 1
                                    }
                                }}
                            >Home</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .7 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .8
                                    }
                                }}
                            >About</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .6 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .6
                                    }
                                }}
                            >
                                <MobileMenu/>


                            </motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .5 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .4
                                    }
                                }}
                            >Blog</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .4 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .2
                                    }
                                }}
                            >Contact</motion.a>
                        </motion.div>
                    )
                }
            </AnimatePresence>  
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
                
            </NavbarBrand>
      
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown className='fixed'>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                產品
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            UX100-酸鹼檢測儀
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="pH chart 曲線圖"
                            startContent={icons.activity}
                        >
                            UX200-酸鹼趨勢檢測儀
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            磁石變頻攪拌器
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        關於我們
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        聯絡我們
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <div className="flex justify-center">
                    {currentTheme === 'dark' ? (
                        <button
                            className=" hover:bg-black w-auto   p-2"
                            onClick={() => setTheme('light')}
                        >
                            {' '}
                            <Image src="/sun.svg" alt="logo" height="30" width="30" />
                        </button>
                    ) : (
                        <button
                            className="bg-gray-100 w-auto   p-2 hover:bg-gray-300"
                            onClick={() => setTheme('dark')}
                        >
                            <Image src="/moon.svg" alt="logo" height="30" width="30" />
                        </button>
                    )}
                </div>
            </NavbarContent>
        </Navbar>
        
    );
}
