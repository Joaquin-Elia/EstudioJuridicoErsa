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
    
    window.addEventListener('scroll', () => {
        const whatsappButton = document.getElementById('whatsappButton');
        if (window.pageYOffset > 400) { // Ajusta este valor según tus necesidades
            whatsappButton.style.display = 'flex';
        } else {
            whatsappButton.style.display = 'none';
        }
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
        
        const compensation = Math.round(a * (1 - Vn) * (1 / i));

        result.innerHTML = `La indemnización es de: <strong style="font-size: 18px;">$${compensation.toLocaleString('es-AR')}</strong> pesos.`;
    });
    
    // work accident
    let errorWork = document.getElementById("errorWork");
    let resultWork = document.getElementById("resultWork");
    document.getElementById("calculateWork").addEventListener("click", () => {
        const age = parseFloat(document.getElementById("ageWork").value);
        const salary = parseFloat(document.getElementById("salaryWork").value);
        const inabilityPercentage = parseFloat(document.getElementById("percentageWork").value);
        const accidentPlace = document.querySelector('input[name="accidentPlace"]:checked').value;
    
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
    
        let compensation = Math.round(salary * 53 * (65 / age) * (inabilityPercentage / 100));
    
        accidentPlace === "work" && (compensation *= 1.2)
        
        resultWork.innerHTML = `La indemnización es de: <strong style="font-size: 18px;">$${compensation.toLocaleString('es-AR')}</strong> pesos.`;
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



    // testimonials
    const slider = document.querySelector('.testimonials');
    const testimonialsContainer = document.getElementById('testimonialsContainer');

    const testimonials = [
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocJV4pW8GJDFX6yAgZXcJPEcXeUzjwqeJHGCBNGigff-=s64-c-rp-mo-br100",
            name: "Leandro Barrena",
            quote: "Gente con carisma, responsables y muy dedicados a su labor un lujo en pocas palabras",
            link: "https://g.co/kgs/kb7joo"
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjVLcGdojRApTliS157D-YEW0w-U-pPH_w8qPQCCXDcQw2Q=s64-c-rp-mo-br100",
            name: "Nazareno Barraza",
            quote: "Excelente atención. Amabilidad y cordialidad, totalmente satisfecho.",
            link: "https://g.co/kgs/2Fi24c"
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocLdm0pAY8_JL7FB9GxxDPPMXwCbczVvpA8lzxYISvax=s64-c-rp-mo-br100",
            name: "Alfredo Vivarelli",
            quote: "Grandes profesionales y mejores personas. Comprometidos y eficaces. Para contar con el estudio.",
            link: "https://g.co/kgs/MtZf6f"
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjWz_H16vdbSIgXkefGn9zZbfnrZbvrsp00tYx3vCzpW4x4F=s64-c-rp-mo-br100",
            name: "Mariana Acosta",
            quote: "Excelente abogado muy recomendable respecto a la defensa en materia sumario muy conforme con su amabilidad y excelencia",
            link: "https://g.co/kgs/gHYgxg"
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocKHGDzYEAl1OTdl0hObKZPRuPtuDDtl_RsiyCQJ4EEu=s64-c-rp-mo-br100",
            name: "ignacio eyherabide",
            quote: "Exelentes profesionales muy buena atención amabilidad y muy cumplidores",
            link: "https://g.co/kgs/K7WDcE"
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjUZZvtNlA7ILaZD7STbl-isovNE813mwSS2987KdEd_UJ8=s64-c-rp-mo-br100",
            name: "Yohana Jaureguiberry",
            quote: "Muy buen servicio y atencion, manejo responsable y profesional!",
            link: "https://g.co/kgs/MoQT4X"
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocLdn9YsipvTyOKDUNrfj2wwU6tuuDD8hlh2Hsi7ozWQ=s64-c-rp-mo-br100",
            name: "Marcela Jose",
            quote: "Excelente estudio y pronta atención y solución a su clientela. Súper recomendable!!!",
            link: "https://g.co/kgs/JvDiLZ"
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocL-8SFzuPrNtdJqFNeYIYZWxxM06ZTdxUbpP2RZ1nei=s64-c-rp-mo-br100",
            name: "Enrique Bautista",
            quote: "Dedicación profesional en cada expediente, buena atención, dispuestos y comprometidos en cada dificultad. Atención excelente.",
            link: "https://g.co/kgs/ysVgjm"
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjWV7z10r5U-oMPXvmPYeYopWPrcDQkId8JWOPjJIvt_e2o=s64-c-rp-mo-br100",
            name: "Lola Elizari",
            quote: "Excelentes profesionales y mucha calidad humana. Super recomendables!",
            link: "https://g.co/kgs/uZcYZe"
        },
    ]

    testimonials.forEach(({img, name, quote, link}) => {
        const cardHTML = `
            <article class="testimonial-card">
                <header class="testimonial-header">
                    <div class="testimonial-header-client">
                        <img src="${img}" alt="Foto de ${name}" class="testimonial-img">
                        <h3 class="testimonial-name">${name}</h3>
                    </div>
                    <div class="testimonial-stars"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                </header>
                <blockquote cite="${name}" class="testimonial-quote">
                    ${quote}
                </blockquote>
                <footer class="testimonial-footer">
                    <img src="../assets/googleIcon.svg" class="google-icon" alt="Logo de Google en referencia a testimonios">
                    <a  href="${link}"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > Ver comentario
                    </a>
                </footer>
            </article>
        `;

        testimonialsContainer.innerHTML += cardHTML;
    });
    // carousel testimonials
    const firstCard = slider.querySelectorAll('article')[0];
    const arrowIcons = document.querySelectorAll('.arrow-slider')

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    
    const showHideIcons = () => {
        let scrollWidth = slider.scrollWidth - slider.clientWidth; // getting max scorll width
        arrowIcons[0].style.display = slider.scrollLeft === 0 ? 'none' : 'block'
        arrowIcons[1].style.display = slider.scrollLeft === scrollWidth ? 'none' : 'block'
    }
    
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstCardWidth = firstCard.clientWidth + 16; // getting first card
            slider.scrollLeft += icon.id === 'iconLeft' ? -firstCardWidth : firstCardWidth;
            showHideIcons()
        })
    })

    const autoSlide = () => {
        // if there's no img left to scroll then return from here
        if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff) // positionDiff value to positive
        let firstCardWidth = firstCard.clientWidth + 8;
        let valDifference = firstCardWidth - positionDiff;
        
        if(slider.scrollLeft > prevScrollLeft) {// user scrolling to the right
            return slider.scrollLeft += positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff;
        }
        // user scrolling to the left
        slider.scrollLeft -= positionDiff > firstCardWidth / 2 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = slider.scrollLeft
        slider.style.cursor = 'grabbing'
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault()
        isDragging = true;
        slider.classList.add("dragging-slider")
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        slider.scrollLeft = prevScrollLeft - positionDiff;
        slider.style.cursor = 'grabbing'
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        slider.classList.remove("dragging-slider")
        slider.style.cursor = 'grab'

        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    slider.addEventListener("mousedown", dragStart)
    slider.addEventListener("touchstart", dragStart)

    slider.addEventListener("mousemove", dragging)
    slider.addEventListener("touchmove", dragging)

    slider.addEventListener("mouseup", dragStop)
    slider.addEventListener("mouseleave", dragStop)
    slider.addEventListener("touchend", dragStop)
});
