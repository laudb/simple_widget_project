var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

import * as d3 from 'd3';

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'simple_widget',
        _view_module : 'simple_widget',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});

var ListDataModel = widgets.DOMWidgetModel.extend({
  defaults:_.extend(widgets.DOMWidgetModel.prototype.defaults(), {
    _model_name: 'ListDataModel',
    _view_name: 'ListDataView',
    _model_module: 'simple_widget',
    _view_module: 'simple_widget',
    _model_module_version: '0.1.0',
    _view_module_version: '0.1.0',
    value: 'List this data'
  })
});

var ListDataView = widgets.DOMWidgetView.extend({
    render: function () {
      this.value_changed();
      this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function () {
      this.el.textContent = this.model.get('value')
    }
});


var PlotGraphModel = widgets.DOMWidgetModel.extend({
  defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
    _model_name: 'PlotGraphModel',
    _view_name: 'PlotGraphView',
    _model_module : 'simple_widget',
    _view_module : 'simple_widget',
    _model_module_version : '0.1.0',
    _view_module_version: '0.1.0'
  })
});


var PlotGraphView = widgets.DOMWidgetView.extend({
  render: function() {
    this.showData();
  },
  showData: function () {
    this.model.get("_model_data");
  }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView,
    ListDataModel: ListDataModel,
    ListDataView: ListDataView,
    PlotGraphModel: PlotGraphModel,
    PlotGraphView: PlotGraphView
};
