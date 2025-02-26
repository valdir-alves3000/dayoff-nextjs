"use client"
import { useState } from "react";
import { Calendar5x3x1 } from "./components/Calendar5x3x1";
import { Calendar6x2 } from "./components/Calendar6x2";
import Image from "next/image";

export default function Home() {
  const [scale, setScale] = useState("5x3x1");

  return (
    <div className="bg-gray-100 text-center font-sans min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-md p-4 bg-gray-100 flex justify-start">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          priority={true}
          style={{
            width: 'auto',
            height: "auto"
          }}
        />
      </header>

      <div className="pt-32 p-6">
        <label htmlFor="scale" className="block text-lg font-semibold mb-2 text-[#74a0ff]">
          Selecione sua escala de trabalho e último dia de folga:
        </label>
        <select
          name="scale"
          id="scale"
          className="p-2 border-2 border-[#74a0ff] bg-white rounded-md shadow-md text-[#74a0ff] font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="5x3x1">5x3x1</option>
          <option value="6x2">6x2</option>
        </select>

        {scale === "5x3x1" && <Calendar5x3x1 />}
        {scale === "6x2" && <Calendar6x2 />}
      </div>
    </div>
  );
}
