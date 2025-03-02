"use client";
import { useState } from "react";
import { Scale5x3x1 } from "../components/Scale5x3x1";
import { Scale6x2 } from "../components/Scale6x2";
import { Scale5x1 } from "../components/Scale5x1";
import { Scale4x2 } from "../components/Scale4x2";
import { Scale24x48 } from "../components/Scale24x48";
import { Scale18x12 } from "../components/Scale18x12";
import { Scale12x36 } from "../components/Scale12x36";
import { Scale14x14 } from "../components/Scale14x14";
import { Scale6x1AlternateSaturday } from "../components/Scale6x1AlternateSaturday";

const scales = ["5x3x1", "6x2", "5x1", "4x2", "12x36", "18x12", "24x48", "14x14", "6x1-Sabado-Alternado"] as const;
type ScaleType = typeof scales[number];

const calendars: Record<ScaleType, React.FC | null> = {
  "5x3x1": Scale5x3x1,
  "6x2": Scale6x2,
  "5x1": Scale5x1,
  "6x1-Sabado-Alternado": Scale6x1AlternateSaturday,
  "4x2": Scale4x2,
  "12x36": Scale12x36,
  "18x12": Scale18x12,
  "24x48": Scale24x48,
  "14x14": Scale14x14,
};

export default function Home() {
  const [scale, setScale] = useState<ScaleType>(scales[0]);
  const Calendar = calendars[scale];

  return (
    <div className="bg-gray-50 text-center font-sans min-h-screen">
      <div className="pt-32 p-6">
        <label htmlFor="scale" className="block text-lg font-semibold mb-2 text-blue-500">
          Selecione sua escala de trabalho e último dia de folga:
        </label>
        <select
          name="scale"
          id="scale"
          className="p-2 border-2 border-blue-400 bg-white rounded-md shadow-md text-blue-500 font-bold focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={scale}
          onChange={(e) => setScale(e.target.value as ScaleType)}
        >
          {scales.map((s) => (
            <option className="text-center" key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {Calendar && <Calendar />}
      </div>
    </div>
  );
}