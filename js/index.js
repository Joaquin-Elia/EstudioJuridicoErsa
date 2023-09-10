'use strict';

window.addEventListener('DOMContentLoaded', () => { 
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const headerNav = document.querySelector('.header-nav');
    const navLink = document.querySelectorAll('.nav-link');
    
    hamburgerBtn.addEventListener('click', () => {
        headerNav.classList.toggle('isActive');
    });
    
    const closeMenu = () => headerNav.classList.remove('isActive');
    
    closeBtn.addEventListener('click', closeMenu);
    
    navLink.forEach(link => {
        link.addEventListener('click', closeMenu)
    });
    
    // calculators
    const showTraffic = document.getElementById('showTraffic');
    const showWork = document.getElementById('showWork');
    const showDismissal = document.getElementById('showDismissal');
    
    const calculatorTraffic = document.getElementById('calculatorTraffic');
    const calculatorWork = document.getElementById('calculatorWork');
    const calculatorDismissal = document.getElementById('calculatorDismissal');
    
    const buttons = [showTraffic, showWork, showDismissal];
    const calculators = [calculatorTraffic, calculatorWork, calculatorDismissal];
    
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("btn-calc-active"));
        calculators.forEach(calculator => calculator.classList.remove("calculator-active"));
        
        button.classList.add("btn-calc-active");
        calculators[index].classList.add("calculator-active");
      });
    });
    
    window.addEventListener("load", () => {
        showTraffic.classList.add("btn-calc-active");
        calculatorTraffic.classList.add("calculator-active");
    });
    
    // car accident 
    let errorTraficc = document.getElementById("errorTraffic");
    let result = document.getElementById("resultTraffic")
    document.getElementById("calculateTraffic").addEventListener("click", () => {
        const age = parseFloat(document.getElementById("ageTraffic").value);
        const salary = parseFloat(document.getElementById("salaryTraffic").value);
        const inabilityPercentage = parseFloat(document.getElementById("percentageTraffic").value);
    
        errorTraficc.textContent =''
        // Validaciones
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
        
        const compensation = a * (1 - Vn) * (1 / i);
    
        result.textContent = `La indemnización es: $${Math.floor(compensation.toFixed(2))} pesos.`;
    });
    
    // work accident
    let errorWork = document.getElementById("errorWork");
    let resultWork = document.getElementById("resultWork");
    document.getElementById("calculateWork").addEventListener("click", () => {
        const age = parseFloat(document.getElementById("ageWork").value);
        const salary = parseFloat(document.getElementById("salaryWork").value);
        const inabilityPercentage = parseFloat(document.getElementById("percentageWork").value);
        const place = document.getElementById("accidentPlace");
    
        errorWork.textContent = ''
        // Validaciones
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
    
        let accidentPlace = place.value;
    
        let compensation = salary * 53 * (65 / age) * (inabilityPercentage / 100);
    
        accidentPlace === "work" && (compensation *= 1.2)
        
        resultWork.textContent = `La indemnización es: $${Math.floor(compensation.toFixed(2))} pesos.`;
    });
    
    // dismissal 
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
        const dismissalNotice = document.querySelector("#dismissalNotice").value;
    
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
        const totalIndemnizacion = indemnizacionAntiguedad + indemnizacionPreaviso + vacationValue + proportionalVacationValue + aguinaldoValue + workedDaysValue;
        
        // Mostrar el resultado en la página
        document.querySelector("#resultDismissal").textContent = `La indemnización es de ${Math.floor(totalIndemnizacion.toFixed(2))} pesos.`;
    });
});
