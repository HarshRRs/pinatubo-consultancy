/* ============================================
   BOOKING PAGE LOGIC - PINATUBO CONSULTANCY
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    const radioParis = document.getElementById('location-paris');
    const radioInternational = document.getElementById('location-international');
    const bookingDetailsSection = document.getElementById('booking-details-section');
    const paymentFieldsContainer = document.getElementById('payment-fields-container');
    const submitButton = document.getElementById('submit-booking-btn');
    const bookingForm = document.getElementById('booking-form');
    const bookingTitle = document.getElementById('booking-title');
    const bookingInstructions = document.getElementById('booking-instructions');

    function setPaymentFieldsRequired(isRequired) {
        const fields = ['card-number', 'card-expiry', 'card-cvc', 'card-holder'];
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (isRequired) el.setAttribute('required', 'true');
                else el.removeAttribute('required');
            }
        });
    }

    // ============================================
    // LOCATION SELECTION LOGIC
    // ============================================
    function handleLocationChange() {
        // Show the booking form section
        bookingDetailsSection.classList.remove('hidden');

        // Scroll to form
        setTimeout(() => {
            bookingDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        // ALWAYS show payment fields for both options
        paymentFieldsContainer.classList.remove('hidden');
        submitButton.innerHTML = '<i class="fas fa-lock"></i> Pay 48.00€ & Confirm';
        setPaymentFieldsRequired(true);

        if (radioParis.checked) {
            // PARIS
            bookingTitle.innerHTML = '<i class="fas fa-building"></i> Book In-Person Appointment';
            bookingInstructions.textContent = 'Please select a time to visit us at our office: 98 Boulevard du Montparnasse, 75014 Paris. A 48€ payment is required to secure the slot.';
        } else if (radioInternational.checked) {
            // INTERNATIONAL
            bookingTitle.innerHTML = '<i class="fas fa-globe"></i> Book Online Consultation';
            bookingInstructions.textContent = 'Select your preferred time for an online video call. A 48€ payment is required to secure the slot.';
        }
    }

    // Add click listeners to the container divs for better UX
    document.querySelectorAll('.radio-option').forEach(option => {
        option.addEventListener('click', function (e) {
            // Find the radio input inside this option
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                handleLocationChange();
            }
        });
    });

    // Keep change listeners as backup
    if (radioParis) radioParis.addEventListener('change', handleLocationChange);
    if (radioInternational) radioInternational.addEventListener('change', handleLocationChange);

    // ============================================
    // FORM SUBMISSION & PAYMENT LOGIC
    // ============================================
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic Form Validation (HTML5 'required' handles most)
            const name = document.getElementById('booking-name').value;
            const email = document.getElementById('booking-email').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;

            if (!name || !email || !date || !time) {
                alert('Please fill in all required booking fields.');
                return;
            }

            // ALWAYS Validate Payment
            const cardNumber = document.getElementById('card-number').value;
            const cardExpiry = document.getElementById('card-expiry').value;
            const cardCvc = document.getElementById('card-cvc').value;

            if (!cardNumber || !cardExpiry || !cardCvc) {
                alert('Please complete the payment details.');
                return;
            }

            // Simulate Payment Processing
            const originalBtnText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Payment...';

            setTimeout(() => {
                // Payment Success
                completeBooking(true);
            }, 2000);
        });
    }

    function completeBooking(withPayment) {
        const name = document.getElementById('booking-name').value;
        const email = document.getElementById('booking-email').value;
        const date = document.getElementById('booking-date').value;
        const time = document.getElementById('booking-time').value;
        const service = document.getElementById('booking-service').value;

        let message = `Booking Confirmed!\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nService: ${service}`;

        if (withPayment) {
            message += `\n\nPayment of 48.00€ was successful.`;
        }

        message += `\n\nWe have sent a confirmation email to ${email}.`;

        alert(message);
        bookingForm.reset();
        bookingDetailsSection.classList.add('hidden');

        // Reset radio buttons
        radioParis.checked = false;
        radioInternational.checked = false;

        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-check"></i> Confirm Booking';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ============================================
    // AUTO-FILL TEST CARD (for demo purposes)
    // ============================================
    const testCardButton = document.getElementById('use-test-card');
    if (testCardButton) {
        testCardButton.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('card-number').value = '4242 4242 4242 4242';
            document.getElementById('card-expiry').value = '12/25';
            document.getElementById('card-cvc').value = '123';
            document.getElementById('card-holder').value = 'Test User';
        });
    }

});
