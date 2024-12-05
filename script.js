// script.js
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            window.location.href = '#';
        });
    });
});
