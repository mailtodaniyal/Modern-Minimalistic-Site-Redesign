        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const nav = document.getElementById('nav');
            const heroVideo = document.getElementById('heroVideo');
            const steps = document.querySelectorAll('.step');

            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
            });

            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                });
            });

            heroVideo.addEventListener('loadeddata', function() {
                heroVideo.classList.add('active');
            });

            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            steps.forEach(step => {
                observer.observe(step);
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
