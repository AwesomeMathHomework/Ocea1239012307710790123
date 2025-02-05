
document.addEventListener("contextmenu", (event) => event.preventDefault());


document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});


let devtoolsOpen = false;

const checkDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
        devtoolsOpen = true;

       
        window.open('', '_self').close();

        // If close fails, redirect instantly
        window.location.replace("https://launchpad.classlink.com/lwsd");
    } else {
        devtoolsOpen = false;
    }
};
