class WeatherAPI {
  constructor() {
      this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
      this.apiKey = "35e7a9a4d763fce8abe28e6aa74f805b"
  }

  async getWeatherInfo(cityName) {
      const response = await fetch(`${this.baseUrl}?q=${cityName}&units=metric&lang=tr&appid=${this.apiKey}`)
      const data = await response.json();
      return data;
  }
}
