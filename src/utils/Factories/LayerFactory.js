import RasterTileSetLayer from 'luciad/view/tileset/RasterTileSetLayer'
import LayerType from 'luciad/view/LayerType'
import LayerGroup from 'luciad/view/LayerGroup'
import LonLatGrid from 'luciad/view/grid/LonLatGrid'
import GridLayer from 'luciad/view/grid/GridLayer'
import FeatureLayer from 'luciad/view/feature/FeatureLayer'

class LayerFactory {
  createWMSLayer (wmsModel, options) {
    if (typeof options === 'undefined') options = {}
    var wmsLayer = new RasterTileSetLayer(wmsModel, {
      label: options.label ? options.label : 'Earth Image',
      layerType: options.layerType ? options.layerType : LayerType.STATIC
    })
    return wmsLayer
  }
  createLTSLayer (elevationModel, options) {
    if (typeof options === 'undefined') options = {}
    var elevationLayer = new RasterTileSetLayer(elevationModel, {
      label: options.label ? options.label : 'Elevation',
      layerType: options.layerType ? options.layerType : LayerType.STATIC
    })
    return elevationLayer
  }
  createGrid () {
    let lonLatGridModel = new LonLatGrid()
    let gridLayer = new GridLayer(lonLatGridModel, {label: 'Grid', id: 'Grid'})
    return gridLayer
  }
  createNewLayerGroup (options) {
    if (typeof options === 'undefined') options = {}
    options.label = options.label ? options.label : 'New group'
    let layer = new LayerGroup(options)
    layer.collapsed = typeof options.collapsed !== 'undefined' ? options.collapsed : false
    return layer
  }
  createFeatureLayer (model, options) {
    if (typeof options === 'undefined') options = {}
    let layer = new FeatureLayer(model, {
      label: options.label ? options.label : 'Feature Layer',
      layerType: options.layerType ? options.layerType : LayerType.STATIC
    })
    return layer
  }
}

export default new LayerFactory()
