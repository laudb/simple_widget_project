import ipywidgets as widgets
from traitlets import Unicode
from ipywidgets import Layout, Button, Box


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
    value = Unicode('List Some Data').tag(sync=True)
