    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
        if (response.ok) form.reset();
    })

     // Mobile Navigation Toggle
     const hamburger = document.querySelector('.hamburger');
     const navLinks = document.querySelector('.nav-links');
     
     hamburger.addEventListener('click', () => {
         navLinks.classList.toggle('active');
         hamburger.querySelector('i').classList.toggle('fa-bars');
         hamburger.querySelector('i').classList.toggle('fa-times');
     });
     
     // Close mobile menu when clicking on a link
     document.querySelectorAll('.nav-links a').forEach(link => {
         link.addEventListener('click', () => {
             navLinks.classList.remove('active');
             hamburger.querySelector('i').classList.add('fa-bars');
             hamburger.querySelector('i').classList.remove('fa-times');
         });
     });
     
     // Header scroll effect
     window.addEventListener('scroll', () => {
         const header = document.getElementById('header');
         if (window.scrollY > 50) {
             header.classList.add('scrolled');
         } else {
             header.classList.remove('scrolled');
         }
     });

     fetch('/api/data')
     .then(response => response.json())
        .then(data => console.log(data));