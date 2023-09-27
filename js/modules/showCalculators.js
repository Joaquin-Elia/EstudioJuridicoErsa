'use strict';

export const btnsShowCalculators = () => {
    const showTraffic = document.getElementById('showTraffic');
    const showWork = document.getElementById('showWork');
    const showDismissal = document.getElementById('showDismissal');
    
    const calculatorTraffic = document.getElementById('calculatorTraffic');
    const calculatorWork = document.getElementById('calculatorWork');
    const calculatorDismissal = document.getElementById('calculatorDismissal');
    
    const buttons = [showTraffic, showWork, showDismissal];
    const calculators = [calculatorTraffic, calculatorWork, calculatorDismissal];
    const modules = ['./calculatorTraffic.js', './calculatorWork.js', './calculatorDismissal.js'];
    
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("btn-calc-active"));
        calculators.forEach(calculator => calculator.classList.remove("calculator-active"));
        
        button.classList.add("btn-calc-active");
        calculators[index].classList.add("calculator-active");

        // Imports the calculator module selected
        import(modules[index])
        .then((module) => {
            module.calculator();
        })
        .catch((error) => {
            console.error(`Error loading module: ${error}`);
        });
      });
    });
    
    window.addEventListener("load", () => {
        showTraffic.classList.add("btn-calc-active");
        calculatorTraffic.classList.add("calculator-active");
        // imports the first calculator
        import(modules[0])
        .then((module) => {
            module.calculator();
        })
        .catch((error) => {
            console.error(`Error loading module: ${error}`);
        });
    });
}