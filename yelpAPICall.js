
fetch(proxyUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ url: apiUrl, apiKey: apiKey }),
})
  .then(response => response.json())
  .then(data => {
    const reviews = data.reviews;
    displayReviews(reviews);
  })
  .catch(error => {
    console.error('Error fetching Yelp reviews:', error);
  });

  function createStarRating(rating, imagePath) {
    const starsElement = document.createElement('div');
    starsElement.classList.add('stars');
  
    for (let i = 0; i < 5; i++) {
      const starElement = document.createElement('span');
      starElement.classList.add('star');
  
      if (i < rating) {
        starElement.style.backgroundImage = `url("${imagePath}/regular_${rating}.png")`;
      } else {
        starElement.style.backgroundImage = `url("${imagePath}/regular_0.png")`;
      }
  
      starsElement.appendChild(starElement);
    }
  
    return starsElement;
  }

  function displayReviews(reviews) {
    const reviewBoxes = document.getElementsByClassName('review-box');
    const numReviews = Math.min(reviews.length, reviewBoxes.length); // Minimum of 3 reviews or the available number of review boxes
  
    let totalRating = 0;
    for (let i = 0; i < numReviews; i++) {
      totalRating += reviews[i].rating;
    }
    const averageRating = totalRating / numReviews;

    const totalReviews = reviews.length;
    const ratingText = document.createElement('p');
    ratingText.classList.add('rating-text');
    ratingText.textContent = `${averageRating.toFixed(1)} rating of ${totalReviews} reviews`;

    const reviewOutOfContainer = document.querySelector('.review-out-of');
    reviewOutOfContainer.appendChild(ratingText);

    for (let i = 0; i < numReviews; i++) {
      const review = reviews[i];
      const reviewBox = reviewBoxes[i];
  
      const userProfile = document.createElement('div');
      userProfile.classList.add('user-profile');
  
      const profilePhoto = document.createElement('img');
      profilePhoto.classList.add('profile-photo');
      profilePhoto.src = review.user.image_url || 'Graphics/images/defaultProfilePic.png'; // Set default image if image_url is null
  
      const userName = document.createElement('p');
      userName.classList.add('user-name');
      userName.textContent = review.user.name;
  
      const rating = document.createElement('div');
      rating.classList.add('rating');
  
      const stars = document.createElement('div');
      stars.classList.add('stars');
      // Set the background image for stars based on the review rating
      stars.style.backgroundImage = `url("Yelp/Yelp Stars/web_and_ios/regular/regular_${review.rating}.png")`;
  
      const content = document.createElement('div');
      content.classList.add('content');
      content.textContent = review.text;
  
      const readMoreLink = document.createElement('a');
      readMoreLink.classList.add('read-more');
      readMoreLink.href = review.url; // Set the Yelp URL as the link destination
      readMoreLink.target = 'https://www.yelp.com/biz/pacific-tech-appliance-repair-escondido'; // Open link in a new tab
      readMoreLink.textContent = 'Read More';
  
      const yelpLogoContainer = document.createElement('div');
      yelpLogoContainer.classList.add('yelp-logo-container');

      const yelpLogo = document.createElement('img');
      yelpLogo.classList.add('yelp-logo');
      yelpLogo.src = 'Graphics/icons/icons8-yelpLogo.png';

      const yelpLogoLink = document.createElement('a');
      yelpLogoLink.href = 'https://www.yelp.com/biz/pacific-tech-appliance-repair-escondido'; 
      yelpLogoLink.target = 'https://www.yelp.com/biz/pacific-tech-appliance-repair-escondido';
      yelpLogoLink.appendChild(yelpLogo);


      const postedOnYelpText = document.createElement('p');
      postedOnYelpText.classList.add('posted-on-yelp');
      postedOnYelpText.textContent = 'Posted on Yelp';
  
      userProfile.appendChild(profilePhoto);
      userProfile.appendChild(userName);
      reviewBox.appendChild(userProfile);
      rating.appendChild(stars);
      reviewBox.appendChild(rating);
      content.appendChild(readMoreLink);
      reviewBox.appendChild(content);
      yelpLogoContainer.appendChild(yelpLogoLink);
      yelpLogoContainer.appendChild(postedOnYelpText);
      reviewBox.appendChild(yelpLogoContainer);
    }
  }
  
  
  
