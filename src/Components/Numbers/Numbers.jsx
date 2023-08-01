import React, { useState, useEffect } from 'react';
import "./Numbers.css";

export default function Numbers() {
  const [yearsLearning, setYearsLearning] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    // Función para incrementar los números gradualmente cada 1 segundo
    const interval = setInterval(() => {
      // Incrementa el número de años de aprendizaje hasta llegar a 2
      if (yearsLearning < 2) {
        setYearsLearning(prevYears => prevYears + 1);
      }

      // Incrementa el número de proyectos hasta llegar a 5
      if (projects < 125) {
        setProjects(prevProjects => prevProjects + 1);
      }
    }, 25); // 1000 milisegundos = 1 segundo

    // Limpia el intervalo cuando los números lleguen a los valores deseados
    if (yearsLearning === 2 && projects === 125) {
      clearInterval(interval);
    }

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [yearsLearning, projects]); // Agregamos yearsLearning y projects como dependencias del useEffect

  return (
    <div className="numbers">
      <div className="numbers1">
        <h6 className="numbersData">+{yearsLearning}</h6>
        <span className="numbersSpan">Años aprendiendo</span>
      </div>
      <div className="numbers2">
        <h6 className="numbersData">+{projects}</h6>
        <span className="numbersSpan">Contribuciones en Github</span>
      </div>
      <div className="numbers3">
        <h6 className="numbersData">Muchas</h6>
        <span className="numbersSpan">Ganas de crecer</span>
      </div>
    </div>
  );
}