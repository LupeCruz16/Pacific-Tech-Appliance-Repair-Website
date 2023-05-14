// Create the link element for the CSS file
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'Reused Elements/footer-styles.css'; 

// Append the link element to the document's head
document.head.appendChild(cssLink);

// Create the footer HTML code
const footerHTML = `
<footer>
      <div class="social-media-links">
        <a href="https://www.yelp.com/biz/pacific-tech-appliance-repair-escondido" target="https://www.yelp.com/biz/pacific-tech-appliance-repair-escondido" rel="noopener noreferrer">
          <img src="Graphics/icons/icons8-yelpLogoOutline.png" alt="Social Media Link 1">
        </a>
        <a href="https://www.facebook.com/northcountyapplianceservice/" target="https://www.facebook.com/northcountyapplianceservice/" rel="noopener noreferrer">
          <img src="Graphics/icons/icons8-facebookOutline.png" alt="Social Media Link 2">
        </a>
        <a href="https://www.instagram.com/sandiegoappliancerepair/" target="https://www.instagram.com/sandiegoappliancerepair/" rel="noopener noreferrer">
          <img src="Graphics/icons/icons8-instagramOutline.png" alt="Social Media Link 3">
        </a>
      </div>
      <div class="bottom-of-page"> <!-- Create a container for footer content with a gray bar background -->
        <p>&copy; 2023 Pacific Tech Appliance Repair</p> <!-- Add copyright notice to footer content -->
      </div>
    </footer>
`;

// Get the footer container element in the target file
const footerContainer = document.getElementById('footer-container');

// Append the footer HTML code to the footer container
footerContainer.innerHTML = footerHTML;
