'use strict';

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
document.getElementById("calculateTraffic").addEventListener("click", () => {
    const age = parseFloat(document.getElementById("ageTraffic").value);
    const salary = parseFloat(document.getElementById("salaryTraffic").value);
    const inabilityPercentage = parseFloat(document.getElementById("percentageTraffic").value);

    const i = 0.04; // Tasa de interés
    let n = 75 - age;
    const Vn = 1 / Math.pow((1 + i), n);
    let a = salary * (60 / age) * 13 * (inabilityPercentage / 100);
    
    const compensation = a * (1 - Vn) * (1 / i);

    document.getElementById("resultTraffic").textContent = `La indemnización es: $${compensation.toFixed(2)}`;
});

// work accident
document.getElementById("calculateWork").addEventListener("click", () => {
    const age = parseFloat(document.getElementById("ageWork").value);
    const salary = parseFloat(document.getElementById("salaryWork").value);
    const inabilityPercentage = parseFloat(document.getElementById("percentageWork").value);
    const place = document.getElementById("accidentPlace");

    let accidentPlace = place.value;

    let compensation = salary * 53 * (65 / age) * (inabilityPercentage / 100);

    accidentPlace === "work" && (compensation *= 1.2)
    
    document.getElementById("resultWork").textContent = `La indemnización es: $${compensation.toFixed(2)}`;
});

// dismissal 

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
    if (isNaN(employmentDate.getTime()) || isNaN(dismissalDate.getTime())) {
        errorElement.textContent = "Por favor, ingresa fechas válidas para la fecha de ingreso y la fecha de despido.";
        return;
    }
    if (dismissalDate < employmentDate) {
        errorElement.textContent = "La fecha de despido no puede ser anterior a la fecha de ingreso.";
        return;
    }
    if (isNaN(salaryDismissal) || salaryDismissal <= 0) {
        errorElement.textContent = "Por favor, ingresa un valor válido y positivo para el mejor sueldo bruto.";
        return;
    }

    // Calcular la antigüedad en años
    let years = dismissalDate.getFullYear() - employmentDate.getFullYear();
    let months = dismissalDate.getMonth() - employmentDate.getMonth();
    if (months < 0 || (months === 0 && dismissalDate.getDate() < employmentDate.getDate())) 
        years--;

    if (months >= 3)
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
    document.querySelector("#resultDismissal").textContent = `La indemnización por despido es de ${totalIndemnizacion.toFixed(2)} pesos.`;
});
