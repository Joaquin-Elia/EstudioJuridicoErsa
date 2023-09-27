'use strict';

export const calculator = () => {
    let errorTraficc = document.getElementById("errorTraffic");
    let result = document.getElementById("resultTraffic")
    document.getElementById("calculateTraffic").addEventListener("click", () => {
        const age = parseFloat(document.getElementById("ageTraffic").value);
        const salary = parseFloat(document.getElementById("salaryTraffic").value);
        const inabilityPercentage = parseFloat(document.getElementById("percentageTraffic").value);
    
        errorTraficc.textContent =''
        // Validations
        if (!age || !salary || !inabilityPercentage) {
            errorTraficc.textContent = "Por favor complete todos los campos";
            result.textContent = ''
            return;
        }
        else if (age < 18 || age > 74) {
            errorTraficc.textContent = "La edad tiene que ser entre 18 y 75 años";
            result.textContent = ''
            return;
        }
        else if (salary < 10000) {
            errorTraficc.textContent = "El ingreso mensual debe ser mayor a $10.000";
            result.textContent = ''
            return;
        }
        else if (inabilityPercentage > 101) {
            errorTraficc.textContent = "El porcentaje de incapacidad no puede ser mayor a 100";
            result.textContent = ''
            return;
        }
    
        const i = 0.04; // Tasa de interés
        let n = 75 - age;
        const Vn = 1 / Math.pow((1 + i), n);
        let a = salary * (60 / age) * 13 * (inabilityPercentage / 100);
        
        const compensation = Math.round(a * (1 - Vn) * (1 / i));
    
        result.innerHTML = `La indemnización es de: <strong style="font-size: 18px;">$${compensation.toLocaleString('es-AR')}</strong> pesos.`;
    });
}
