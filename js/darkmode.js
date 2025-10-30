// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-fill');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('bi-brightness-high-fill');
            icon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-brightness-high-fill');
            localStorage.setItem('theme', 'light');
        }
    });
});