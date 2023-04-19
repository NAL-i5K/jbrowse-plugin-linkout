![Integration](https://github.com/Chi-HsienChang/jbrowse-plugin-linkout/workflows/Integration/badge.svg?branch=main)

# jbrowse-plugin-linkout

> The plugin that automatically adds link outs to the national center for biotechnology information
(NCBI) feature page if a feature has NCBI ids on JBrowse.

## Usage

### Using in JBrowse 2 Web

1. Add to the "plugins" of your JBrowse Web config:

```json
{
  "plugins": [
    {
      "name": "Linkout",
      "url": "https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js"
    }
  ]
}
```

2. Add to the "formatDetails" in "tracks" of your JBrowse Web config:

```json
"tracks": [
    {
      "formatDetails": {
        "feature": "jexl: {dbxref:linkout({type_name_1: linkout_url_1}, feature)}",
        "subfeatures": "jexl: {dbxref:linkout({type_name_2: linkout_url_2, type_name_3: linkout_url_3}, feature)}"
      }
    }
  ]
```

#### Using in JBrowse 2 Desktop

1. Click "TOOLS" &rarr; "Plugin store":

![](img/plugin_store_1.png =10px)

2. Click "ADD CUSTOM PLUGIN":

![](img/plugin_store_2.png)

3. Type "Plugin name" & "Plugin URL":

![](img/plugin_store_3.png)

```python
Linkout
```
```python
https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js
```
After that, you can see the Linkout in "Installed plugins"

![](img/plugin_store_4.png)

4. Click "Settingd" &rarr; go to "formatDetails" region:

![](img/plugin_store_5.png)

![](img/plugin_store_6.png)

After that, the circle will change to an "X" after clicking it.

![](img/plugin_store_7.png)

5. Type "Plugin name" & "Plugin URL":

![](img/plugin_store_8.png)



![](img/plugin_store_9.png)

```python
{dbxref:linkout({type_name_1: linkout_url_1}, feature)}
```

```python
{dbxref:linkout({type_name_2: linkout_url_2, type_name_3: linkout_url_3}, feature)}
```

![](img/plugin_store_10.png)

