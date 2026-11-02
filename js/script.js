document.getElementById("header").innerHTML = `
<header>
    <div class="header-container">

        <a href="index.html">
            <img src="images/hsfs-banner.png"
                 alt="Healthy Starts For Schools"
                 class="logo">
        </a>

        <nav>
            <button class="burger" id="burger">☰</button>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="mission.html">Our Mission</a></li>
                <li><a href="howitworks.html">How It Works</a></li>
                <li><a href="nutritionresearch.html">Nutrition and Research</a></li>
                <li><a href="faqs.html">FAQs</a></li>
				<li><a href="team.html">Team</a></li>
            </ul>
        </nav>
		<button class='green-button' id='get-in-touch'>Get in touch</button>
    </div>	
</header>
`;

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {

    const href = link.getAttribute('href');

    if (href === currentPage) {
        link.classList.add('active-page');
    }

});