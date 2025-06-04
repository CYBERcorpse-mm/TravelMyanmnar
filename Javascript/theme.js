document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleSide = document.getElementById('theme-toggle-side');
        
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        // Apply saved theme
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
        
        // Toggle theme function
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            
            // Update theme in localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
            }
        }
        
        // Add event listeners to both theme toggle buttons
        themeToggle.addEventListener('click', toggleTheme);
        if (themeToggleSide) {
            themeToggleSide.addEventListener('click', toggleTheme);
        }
    });