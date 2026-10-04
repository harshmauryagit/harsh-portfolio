function openCertificate(imagePath) {
    const modal = document.getElementById("certificate-modal");
    const image = document.getElementById("certificate-full-image");

    image.src = imagePath;
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}
function closeCertificate() {
    const modal = document.getElementById("certificate-modal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}

// Close when clicking outside the certificate
document.getElementById("certificate-modal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeCertificate();
    }
});


// Close when pressing Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
    });
});

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                navigationLinks.forEach(function(link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(function(section) {
    sectionObserver.observe(section);
});KO