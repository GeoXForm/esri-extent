var bbox2extent = require('bbox2extent')

module.exports = function (collection, callback) {
  // fallback if features passed directly
  var features = collection.features ? collection.features : collection
  var bbox = [Infinity, Infinity, -Infinity, -Infinity]

  features.forEach(function (f, i) {
    if (!f.geometry) return

    var isPoint = f.geometry.type === 'Point'
    var isMultiPoint = f.geometry.type === 'MultiPoint'
    var isLine = f.geometry.type === 'LineString'
    var isMultiLine = f.geometry.type === 'MultiLineString'
    var isPolygon = f.geometry.type === 'Polygon'
    var isMultiPolygon = f.geometry.type === 'MultiPolygon'
    var coords = f.geometry.coordinates

    if (isPoint || isMultiPoint) {
      if (isPoint) coords = [[[coords]]]
      else coords = [[coords]]
      loop(bbox, coords)
    }

    if (isLine || isMultiLine) {
      if (isLine) coords = [[coords]]
      else coords = [coords]
      loop(bbox, coords)
    }

    if (isPolygon || isMultiPolygon) {
      if (isPolygon) coords = [coords]
      loop(bbox, coords)
    }
  })

  var extent = bbox2extent(bbox)

  if (callback) callback(null, extent)
  else return extent
}

function loop (bbox, coords) {
  coords.forEach(function (r) {
    r.forEach(function (inner) {
      inner.forEach(function (c) {
        extend(bbox, c)
      })
    })
  })
}

function extend (bbox, coord) {
  bbox[0] = Math.min(bbox[0], coord[0])
  bbox[1] = Math.min(bbox[1], coord[1])
  bbox[2] = Math.max(bbox[2], coord[0])
  bbox[3] = Math.max(bbox[3], coord[1])
}
