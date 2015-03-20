var esriExtent = require('..')
var example = require('./geojson-spec-example.json')
var exampleMulti = require('./geojson-multi-spec-example.json')
var portlandParksLines = require('./portland-parks-lines.json')
var portlandParksPolygons = require('./portland-parks-polygons.json')
var test = require('tape')
var expected = {
  xmin: 100,
  ymin: 0,
  xmax: 105,
  ymax: 1,
  spatialReference: {
    wkid: 4326,
    latestWkid: 4326
  }
}
var expectedMulti = {
  xmin: 98,
  ymin: 0,
  xmax: 107,
  ymax: 2,
  spatialReference: {
    wkid: 4326,
    latestWkid: 4326
  }
}
var expectedParkLines = {
  xmin: -122.87585280244608,
  ymin: 45.39555387844955,
  xmax: -122.37527608962372,
  ymax: 45.65042567778668,
  spatialReference: {
    wkid: 4326,
    latestWkid: 4326
  }
}
var expectedParkPolygons = {
  xmin: -122.82747609596763,
  ymin: 45.43165893393241,
  xmax: -122.37509388958975,
  ymax: 45.650689022921206,
  spatialReference: {
    wkid: 4326,
    latestWkid: 4326
  }
}

test('basic geojson spec example', function (t) {
  esriExtent(example, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expected)
    t.end()
  })
})

test('basic geojson multi spec example', function (t) {
  esriExtent(exampleMulti, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expectedMulti)
    t.end()
  })
})

test('complex multiline string feature collection', function (t) {
  esriExtent(portlandParksLines, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expectedParkLines)
    t.end()
  })
})

test('complex multipolygon feature collection', function (t) {
  esriExtent(portlandParksPolygons, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expectedParkPolygons)
    t.end()
  })
})
