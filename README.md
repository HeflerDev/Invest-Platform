<div id="top"></div>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
![Build](https://img.shields.io/github/workflow/status/heflerdev/invest-platform/Lint?style=for-the-badge)

<br />
<div align="center">
  <a href="https://github.com/heflerdev/Invest-Platform">
    <img src="src/assets/images/eqi_logo.png" alt="Logo" width="80" style="border-radius: 10px;" height="80">
  </a>

  <h3 align="center">EQI Investimentos - Frontend Challenge</h3>

  <p align="center">
     A small webapp made in React that fetch mock data and displays it to the user.
    <br />
    <a href="https://heflerdev_eqi.netlify.app/"><strong>View Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/HeflerDev/Invest-Platform/issues">Report Bug</a>
    ·
    <a href="https://github.com/HeflerDev/Invest-Platform/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

<img src="src/assets/images/screenshot.png" alt="display-img" />

This project is a step to work for "EQI Stocks", and it consists in a webapp that communicates with a local mock json DB and displays it's data.
Changing the input has little to no difference, since it only takes two relevant parameters to make it's query.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* HTML
* SASS/CSS
* Bootstrap
* JavaScript
* React
* Redux
* [Webpack](https://webpack.js.org/)
* Eslint
* Victory

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

The installing process is fairly simple, since doesn't need any API key or aditional configuration (other than have NPM).

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  
[Node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:HeflerDev/Invest-Platform.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Clone [this](https://github.com/eqi-investimentos/desafio-fake-api) repo.

4. Execute `npm install` and `npx json-server db.json`. The API will be located at `http://localhost:3000`.

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

The project uses the Webpack bundler to produce a build, so is recommended to **ONLY** code in the *src/* folder.

To start the Dev server run `npm start`, it will start watching the application and display on `http://localhost:8080`.<br/>
To build the app run ´npm run build´. No need to change the mode to production, webpack will handle it.
 
## Roadmap

- [x] Should accept inputs.
- [x] Should follow the wireframe.
- [x] Should Fetch data from the API.
- [x] Should have a README.
- [x] Optional
  - [x] Use Bundler
  - [ ] Testing
  - [x] Make Use of Bundler
  - [x] Responsivity
  - [ ] Docker
  - [x] SEO
  - [x] Suggestions
    - [x] Redux - Better State control
    - [x] Victory - Easy graphic build
    - [x] React Bootstrap - Better control of responsivity

See the [open issues](https://github.com/HeflerDev/invest-platform/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make is **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
Don't forget to give the project a star!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Hefler - [@heflerdev](https://www.instagram.com/heflerdev/) - heflerdev@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

[issues-shield]: https://img.shields.io/github/issues/heflerdev/invest-platform.svg?style=for-the-badge
[issues-url]: https://github.com/HeflerDev/invest-platform/issues
[license-shield]: https://img.shields.io/github/license/heflerdev/invest-platform.svg?style=for-the-badge
[license-url]: https://github.com/heflerdev/invest-platform/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-default.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://linkedin.com/in/heflerdev
[product-screenshot]: images/screenshot.png
