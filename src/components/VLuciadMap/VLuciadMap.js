import './VLuciadMap.css'
import WebGLMap from 'luciad/view/WebGLMap'
import ReferenceProvider from 'luciad/reference/ReferenceProvider'

import ModelFactory from '../../utils/Factories/ModelFactory'
import LayerFactory from '../../utils/Factories/LayerFactory'

export default {
  name: 'v-luciadmap',
  props: {}, // Implement your watches here
  data () {
    return {
      map: null // This will hold our luciadria map created with new WebGLMap
    }
  },
  watch: {}, // Implement your watches here
  methods: {
    createMap () {
      const REF_GEOCENTRIC = ReferenceProvider.getReference('EPSG:4978')
      const domElement = this.$refs.luciadmapref
      this.map = new WebGLMap(domElement, {reference: REF_GEOCENTRIC})
    },
    createMapLayers () {
      // Do something if needed
      const wmsModel = ModelFactory.createWMSModel(undefined)
      const elevationModel = ModelFactory.createLTSModel(undefined)
      const vectorModel = ModelFactory.createGeoJSONModel({url: './static/data/countries.json'})
      // Create Layers
      const WMSlayer = LayerFactory.createWMSLayer(wmsModel, undefined)
      const swissMap = LayerFactory.createFeatureLayer(vectorModel, undefined)
      const elevationLayer = LayerFactory.createLTSLayer(elevationModel, {label: 'World Elevation'})
      // Insert Layers
      this.map.layerTree.addChild(WMSlayer, 'bottom')
      this.map.layerTree.addChild(elevationLayer)
      this.map.layerTree.addChild(swissMap)
      // Add Grid
      const gridLayer = LayerFactory.createGrid()
      this.map.layerTree.addChild(gridLayer, 'top')
    },
    onError (error) {
      this.$emit('error', error)
    }
  },
  render (h) {
    return h('div', {
      class: 'VLuciadMap',
      ref: 'luciadmapref'
    })
  },
  mounted () {
    this.createMap()
    this.createMapLayers()
  },
  beforeDestroy () {
    this.map.destroy()
    this.map = null
  }
}
