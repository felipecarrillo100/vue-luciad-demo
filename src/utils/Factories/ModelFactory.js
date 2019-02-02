import WMSTileSetModel from 'luciad/model/tileset/WMSTileSetModel'
import FusionTileSetModel from 'luciad/model/tileset/FusionTileSetModel'
import ReferenceProvider from 'luciad/reference/ReferenceProvider'
import ShapeFactory from 'luciad/shape/ShapeFactory'

import UrlStore from 'luciad/model/store/UrlStore'
import FeatureModel from 'luciad/model/feature/FeatureModel'

class ModelFactory {
  createWMSModel (options) {
    if (typeof options === 'undefined') { // If options == undefined use default WMS layer
      options = {
        getMapRoot: 'https://sampleservices.luciad.com/wms',
        version: '1.3.0',
        reference: ReferenceProvider.getReference('CRS:84'),
        layers: ['4ceea49c-3e7c-4e2d-973d-c608fb2fb07e'],
        transparent: false
      }
    }
    let wmsModel = new WMSTileSetModel(options)
    return wmsModel
  }
  createLTSModel (options) {
    let tileSetReference = ReferenceProvider.getReference('EPSG:4326')

    if (typeof options === 'undefined') { // If options == undefined use default LTS layer
      options = {
        url: 'https://sampleservices.luciad.com/lts',
        coverageId: 'e8f28a35-0e8c-4210-b2e8-e5d4333824ec',
        reference: tileSetReference,
        bounds: ShapeFactory.createBounds(tileSetReference, [-180, 360, -90, 180]),
        levelCount: 24,
        level0Columns: 4,
        level0Rows: 2,
        tileWidth: 32,
        tileHeight: 32,
        dataType: FusionTileSetModel.DataType.ELEVATION,
        samplingMode: FusionTileSetModel.SamplingMode.POINT
      }
    }
    let elevationModel = new FusionTileSetModel(options)
    return elevationModel
  }
  createGeoJSONModel (options) {
    let urlStore = new UrlStore({
      target: options.url
    })
    let model = new FeatureModel(urlStore)
    return model
  }
}

export default new ModelFactory()
