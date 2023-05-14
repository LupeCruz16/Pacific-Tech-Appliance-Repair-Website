// Create the brands HTML code
const brandsHTML = `
    <link rel="stylesheet" href="Reused Elements/brands-styles.css">
    <section class="brands">
        <h2>Brands We Repair</h2>
        <p>Missing your brand? Contact us for repair services inquiry.</p>
        <div class="brand-images-container">
          <img src="Graphics/Serviced Brands/admiral.png" alt="Brand 1">
          <img src="Graphics/Serviced Brands/amana.png" alt="Brand 2">
          <img src="Graphics/Serviced Brands/bosch.png" alt="Brand 3">
          <img src="Graphics/Serviced Brands/caloric.png" alt="Brand 4">
          <img src="Graphics/Serviced Brands/dacor.png" alt="Brand 5">
          <img src="Graphics/Serviced Brands/electrolux.png" alt="Brand 6">
          <img src="Graphics/Serviced Brands/estate.png" alt="Brand 7">
          <img src="Graphics/Serviced Brands/frigidare.png" alt="Brand 8">
          <img src="Graphics/Serviced Brands/gaffers&sattler.jpg" alt="Brand 9">
          <img src="Graphics/Serviced Brands/ge.png" alt="Brand 10">
          <img src="Graphics/Serviced Brands/hotpoint.png" alt="Brand 11">
          <img src="Graphics/Serviced Brands/insinkerator.png" alt="Brand 12">
          <img src="Graphics/Serviced Brands/jenn air.png" alt="Brand 13">
          <img src="Graphics/Serviced Brands/kenmore.png" alt="Brand 14">
          <img src="Graphics/Serviced Brands/kirkland.png" alt="Brand 15">
          <img src="Graphics/Serviced Brands/kitchen aid.png" alt="Brand 16">
          <img src="Graphics/Serviced Brands/lg.png" alt="Brand 17">
          <img src="Graphics/Serviced Brands/magicCheif.svg" alt="Brand 18">
          <img src="Graphics/Serviced Brands/maytag.png" alt="Brand 19">
          <img src="Graphics/Serviced Brands/roper.png" alt="Brand 20">
          <img src="Graphics/Serviced Brands/samsung.png" alt="Brand 21">
          <img src="Graphics/Serviced Brands/sub zero.png" alt="Brand 22">
          <img src="Graphics/Serviced Brands/tappan.gif" alt="Brand 23">
          <img src="Graphics/Serviced Brands/thermador.png" alt="Brand 24">
          <img src="Graphics/Serviced Brands/uline.png" alt="Brand 25">
          <img src="Graphics/Serviced Brands/viking.png" alt="Brand 26">
          <img src="Graphics/Serviced Brands/whirlpool.png" alt="Brand 27">
          <img src="Graphics/Serviced Brands/wolf.png" alt="Brand 28">
        </div>
    </section>
`;

// Get the brands container element in the target file
const brandsContainer = document.getElementById('serviced-brands-container');

// Append the brands HTML code to the brands container
brandsContainer.innerHTML = brandsHTML;
