# esri-extent

> Get the Esri-formatted extent of a GeoJSON feature collection.

[![](https://img.shields.io/npm/v/esri-extent.svg?style=flat-square)](https://www.npmjs.com/package/esri-extent)
[![](https://img.shields.io/travis/koopjs/esri-extent.svg?style=flat-square)](https://travis-ci.org/koopjs/esri-extent)

## Install

```
npm install esri-extent
```

## Usage

```js
var esriExtent = require('esri-extent')
var example = require('./test/geojson-spec-example.json')

var extent = esriExtent(example)

// OR

esriExtent(example, function (err, extent) {
  if (err) throw err

  console.log(extent)
  // {
  //   xmin: 100,
  //   ymin: 0,
  //   xmax: 105,
  //   ymax: 1,
  //   spatialReference: {
  //     wkid: 4326,
  //     latestWkid: 4326
  //   }
  // }
})
```

## License

[ISC](LICENSE)
