import ipywidgets as widgets
import pandas as pd
from traitlets import Unicode, default, List
from ipywidgets import Layout, Button, Box, VBox
from IPython.display import display


@widgets.register
class HelloWorld(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('HelloView').tag(sync=True)
    _model_name = Unicode('HelloModel').tag(sync=True)
    _view_module = Unicode('simple_widget').tag(sync=True)
    _model_module = Unicode('simple_widget').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)



class ListData(widgets.DOMWidget):
    """List Data in a column"""
    _view_name = Unicode('ListDataView').tag(sync=True)
    _model_name = Unicode('ListDataModel').tag(sync=True)
    _view_module = Unicode('simple_widget').tag(sync=True)
    _model_module = Unicode('simple_widget').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    def show_dropdown(self):
        w = widgets.Dropdown(options = { 'One':1, 'Two':2 },
        value = 2,
        description = 'Number:')
        display(w)

    def show_box(self):
        sample_words = ['one', 'two', 'three', 'four']
        items = [Button(description=w) for w in sample_words]
        list_box = VBox([items[0], items[1], items[2]])
        display(list_box)

    def display_heading(self, heading):
        w = widgets.HTML(
        value="<h3> "+heading+" </h3>"
        )
        display(w)

    def create_table(self, input_value ):
        w = widgets.HTML(
          value="<h1> "+input_value+" </h1>",
        )
        display(w)

    def model_parameters(self, parameters):
        """
            takes model parameters and displays them
        """

    def tabulated_results(self, input_a, input_b):
        """
            should display two respective columns based on two different inputs.
        """
        a=range(input_a)
        b=range(input_b)
        df = pd.DataFrame()
        df['Rad. temp']= a # change to read values for Rad. temp column
        df['Ws']= b # change to read values for Ws
        df.index = range(1,len(df)+1)
        df.index.names = ['Shell']
        return df

    def visualized_results(self, input):
        """
            takes the model paramters and returns output in a graph form.

            takes input passed from the front end

            plots that into a graph
        """

class PlotData(widgets.DOMWidget):
    """A widget for plotting a graph"""
    _view_name = Unicode('PlotView').tag(sync=True)
    _model_name = Unicode('PlotModel').tag(sync=True)
    _view_module = Unicode('simple_widget').tag(sync=True)
    _model_module = Unicode('simple_widget').tag(sync=True)
    _model_data = List([]).tag(sync=True)

    @default('layout')
    def _default_layout(self):
        return widgets.Layout(height='400px', align_self='stretch')

    def set_data(self, js_data):
        self._model_data = js_data
