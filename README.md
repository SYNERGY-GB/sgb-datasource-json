sgb-datasource-json (Local & Remote JSON Data source)
=====================================================

Usage
-----

1. Import the data source with bower

        bower install --save git@github.com:SYNERGY-GB/sgb-datasource.json#master
        
2. On your screens.js file, add the data source to the screen of your choice.

        screens = {
            login: {
                type: 'sgb-screen-login',
                dataSource: {
                    type: 'sgb-datasource-json',                    
                    params: {
                        path: 'data/products.json',
                    }
                }
            }
        }

Parameters
----------

- _path_ (String): Local or remote path of the JSON file to read data from. This can be a relative/absolute path for a 
local json file, or a full url for a remote json data file.