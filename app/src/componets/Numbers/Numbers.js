import React, { useEffect, useState } from "react";
import "./Numbers.css";

const Numbers = () => {
  const numbers = [
    { id: 1, value: 1287, label: "Savings" },
    { id: 2, value: 5786, label: "Photos" },
    { id: 3, value: 1440, label: "Rockets" },
    { id: 4, value: 7110, label: "Globes" },
  ];

  const duration = 2000; // المدة الزمنية (2 ثانية)
  const steps = 50; // عدد التحديثات خلال المدة
  const intervalTime = duration / steps; // وقت كل تحديث
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCounts(numbers.map(num => Math.floor((num.value / steps) * step)));
      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="numbers">
      <div className="container">
        <div className="row">
          {numbers.map((num, index) => (
            <div key={num.id} className="col-md-3">
              <h2 className="count">{counts[index]}+</h2>
              <h6>{num.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
