// Nuclear Option - 100% Working Version
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('wision-preloader');
    
    // First removal method
    const removeLoader = () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
            console.log('Preloader removed successfully!');
        }, 1000);
    };

    // Primary trigger
    window.addEventListener('load', removeLoader);
    
    // Fallback trigger
    setTimeout(removeLoader, 4000);
    
    // Nuclear fallback
    setTimeout(() => {
        if(document.body.contains(preloader)) {
            preloader.remove();
            console.log('Nuclear removal executed!');
        }
    }, 5000);
});
