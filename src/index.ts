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
  name = "Linkout"
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

    pluginManager.jexl.addFunction('linkout', (type: string[], url: string[], feature: any)=> { 
      if (!feature.dbxref) {
        return ''
      }  
      const dbxrefs = Array.isArray(feature.dbxref)
        ? feature.dbxref
        : [feature.dbxref]

      return dbxrefs.map((dbxref: any) => {
      let i = 0
      while( i < type.length ){
        let j = 0 
        while( j < type.length ){
          if (dbxref.startsWith(type[j])) {
            const ref = dbxref.replace(type[j], '')
            return `<a href=${url[j]}${ref}>${dbxref}</a>` 
          }
          j = j + 1
        }
        i = i + 1
      return dbxref
      }
      })
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