// Q5: Movie Ticket Booking — Objects + RegExp
"use strict";

const bookingRules = {
  bookingName: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
  bookingEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const nameField = document.getElementById("bookingName");
  const emailField = document.getElementById("bookingEmail");
  const seatsField = document.getElementById("bookingSeats");
  const seats = Number(seatsField.value);
  const errors = {
    bookingName: bookingRules.bookingName.test(nameField.value.trim()) ? "" : "Name must contain alphabets only.",
    bookingEmail: bookingRules.bookingEmail.test(emailField.value.trim()) ? "" : "Enter a valid email address.",
    bookingSeats: Number.isInteger(seats) && seats >= 1 && seats <= 10 ? "" : "Choose a whole number of seats from 1 to 10."
  };

  Object.entries(errors).forEach(([id, message]) => {
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    field.classList.toggle("invalid", Boolean(message));
    field.classList.toggle("valid", !message);
    error.textContent = message || "Looks good.";
    error.className = message ? "error" : "success";
  });

  const output = document.getElementById("ticketOutput");
  if (Object.values(errors).some(Boolean)) {
    output.textContent = "Please correct the fields above before booking.";
    return;
  }

  const booking = { name: nameField.value.trim(), email: emailField.value.trim(), seats };
  output.textContent = `BOOKING CONFIRMED\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}\nKeep this information for your booking.`;
  console.log("Booking object:", booking);
});
