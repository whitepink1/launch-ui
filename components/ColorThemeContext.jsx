"use client"
import { createContext, useContext, useEffect, useState } from "react";

const defaultTheme = {
  name: "ember",
  colors: ["rgb(251,146,60)", "rgb(255, 200, 154)", "rgb(247, 134, 41)", "rgb(252, 240, 229)"],
  gradient_1: ["rgba(253, 228, 197, 0.98)","rgba(255, 230, 200, 0.9)","rgba(252, 224, 166, 0.85)"],
  gradient_2: ["rgba(252, 158, 44, 0.86)","rgba(252, 162, 53, 0.86)","rgba(215, 146, 60, 0.01)"],
  gradient_3: ["rgba(0,0,0,0.95)","rgba(10,10,10,0.6)","rgba(88,87,84,0.85)"],
};

const themes = {
  ember: {
    name: "ember",
    colors: ["rgb(251,146,60)", "rgb(255, 200, 154)", "rgb(247, 134, 41)", "rgb(252, 240, 229)"],
    gradient_1: ["rgba(253, 228, 197, 0.98)","rgba(255, 230, 200, 0.9)","rgba(252, 224, 166, 0.85)"],
    gradient_2: ["rgba(252, 158, 44, 0.86)","rgba(252, 162, 53, 0.86)","rgba(215, 146, 60, 0.01)"],
    gradient_3: ["rgba(0,0,0,0.95)","rgba(10,10,10,0.6)","rgba(88,87,84,0.85)"],
  },
  fire: {
    name: "fire",
    colors: ["rgb(239,68,68)", "rgb(255, 158, 158)", "rgb(253, 69, 69)", "rgb(255, 206, 206)"],
    gradient_1: ["rgba(255, 203, 203, 0.98)","rgba(250, 191, 191, 0.9)","rgba(204, 111, 94, 0.85)"],
    gradient_2: ["rgba(230, 41, 41, 0.86)","rgba(201, 46, 46, 0.86)","rgba(215, 146, 60, 0.01)"],
    gradient_3: ["rgba(0,0,0,0.95)","rgba(10,10,10,0.6)","rgba(88,87,84,0.85)"],
  },
  ultraviolet: {
    name: "ultraviolet",
    colors: ["rgb(167,139,250)", "rgb(188, 166, 255)", "rgb(111, 63, 255)", "rgb(226, 216, 255)"],
    gradient_1: ["rgba(206, 195, 238, 0.98)","rgba(203, 196, 224, 0.9)","rgba(151, 108, 201, 0.85)"],
    gradient_2: ["rgba(143, 74, 233, 0.86)","rgba(93, 54, 201, 0.86)","rgba(109, 81, 190, 0.01)"],
    gradient_3: ["rgba(0,0,0,0.95)","rgba(2, 0, 0, 0.6)","rgba(120, 118, 128, 0.85)"],
  },
  titanium: {
    name: "titanium",
    colors: ["rgb(212,212,216)", "rgb(226, 226, 226)", "rgb(153, 153, 155)", "rgb(229, 229, 238)"],
    gradient_1: ["rgba(222, 222, 236, 0.98)","rgba(210, 210, 221, 0.9)","rgba(212, 212, 240, 0.85)"],
    gradient_2: ["rgba(181, 181, 190, 0.86)","rgba(184, 184, 199, 0.86)","rgba(167, 167, 194, 0.01)"],
    gradient_3: ["rgba(0,0,0,0.95)","rgba(10,10,10,0.6)","rgba(153, 153, 160, 0.85)"],
  },
  emerald: {
    name: "emerald",
    colors: ["rgb(110,231,183)", "rgb(169, 247, 215)", "rgb(5, 150, 105)", "rgb(221, 243, 234)"],
    gradient_1: ["rgba(207, 243, 228, 0.98)","rgba(210, 255, 237, 0.9)","rgba(52, 214, 139, 0.85)"],
    gradient_2: ["rgba(39, 209, 141, 0.86)","rgba(31, 173, 126, 0.86)","rgba(48, 150, 109, 0.01)"],
    gradient_3: ["rgba(0,0,0,0.95)","rgba(10,10,10,0.6)","rgba(111, 129, 122, 0.85)"],
  },
};

const ColorThemeContext = createContext();

export const ColorThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const stored = localStorage.getItem("color-theme");
    if (stored && themes[stored]) {
      setTheme(themes[stored]);
    }
  }, []);

  const changeTheme = (name) => {
    if (themes[name]) {
      setTheme(themes[name]);
      localStorage.setItem("color-theme", name);
    }
  };

  return (
    <ColorThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);