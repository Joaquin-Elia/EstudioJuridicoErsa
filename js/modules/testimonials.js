'use strict'

export const testimonials = () => {
    const testimonialsContainer = document.getElementById('testimonialsContainer')

    const testimonials = [
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocJV4pW8GJDFX6yAgZXcJPEcXeUzjwqeJHGCBNGigff-=s64-c-rp-mo-br100",
            name: "Leandro Barrena",
            quote: "Gente con carisma, responsables y muy dedicados a su labor un lujo en pocas palabras",
            link: "https://g.co/kgs/kb7joo",
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjVLcGdojRApTliS157D-YEW0w-U-pPH_w8qPQCCXDcQw2Q=s64-c-rp-mo-br100",
            name: "Nazareno Barraza",
            quote: "Excelente atención. Amabilidad y cordialidad, totalmente satisfecho.",
            link: "https://g.co/kgs/2Fi24c",
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocLdm0pAY8_JL7FB9GxxDPPMXwCbczVvpA8lzxYISvax=s64-c-rp-mo-br100",
            name: "Alfredo Vivarelli",
            quote: "Grandes profesionales y mejores personas. Comprometidos y eficaces. Para contar con el estudio.",
            link: "https://g.co/kgs/MtZf6f",
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjWz_H16vdbSIgXkefGn9zZbfnrZbvrsp00tYx3vCzpW4x4F=s64-c-rp-mo-br100",
            name: "Mariana Acosta",
            quote: "Excelente abogado muy recomendable respecto a la defensa en materia sumario muy conforme con su amabilidad y excelencia",
            link: "https://g.co/kgs/gHYgxg",
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocKHGDzYEAl1OTdl0hObKZPRuPtuDDtl_RsiyCQJ4EEu=s64-c-rp-mo-br100",
            name: "ignacio eyherabide",
            quote: "Exelentes profesionales muy buena atención amabilidad y muy cumplidores",
            link: "https://g.co/kgs/K7WDcE",
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjUZZvtNlA7ILaZD7STbl-isovNE813mwSS2987KdEd_UJ8=s64-c-rp-mo-br100",
            name: "Yohana Jaureguiberry",
            quote: "Muy buen servicio y atencion, manejo responsable y profesional!",
            link: "https://g.co/kgs/MoQT4X",
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocLdn9YsipvTyOKDUNrfj2wwU6tuuDD8hlh2Hsi7ozWQ=s64-c-rp-mo-br100",
            name: "Marcela Jose",
            quote: "Excelente estudio y pronta atención y solución a su clientela. Súper recomendable!!!",
            link: "https://g.co/kgs/JvDiLZ",
        },
        {
            img: "https://lh3.googleusercontent.com/a/ACg8ocL-8SFzuPrNtdJqFNeYIYZWxxM06ZTdxUbpP2RZ1nei=s64-c-rp-mo-br100",
            name: "Enrique Bautista",
            quote: "Dedicación profesional en cada expediente, buena atención, dispuestos y comprometidos en cada dificultad. Atención excelente.",
            link: "https://g.co/kgs/ysVgjm",
        },
        {
            img: "https://lh3.googleusercontent.com/a-/ALV-UjWV7z10r5U-oMPXvmPYeYopWPrcDQkId8JWOPjJIvt_e2o=s64-c-rp-mo-br100",
            name: "Lola Elizari",
            quote: "Excelentes profesionales y mucha calidad humana. Super recomendables!",
            link: "https://g.co/kgs/uZcYZe",
        },
    ]

    testimonials.forEach(({img, name, quote, link}) => {
        const cardHTML = `
            <article class="testimonial-card">
                <header class="testimonial-header">
                    <div class="testimonial-header-client">
                        <img src="${img}" alt="Foto de ${name}" loading="lazy" class="testimonial-img">
                        <h3 class="testimonial-name">${name}</h3>
                    </div>
                    <div class="testimonial-stars"> 
                        <svg xmlns="http://www.w3.org/2000/svg" loading="lazy" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" loading="lazy" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" loading="lazy" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" loading="lazy" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" loading="lazy" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                </header>
                <blockquote cite="${name}" class="testimonial-quote">
                    "${quote}"
                </blockquote>
                <footer class="testimonial-footer">
                    <img src="./assets/googleIcon.svg" class="google-icon" loading="lazy" alt="Logo de Google en referencia a testimonios">
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
}