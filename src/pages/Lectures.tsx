import React from "react";
import { LECTURES } from "../data/lectures";
import Lecture from "../components/Lecture";

const Lectures: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold dark:text-white">Lectures</h2>
      <div className="flex flex-col gap-4 mt-8">
        {LECTURES.map((lecture, index) => {
          return <Lecture key={index} lecture={lecture} />;
        })}
      </div>
    </div>
  );
};

export default Lectures;
