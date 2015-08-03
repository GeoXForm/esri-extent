# esri-extent change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.1] - 2015-08-03

### Added
* add large point feature collection test to assure parity with [`koop.Extent`](https://github.com/Esri/koop/blob/v1.1.1/test/models/extent-test.js)

### Changed
* moved to koopjs github org

## [1.1.0] - 2015-03-20

### Added
* add support for multipoint geojson type ([#1](https://github.com/ngoldman/esri-extent/pull/1))
* add more robust tests for complex multiline and multipolygon feature collections

### Fixed
* improve handling of polygons and multipolygons ([#1](https://github.com/ngoldman/esri-extent/pull/1) & [#2](https://github.com/ngoldman/esri-extent/pull/2))
* fix caching bug with misplaced bbox variable

## 1.0.0 - 2015-03-19
* engage

[1.1.1]: https://github.com/koopjs/esri-extent/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/koopjs/esri-extent/compare/v1.0.0...v1.1.0
