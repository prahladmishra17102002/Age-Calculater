document.addEventListener("DOMContentLoaded", function () {
  const date = document.querySelector(".datebox");
  const btn = document.querySelector(".btn");
  const result = document.querySelector(".age-result");

  btn.addEventListener("click", function () {
    const dobString = date.value;
    if (dobString === "") {
      alert("Please enter your date of birth.");
    } else {
      const dobParts = dobString.split("-"); // Split the date string by '-'
      const dob_day = parseInt(dobParts[0]); // Parse the day
      const dob_month = parseInt(dobParts[1]); // Parse the month
      const dob_year = parseInt(dobParts[2]); // Parse the year

      // Create a new Date object using the parsed year, month, and day
      const dob = new Date(dob_year, dob_month - 1, dob_day); // Month is zero-based

      const now = new Date();
      const now_year = now.getFullYear();
      const age = now_year - dob_year;
      result.textContent = `Your Age Is ${age} Years Old`;
    }
  });
});
