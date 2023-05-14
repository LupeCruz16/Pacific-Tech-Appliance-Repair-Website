// Create the form HTML code
const formHTML = `
    <link rel="stylesheet" href="Reused Elements/form-styles.css">
    <script src="Reused Elements/formInputField.js"></script>
    <form>
        <h2 class="form-header">Schedule Appointment</h2>
        <div class="form-row">
          <div class="form-group">
            <label for="first-name">First Name<span class="required">*</span></label>
            <input type="text" id="first-name" name="first-name" required>
            <span class="underline"></span>
          </div>
          <div class="form-group">
            <label for="last-name">Last Name<span class="required">*</span></label>
            <input type="text" id="last-name" name="last-name" required>
            <span class="underline"></span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="phone">Phone Number<span class="required">*</span></label>
            <input type="tel" id="phone" name="phone" required>
            <span class="underline"></span>
          </div>
          <div class="form-group">
            <label for="email">Email<span class="required">*</span></label>
            <input type="email" id="email" name="email" required>
            <span class="underline"></span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="address">Address<span class="required">*</span></label>
            <input type="text" id="address" name="address" required>
            <span class="underline"></span>
          </div>
          <div class="form-group">
            <label for="suite">Suite, Apt, etc...</label>
            <input type="text" id="suite" name="suite">
            <span class="underline"></span>
          </div>
        </div>
        <div class="form-trio-row">
          <div class="form-trio-group">
            <label for="city">City<span class="required">*</span></label>
            <input type="text" id="city" name="city" required>
            <span class="underline"></span>
          </div>
          <div class="form-trio-group">
            <label for="state">State<span class="required">*</span></label>
            <input type="text" id="state" name="state" required>
            <span class="underline"></span>
          </div>
          <div class="form-trio-group">
            <label for="zip">Zip Code<span class="required">*</span></label>
            <input type="text" id="zip" name="zip" required>
            <span class="underline"></span>
          </div>
        </div>  
        <div class="form-trio-row">
          <div class="form-trio-group">
            <label for="appliance-type">Appliance Type<span class="required">*</span></label>
            <input type="text" id="appliance-type" name="appliance-type" required>
            <span class="underline"></span>
          </div>
          <div class="form-trio-group">
            <label for="appliance-brand">Appliance Brand</label>
            <input type="text" id="appliance-brand" name="appliance-brand">
            <span class="underline"></span>
          </div>
          <div class="form-trio-group">
            <label for="date">Date Request<span class="required">*</span></label>
            <input type="date" id="date" name="date" required>
            <span class="underline"></span>
          </div>
        </div>
        <div class="desc-row">
          <div class="form-group">
            <label for="problem-description">Description of Problem<span class="required">*</span></label>
            <textarea id="problem-description" name="problem-description" rows="4" required></textarea>
            <span class="underline"></span>
          </div>
        </div>
      <div>
        <div class="form-buttom">
          <button type="submit">Submit</button>
        </div>
      </div>
      </form>
`;

// Get the form container element in the target file
const formContainer = document.getElementById('form-container');

// Append the form HTML code to the footer container
formContainer.innerHTML = formHTML;
