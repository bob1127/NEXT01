import { useState, useEffect } from 'react';

'use client'
// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();


    return (
        <div>
            The current theme is: {theme}<br />
            <button onClick={() => setTheme('light')}>Light Mode</button><br/>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
            
        </div>
    )
};