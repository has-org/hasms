"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      search: event.target.search.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = `${process.env.API_HOST}/form`;

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit} className="search-box-container hidden lg:block">
      <label htmlFor="search"></label>
      {/* <input type="text" id="search" name="search" required /> */}
      <button type="submit">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: 32 }}
          className="text-gray-900"
        />
      </button>
    </form>
  );
}
