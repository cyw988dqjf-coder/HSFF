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

document.getElementById("footer").innerHTML=`
<footer class="site-footer">
	<div class="site-footer-inner">

		<img class="footer-logo" src="images/hsfs-small-logo.png" alt="Healthy Starts For Schools">

		<div class="footer-text">
			<p class="footer-strong">Healthy Starts for Schools &bull; Led by Karen Storey</p>
			<p>
				&bull;
				<a href="privacy.html">Privacy Policy</a> &bull;
				<a href="#" id="contact-footer-link">Contact</a>
				&bull;
			</p>
			<p class="footer-copy">© 2026 Healthy Starts For Schools</p>
		</div>

		<img class="footer-leaves" src="images/leaves-right.png" alt="" aria-hidden="true">

	</div>
</footer>
<footer>
© 2026 Healthy Starts For Schools
</footer>
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

document.getElementById('get-in-touch').addEventListener('click', () => {

    const subject = encodeURIComponent('Health Squad Enquiry');

    const body = encodeURIComponent(
`I'd like reach out to the health squad for some more information.

Name:

Organisation:

Contact number:

Best time to call:

Tell us some more about your enquiry:`
    );

    window.location.href =
        `mailto:info@healthstartsforschools.co.uk?subject=${subject}&body=${body}`;
});
document.getElementById('contact-footer-link').addEventListener('click', (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Health Squad Enquiry');
    const body = encodeURIComponent(`I'd like to reach out to the health squad for some more information.

Name:

Organisation:

Contact number:

Best time to call:

Tell us some more about your enquiry:`);

    window.location.href =
        `mailto:info@healthystartsforschools.co.uk?subject=${subject}&body=${body}`;
});

document.getElementById('contact-footer-link').addEventListener('click', (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Health Squad Enquiry');
    const body = encodeURIComponent(`I'd like to reach out to the health squad for some more information.

Name:

Organisation:

Contact number:

Best time to call:

Tell us some more about your enquiry:`);

    window.location.href =
        `mailto:info@healthystartsforschools.co.uk?subject=${subject}&body=${body}`;
});

document.getElementById('get-in-touch-purple').addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const organisation = document.getElementById('organisation').value;

    const subject = encodeURIComponent('Health Squad Enquiry');

    const body = encodeURIComponent(
`I'd like to reach out to the health squad for some more information.

Name: ${name}

Email: ${email}

Organisation: ${organisation}

Contact number:

Best time to call:

Tell us some more about your enquiry:`
    );

    window.location.href =
        `mailto:info@healthystartsforschools.co.uk?subject=${subject}&body=${body}`;
});