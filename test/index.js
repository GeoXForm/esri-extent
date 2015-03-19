var esriExtent = require('..')
var example = require('./geojson-spec-example.json')
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

test('get correct extent from geojson spec example', function (t) {
  esriExtent(example, function (err, extent) {
    if (err) throw err

    t.deepEqual(extent, expected)
    t.end()
  })
})
