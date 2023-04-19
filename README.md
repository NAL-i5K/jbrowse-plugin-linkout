![Integration](https://github.com/Chi-HsienChang/jbrowse-plugin-linkout/workflows/Integration/badge.svg?branch=main)

# jbrowse-plugin-linkout

> The plugin that automatically adds link outs to the national center for biotechnology information
(NCBI) feature page if a feature has NCBI ids on JBrowse.

## Usage



#### Using in JBrowse 2 Desktop

**1. Click "TOOLS" &rarr; "Plugin store":**

![](https://i.imgur.com/2r4jIOP.png =400x)

**2. Click "ADD CUSTOM PLUGIN":**

![](https://i.imgur.com/RcXrmKX.png =400x)

**3. Type "Plugin name" & "Plugin URL":**

![](https://i.imgur.com/fgmW4mf.png =400x)

```python
Linkout
```
```python
https://unpkg.com/jbrowse-plugin-linkout/dist/jbrowse-plugin-linkout.umd.production.min.js
```
**After that, you can see the Linkout in "Installed plugins"**

![](https://i.imgur.com/ILw6Jcn.png =400x)

**4. Click "Settingd" &rarr; go to "formatDetails" region:**

![](https://i.imgur.com/78fK0FG.png =400x)

![](https://i.imgur.com/aNwfZ23.png =400x)

**After that, the circle will change to an "X" after clicking it.**

![](https://i.imgur.com/xwBsZY3.png =400x)

**5. Type "Plugin name" & "Plugin URL":**

![](https://i.imgur.com/M9Aim8C.png =400x)


![](https://i.imgur.com/3JGOBKC.png =400x)


```json
{dbxref:linkout({type_name_1: linkout_url_1}, feature)}
```

```json
{dbxref:linkout({type_name_2: linkout_url_2, type_name_3: linkout_url_3}, feature)}
```


> The plugin that automatically adds link outs to the national center for biotechnology information
(NCBI) feature page if a feature has NCBI ids on JBrowse.

![](https://i.imgur.com/E63BNeG.png)



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
