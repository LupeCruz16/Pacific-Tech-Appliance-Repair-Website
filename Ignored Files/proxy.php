<?php
  header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
  header("Access-Control-Allow-Methods: GET, POST"); // Allow GET and POST requests
  header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow Content-Type and Authorization headers

  $apiKey = '-igO-g3vTtoRP2K-0jMX5Y1gpomb68Nol061gUG4JAimyeKW91igle-6Alg0_0gkzywSkQy-3omhQx6WUP0JnGasB3hkwg1PHkQNxalYXuMRj4fmZ3nt3ihXRpldZHYx';
  $businessId = 'pacific-tech-appliance-repair-escondido';

  $url = "https://api.yelp.com/v3/businesses/{$businessId}/reviews?limit=4";
  $headers = [
    "Authorization: Bearer {$apiKey}",
    "Content-Type: application/json",
  ];

  // Initialize cURL and set the options
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  // Execute the cURL request and get the response
  $response = curl_exec($ch);

  // Close cURL
  curl_close($ch);

  // Output the response
  echo $response;
?>
