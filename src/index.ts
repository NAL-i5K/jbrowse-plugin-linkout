import Plugin from '@jbrowse/core/Plugin'
import PluginManager from '@jbrowse/core/PluginManager'
import ViewType from '@jbrowse/core/pluggableElementTypes/ViewType'
import { AbstractSessionModel, isAbstractMenuManager } from '@jbrowse/core/util'
import { version } from '../package.json'
import {
  ReactComponent as HelloViewReactComponent,
  stateModel as helloViewStateModel,
} from './HelloView'
import { getSession } from '@jbrowse/core/util'
import { string } from 'mobx-state-tree/dist/internal'
import console from 'console'


export default class TestPlugin extends Plugin {
  name = "Test"
  version = version

  install(pluginManager: PluginManager) {
    pluginManager.addViewType(() => {
      return new ViewType({
        name: 'HelloView',
        stateModel: helloViewStateModel,
        ReactComponent: HelloViewReactComponent,
      })
    })
  }


  
  
  configure(pluginManager: PluginManager) {

    pluginManager.jexl.addFunction('linkout_GeneID', (feature: any) => {
      let dbxref = JSON.stringify(feature.dbxref);
      let gene = dbxref.split(':')[1].split('"')[0];
      return '<a href=https://www.ncbi.nlm.nih.gov/gene/'+gene+'>'+feature.dbxref+'</a>'
    })

    pluginManager.jexl.addFunction('linkout_Genbank', (feature: any) => {
      let dbxref = feature.dbxref
        ?.find((f: any) => f.startsWith('Genbank:'))
        ?.replace('Genbank:', '')
      if (!dbxref) {
        return feature.name 
      }
      return `<a href=https://www.ncbi.nlm.nih.gov/nuccore/?term=${dbxref}>Genbank:${feature.name||dbxref}</a>`
    })

    if (isAbstractMenuManager(pluginManager.rootModel)) {
      pluginManager.rootModel.appendToMenu('Add', {
        label: 'Hello View',
        onClick: (session: AbstractSessionModel) => {
          session.addView('HelloView', {})
        },
      })
    }
  }

}