// ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "./ThemeContext";
import { Toggle } from "@/components/ui/toggle"
const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle variant="outline"
      onClick={toggleTheme}
      className="p-2 border rounded"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Toggle>
  );
};

export default ThemeToggleButton;
