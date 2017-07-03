import React from 'react'
import SidebarRight from './SidebarRight'
import { connect } from 'react-redux'
import { toggleLayerInformation, slideLayerUp, slideLayerDown, dropLayer, toggleLayer } from '../../actions/actions.js'

const selectedLayers = (layers) => {
    if (!Array.isArray(layers)) {
        return []
    }
    return layers.filter(layer => layer.selected)
}

const mapStateToProps = (state, ownProps) => {
    return {
        layers: selectedLayers(state.layers),
        orderByLayerOrder: ownProps.orderByLayerOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLayerClick: (item) => {
            dispatch(toggleLayerInformation(item))
        },
        onLayerUp: (item) => {
            dispatch(slideLayerUp(item))
        },
        onLayerDown: (item) => {
            dispatch(slideLayerDown(item))
        },
        onLayerDrop: (dragged, target) => {
            dispatch(dropLayer(dragged, target))
        },
        onLayerRemove: (item) => {
            dispatch(toggleLayer(item))
        }
    }
}

const SidebarRightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarRight)

export default SidebarRightContainer
