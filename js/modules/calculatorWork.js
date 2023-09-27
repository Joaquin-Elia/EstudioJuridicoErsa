'use strict';

export const calculator = () => {
    let errorWork = document.getElementById("errorWork");
    let resultWork = document.getElementById("resultWork");
    document.getElementById("calculateWork").addEventListener("click", () => {
        const age = parseFloat(document.getElementById("ageWork").value);
        const salary = parseFloat(document.getElementById("salaryWork").value);
        const inabilityPercentage = parseFloat(document.getElementById("percentageWork").value);
        const accidentPlace = document.querySelector('input[name="accidentPlace"]:checked').value;
    
        errorWork.textContent = ''
        // Validations
        if (!age || !salary || !inabilityPercentage) {
            errorWork.textContent = "Por favor complete todos los campos";
            resultWork.textContent = ''
            return;
        }
        if (age < 18 || age > 74) {
            errorWork.textContent = "La edad tiene que ser entre 18 y 75 años";
            resultWork.textContent = ''
            return;
        }
        if (salary < 10000) {
            errorWork.textContent = "El ingreso mensual debe ser mayor a $10.000";
            resultWork.textContent = ''
            return;
        }
        if (inabilityPercentage > 101) {
            errorWork.textContent = "El porcentaje de incapacidad no puede ser mayor a 100";
            resultWork.textContent = ''
            return;
        }
    
        let compensation = Math.round(salary * 53 * (65 / age) * (inabilityPercentage / 100));
    
        accidentPlace === "work" && (compensation *= 1.2)
        
        resultWork.innerHTML = `La indemnización es de: <strong style="font-size: 18px;">$${compensation.toLocaleString('es-AR')}</strong> pesos.`;
    });
}