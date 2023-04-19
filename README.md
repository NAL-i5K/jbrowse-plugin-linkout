![Integration](https://github.com/Chi-HsienChang/jbrowse-plugin-linkout/workflows/Integration/badge.svg?branch=main)

# jbrowse-plugin-linkout

> The plugin allows users to define where URLs combined with id to links to obtain genetic information according to their needs. 
For example, the plugin can automatically add link outs to the national center for biotechnology information (NCBI) feature page if a feature has NCBI ids on JBrowse 2 desktop or web.

## Usage

### Using in JBrowse 2 Desktop

**1. Click "TOOLS" &rarr; "Plugin store":**

![](img/plugin_store_1.png)

**2. Click "ADD CUSTOM PLUGIN":**

![](img/plugin_store_2.png)

**3. Type "Plugin name" & "Plugin URL" &rarr; click "SUBMIT":**
- Plugin name
```python
Linkout
```
- Plugin URL
```python
https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js
```

![](img/plugin_store_3.png)

**After that, you can see the Linkout in "Installed plugins"**

![](img/plugin_store_4.png)

**4. Click on the icon with three dots on the right &rarr; "Setting":**

![](img/plugin_store_5.png)


**5. Go to "formatDetails" in FeatureTrack settings in the block on the right:**

![](img/plugin_store_6.png)


**6. Scroll right and you will see a circle:**

![](img/plugin_store_7.png)

**7. After clicking the cycle, the circle will change to an "X":**

![](img/plugin_store_8.png)

**8. Type the setting of the feature or subfeatures based on your needs**

The format is as follows:

- feature
```python
{dbxref:linkout({type_name_1: linkout_url_1, type_name_2: linkout_url_2}, feature)}
```
- subfeatures
```python
{dbxref:linkout({type_name_3: linkout_url_3, type_name_4: linkout_url_4}, feature)}
```

**Congratulations! You have completed it**

> The plugin that automatically adds link outs to the national center for biotechnology information
(NCBI) feature page if a feature has NCBI ids on JBrowse.


![](img/plugin_store_9.png)

![](img/plugin_store_10.png)


### Using in JBrowse 2 Web

**1. Add to the "plugins" of your JBrowse Web config:**

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

**2. Add to the "formatDetails" in "tracks" of your JBrowse Web config:**

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

