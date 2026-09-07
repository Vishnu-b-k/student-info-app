document.addEventListener('DOMContentLoaded', () => {
    const showDetailsBtn = document.getElementById('showDetailsBtn');
    const extraDetails = document.getElementById('extraDetails');
    
    let isShowing = false;

    showDetailsBtn.addEventListener('click', () => {
        isShowing = !isShowing;
        
        if (isShowing) {
            extraDetails.style.display = 'block';
            showDetailsBtn.textContent = 'Hide Details';
        } else {
            extraDetails.style.display = 'none';
            showDetailsBtn.textContent = 'Show Details';
        }
    });
});
