# Weather API Dashboard

## Overview
This project demonstrates how to build a **RESTful API Weather Application** using:
- **OpenWeatherMap API** for weather data (GET requests).
- **JSONPlaceholder API** for simulating saved locations (POST, PUT, DELETE requests).

The application provides a tabbed interface where users can:
- Look up current weather by city.
- Save locations with notes.
- Edit or delete saved locations.
- View request/response information.


##  Project Setup

1. **[Create Project Structure](ca://s?q=Create_project_structure_for_weather_API_assignment)**
   - `index.html` → User interface.
   - `script.js` → JavaScript logic.

2. **[API Keys](ca://s?q=Setup_OpenWeatherMap_API_key)**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.
   - Replace `WEATHER_API_KEY` in `script.js` with your key.

3. **[Run Application](ca://s?q=Run_Weather_API_assignment_in_browser)**
   - Open `index.html` in a browser.
   - No server setup required.


## Features

### 1. **[GET Weather](ca://s?q=Implement_GET_weather_request_in_weather_API_assignment)**
- Enter a city name and fetch current weather.
- Displays temperature, humidity, wind speed, and description.
- Includes a quick-save button to auto-fill the POST form.

### 2. **[POST Location](ca://s?q=Implement_POST_location_request_in_weather_API_assignment)**
- Save a location with name, city, country, and notes.
- Data is sent to JSONPlaceholder via POST request.
- Location is added to local `savedLocations` array.

### 3. **[PUT Update](ca://s?q=Implement_PUT_update_function_in_weather_API_assignment)**
- Edit saved locations using a modal form.
- Updates are sent via PUT request.
- Local array is updated and re-rendered.

### 4. **[DELETE Location](ca://s?q=Implement_DELETE_location_function_in_weather_API_assignment)**
- Delete saved locations with confirmation.
- Sends DELETE request to JSONPlaceholder.
- Removes location from local array.

### 5. **[Response Info](ca://s?q=Implement_response_info_display_in_weather_API_assignment)**
- Displays method, URL, status, timestamp, and response data for each request.

# Features Checklist
- GET Weather → OpenWeatherMap API

- POST Location → JSONPlaceholder API

- PUT Update → Edit saved location

- DELETE Location → Remove saved location

- Tabbed UI → Easy navigation

- Response Info → Shows request details

# Resources
- OpenWeatherMap API

- JSONPlaceholder API

- Fetch API Guide