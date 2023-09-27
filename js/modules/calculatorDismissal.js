'use strict';

export const calculator = () => {
    const date = new Date(); 
    let day = date.getDate(); 
    let month = date.getMonth() + 1; 
    const year = date.getFullYear(); 
    
    if(day < 10) day = '0' + day;
    
    if(month < 10) month = '0' + month;
    
    const today = year + "-" + month + "-" + day;
    document.getElementById("employmentDate").max = today;
    document.getElementById("dismissalDate").max = today;
    
    const calculateDismissal = document.querySelector("#calculateDismissal");
    calculateDismissal.addEventListener("click", () => {
        // Obtener los valores del formulario
        const employmentDate = new Date(document.querySelector("#employmentDate").value);
        const dismissalDate = new Date(document.querySelector("#dismissalDate").value);
        const salaryDismissal = parseFloat(document.querySelector("#salaryDismissal").value);
        const dismissalNotice = document.querySelector('input[name="dismissalNotice"]:checked').value;
    
        // Validar los datos ingresados por el usuario
        const errorElement = document.querySelector("#errorDismissal");
        errorElement.textContent = "";
        if (!employmentDate.getDate() || !dismissalDate.getDate() || !salaryDismissal) {
            errorElement.textContent = "Por favor complete todos los campos.";
            return;
        }
        if (dismissalDate < employmentDate) {
            errorElement.textContent = "La fecha de despido no puede ser anterior a la fecha de ingreso.";
            return;
        }
        if (employmentDate.getDate() > date || dismissalDate > date) {
            errorElement.textContent = "La fecha no puede ser futura.";
            return;
        }
        if (salaryDismissal < 10000) {
            errorElement.textContent = "El sueldo bruto debe ser mayor a $10.000";
            return;
        }
    
        // Calcular la antigüedad en años
        let years = dismissalDate.getFullYear() - employmentDate.getFullYear();
        let months = dismissalDate.getMonth() - employmentDate.getMonth();
        if (months < 0 || (months === 0 && dismissalDate.getDate() < employmentDate.getDate())) 
            years--;
    
        // Verificar si el empleado ha trabajado al menos 3 meses desde su fecha de ingreso
        const totalMonths = (dismissalDate.getFullYear() - employmentDate.getFullYear()) * 12 + dismissalDate.getMonth() - employmentDate.getMonth();
        if (totalMonths >= 3)
            years++;    
    
        // Calcular la indemnización por antigüedad
        const indemnizacionAntiguedad = years * salaryDismissal;
    
        // Calcular la indemnización por falta de preaviso
        let indemnizacionPreaviso = 0;
        if (dismissalNotice === "no") {
            if (years < 5) {
                indemnizacionPreaviso = salaryDismissal;
            } else {
                indemnizacionPreaviso = salaryDismissal * 2;
            }
        }
    
        // Calcular las vacaciones
        let vacationDays = 14;
        if (years >= 5) {
            vacationDays += Math.min(Math.floor(years / 5) * 7, 56);
        }
        const vacationValue = (salaryDismissal / 25) * vacationDays;
    
        // Calcular las vacaciones proporcionales
        const proportionalVacationMonths = dismissalDate.getMonth() - employmentDate.getMonth();
        const proportionalVacationValue = (proportionalVacationMonths * vacationDays * salaryDismissal) / (12 * 25);
    
        // Calcular el aguinaldo proporcional
        const aguinaldoMonths = dismissalDate.getMonth() - employmentDate.getMonth();
        const aguinaldoValue = (aguinaldoMonths * salaryDismissal) / 12;
    
        // Calcular los días trabajados del mes
        const workedDaysValue = (dismissalDate.getDate() * salaryDismissal) / 30;
    
        // Calcular el total de la indemnización
        const totalIndemnization = Math.round(indemnizacionAntiguedad + indemnizacionPreaviso + vacationValue + proportionalVacationValue + aguinaldoValue + workedDaysValue);
        
        // Mostrar el resultado en la página
        document.querySelector("#resultDismissal").innerHTML = `La indemnización es de: <strong style="font-size: 18px;">$${totalIndemnization.toLocaleString('es-AR')}</strong> pesos.`;
    });
}