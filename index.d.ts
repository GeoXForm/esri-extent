import { Feature, FeatureCollection, GeometryObject } from 'geojson'

declare namespace esriExtent {
  type Extent = {
    xmin: number
    ymin: number
    xmax: number
    ymax: number
    spatialReference: {
      wkid: number
      latestWkid: number
    }
  }
}

type Callback = (error: null, extent: esriExtent.Extent) => any
type FlexibleFeature = FeatureCollection<GeometryObject> | Feature<GeometryObject>[]

declare function esriExtent(json: FlexibleFeature): esriExtent.Extent
declare function esriExtent(json: FlexibleFeature, callback: Callback): void

export = esriExtent
