---
title: Pipedown for CLI Apps
blurb: Pipedown is a great way to build CLI apps.
tags: 
 - usecases
---

# Pipedown for CLI Apps

Many software folk spend their day looking at a command line interface (CLI). The terminal is a tell tale sign you've got a dev in the wild. Get your pokeball ready.

![alt text](/img/terminalmeme.png)

## Let's build a weather CLI
Let's build a weather checking app to demonstrate building CLI apps with Pipedown. (Copilot autocompleted my title, so I went along with it!)

We'll use the [OpenWeatherMap API](https://openweathermap.org/api) to get the current weather for a given city.

> Just update this config object 👇 with your chosen city and make sure add a `.env` file at the root of your project with: `OPEN_WEATHER_API_KEY=xxxxx`.
```json
{
    "city": "Kuala Lumpur",
    "baseUrl": "http://api.openweathermap.org/",
    "API KEY": "Check Deno.env for OPEN_WEATHER_API_KEY"
}
```

We need to use two API endpoints to get the weather data:
- [City Coordinates](https://openweathermap.org/current#name)
- [Current Weather](https://openweathermap.org/current)

## City Coordinates API URL
The Open Weather Map [provides an API](https://openweathermap.org/current#name) that will return `lat` and `lon` for any city name.
- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

We need this info to make subsequent calls to the weather API.
```ts
input.geoUrl = new URL("/geo/1.0/direct", opts.config.baseUrl);
input.geoUrl.searchParams.set("q", $p.get(opts, "/config/city"));
input.geoUrl.searchParams.set("limit", "1");
input.geoUrl.searchParams.set("appid", Deno.env.get("OPEN_WEATHER_API_KEY"));
```

## fetchCoordinatesFromCache
The API has a free limit of 1000 calls a day. I didn't imagine hitting that while testing, but Deno's local storage is just too convenient NOT to use, and makes future invocations faster.
```ts
const cached = localStorage.getItem(input.geoUrl.toString())
input.geoResponse = cached && JSON.parse(cached);
```

## fetchCoordinates
Only if it's **not** in localStorage.
- not: /geoResponse
    ```ts
    input.geoResponse = await (await fetch(input.geoUrl)).json();
    localStorage.setItem(input.geoUrl.toString(), JSON.stringify(input.geoResponse));
    ```

## Current Weather API URL
- https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```ts
input.currentWeatherUrl = new URL("/data/2.5/weather", opts.config.baseUrl);
input.currentWeatherUrl.searchParams.set("appid", Deno.env.get("OPEN_WEATHER_API_KEY"));
input.currentWeatherUrl.searchParams.set("lat", $p.get(input, '/geoResponse/0/lat'));
input.currentWeatherUrl.searchParams.set("lon", $p.get(input, '/geoResponse/0/lon'));
input.currentWeatherUrl.searchParams.set("units", "metric");
```

## fetchTodaysWeatherFromCache
We will tag the cache key with today's date and hour. So we'll only fetch the weather once an hour.
```ts
const today = (new Date()).toISOString().split("T")[0];
input.currentWeatherKey = input.currentWeatherUrl.toString()+`-${today}-${(new Date()).getHours()}`;
const cached = localStorage.getItem(input.currentWeatherKey);
input.currentWeatherData = cached && JSON.parse(cached);
```

## fetchCurrentWeather
Coordinates in hand, we can fetch the current weather at that location.
- not: /currentWeatherData
    ```ts
    input.currentWeatherData = await (await fetch(input.currentWeatherUrl)).json();
    localStorage.setItem(input.currentWeatherKey, JSON.stringify(input.currentWeatherData));
    ```

> With all the raw data, we can let the user fetch it in a variety of contrived ways using Pipedown's convenient conditional checks.

## Is it raining?
Pipedown ships with a `- flags:` conditional check which let's you look for any truthy command line arguments. This is just an alias for `- check: /flags/...`. Passing the `--raining?` argument will trigger the following code block.

- flags: /raining?
    ```ts
    const maybeRain = $p.get(input, '/currentWeatherData/weather/0/rain');
    console.log(maybeRain ? "It's raining!" : "It's not raining!");
    ```

![Raining CLI output](/img/raining.png)

## Is it hot?
- flags: /hotornot
    ```ts
    const temp = $p.get(input, '/currentWeatherData/main/temp');
    const feel = $p.get(input, '/currentWeatherData/main/feels_like');
    console.log(`Dunno, supposedly it is: ${temp}°C, but it feels like ${feel}°C`);
    ```

![Hotornot CLI output](/img/hotornot.png)

## DefaultOutput
Not all cases are fleshed out as conveniently yet. A catch all/default command is still a little verbose. Over time more conveniences will be baked into Pipedown's core. Let me know what would be useful to you.

We check that there are no arguments at all before outputting the general weather description.
```ts
if(input.flags._ && input.flags._.length > 2) return;
if(Object.keys(input.flags).filter(f => (f !== "_" && f !== "input")).length > 0) return;
console.log(`The weather might be described as: ${$p.get(input, '/currentWeatherData/weather/0/description')}`);
```

![Default CLI output](/img/weatherdefault.png)

## Run it!
This entire article is an executable Pipedown script. Just [visit the repo, grab the markdown](https://github.com/aaronmyatt/pdwebsite/blob/main/examples/useCases/cli.md), and run it in a directory with: `pd run weather.md` (assuming you have [Pipedown installed](https://core.pipedown.dev) already 😉).

- `pd run weather.md --raining?` - tells you if its raining in your city
- `pd run weather.md --hotornot` - tells you the actual temperature and how it feels in your city
- `pd run weather.md` - gives a general description of the weather in your city

## Plug it!
This pipe, like all Pipedown scripts, is importable. You can use it in any other script. Just open a the Pipedown `./repl` and run:
```ts skip
import weather from "weather"
await weather.process({flags: {"raining?": true}});
```
Or, omit the input object and us it as a library:
```ts skip
const output = await weather.process();
console.log(output.currentWeatherData);
```

## Try it!
Writing CLIs is just one more use case that I think Pipedown will enable developers and stakeholders to collaborate on.

Combine with a markdown based Personal Knowledge Management system and you have a powerful, personlisable tool for fleshing out your knowledge with executable examples. Or build rapid prototypes that your stakeholders can read, review and interact with.

I hope you find Pipedown as delightful as I do. If you have any ideas on how to make it better, please reach out!