const CONTACT_EMAIL = 'info@healthystartsforschools.co.uk';

/* ---------- helpers ---------- */
function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function onClick(id, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', handler);
}

function valueOf(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
}

function openEnquiry({
    intro = "I'd like to reach out to the health squad for some more information.",
    name = '',
    email = null,            // null = don't include an Email line
    organisation = '',
    closing = 'Tell us some more about your enquiry:'
} = {}) {
    const lines = [intro, '', `Name: ${name}`, ''];
    if (email !== null) lines.push(`Email: ${email}`, '');
    lines.push(
        `Organisation: ${organisation}`, '',
        'Contact number:', '',
        'Best time to call:', '',
        closing
    );

    const subject = encodeURIComponent('Health Squad Enquiry');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/* ---------- header & footer ---------- */
setHTML('header', `
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
        <button class="green-button" id="get-in-touch">Get in touch</button>
    </div>
</header>
`);

setHTML('footer', `
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
`);

/* ---------- burger menu ---------- */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

/* ---------- highlight current page ---------- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active-page');
    }
});

/* ---------- enquiry buttons ---------- */
onClick('get-in-touch', () => openEnquiry());

onClick('contact-footer-link', (e) => {
    e.preventDefault();
    openEnquiry();
});

onClick('get-in-touch-purple', (e) => {
    e.preventDefault();
    openEnquiry({
        name: valueOf('name'),
        email: valueOf('email'),
        organisation: valueOf('organisation')
    });
});

onClick('get-in-touch-nutrition', (e) => {
    e.preventDefault();
    openEnquiry({
        intro: "I'd like to reach out to the health squad for some more information on nutrition and research.",
        name: valueOf('name'),
        email: valueOf('email'),
        organisation: valueOf('organisation'),
        closing: 'Tell us some more about your nutrition and research enquiry:'
    });
});