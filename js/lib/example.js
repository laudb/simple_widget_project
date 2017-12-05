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
    // test graph
    var input_data = this.model.get("_model_data");
    console.log(input_data);
    // var margin = {top: 20, right: 20, bottom: 70, left: 40},
    // width = 600 - margin.left - margin.right,
    // height = 300 - margin.top - margin.bottom;

    // Parse the date / time
    // var	parseDate = d3.time.format("%Y-%m").parse;
    //
    // var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    //
    // var y = d3.scale.linear().range([height, 0]);
    //
    // var xAxis = d3.svg.axis()
    //     .scale(x)
    //     .orient("bottom")
    //     .tickFormat(d3.time.format("%Y-%m"));
    //
    // var yAxis = d3.svg.axis()
    //     .scale(y)
    //     .orient("left")
    //     .ticks(10);
    //
    // var svg = d3.select("body").append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .append("g")
    //     .attr("transform",
    //           "translate(" + margin.left + "," + margin.top + ")");

    // d3.csv( input_data, function(error, data) {
    //
    //     data.forEach(function(d) {
    //         d.date = parseDate(d.date);
    //         d.value = +d.value;
    //     });
    //
    //   x.domain(data.map(function(d) { return d.date; }));
    //   y.domain([0, d3.max(data, function(d) { return d.value; })]);
    //
    //   svg.append("g")
    //       .attr("class", "x axis")
    //       .attr("transform", "translate(0," + height + ")")
    //       .call(xAxis)
    //     .selectAll("text")
    //       .style("text-anchor", "end")
    //       .attr("dx", "-.8em")
    //       .attr("dy", "-.55em")
    //       .attr("transform", "rotate(-90)" );
    //
    //   svg.append("g")
    //       .attr("class", "y axis")
    //       .call(yAxis)
    //     .append("text")
    //       .attr("transform", "rotate(-90)")
    //       .attr("y", 6)
    //       .attr("dy", ".71em")
    //       .style("text-anchor", "end")
    //       .text("Value ($)");
    //
    //   svg.selectAll("bar")
    //       .data(data)
    //     .enter().append("rect")
    //       .style("fill", "steelblue")
    //       .attr("x", function(d) { return x(d.date); })
    //       .attr("width", x.rangeBand())
    //       .attr("y", function(d) { return y(d.value); })
    //       .attr("height", function(d) { return height - y(d.value); });
    //
    //  });
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
