var esriExtent = require('..')
var example = require('./geojson-spec-example.json')
var exampleMulti = require('./geojson-multi-spec-example.json')
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

test('get correct extent from geojson spec example', function (t) {
  esriExtent(example, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expected)
    t.end()
  })
})

test('get correct extent from geojson multi spec example', function (t) {
  esriExtent(exampleMulti, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expectedMulti)
    t.end()
  })
})
