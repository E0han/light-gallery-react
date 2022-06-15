<h1 align="center">Welcome to light-gallery-react 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/light-gallery-react" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/light-gallery-react.svg">
  </a>
  <a href="https://github.com/E0han/light-gallery-react#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/E0han/light-gallery-react/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/E0han/light-gallery-react/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/E0han/light-gallery-react" />
  </a>
</p>

> A light weighted gallery component used for React JS, Next JS frameworks, which is designed to showcase a set of images in a responsive way based on react-bootstrap

## Install

```sh
npm install light-gallery-react@latest --legacy-peer-deps
```

## Usage

```js
//...
<LightGallery
    lg_col={4},
    md_col={6},
    xs_col={6},
    div_padding="5%",
    img_padding="5%",
    images=[
      "path/to/img/1.png",
      "path/to/img/2.png",
      "path/to/img/3.png",
      "path/to/img/4.png"
      //...
    ]
></LightGallery>
//...
```

>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.

lg_col: Integer out of 12 columns when the max container width ≥992px

md_col: Integer out of 12 columns when the max container width ≥768px

xs_col: Integer out of 12 columns when the max container width ≥576px

Please check bootstrap documentation regarding to [Grid System](https://getbootstrap.com/docs/4.0/layout/grid/) for detailed information

```sh
This module is built based on react and react-bootstrap, please ensure you have both of these modules installed
```


## Author

👤 **ETHYANG TECH**

* Website: tech.ethyang.com
* Github: [@E0han](https://github.com/E0han)
* LinkedIn: [@ethyang](https://linkedin.com/in/ethyang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/E0han/light-gallery-react/issues). You can also take a look at the [contributing guide](https://github.com/E0han/light-gallery-react/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [ETHYANG TECH](https://github.com/E0han).<br />
This project is [ISC](https://github.com/E0han/light-gallery-react/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
