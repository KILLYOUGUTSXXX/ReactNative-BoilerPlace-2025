/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { registerModels } from './main.provider'
import React, { JSX, PropsWithChildren, useMemo } from 'react'
import { IModelDefinitions } from './type'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'

let globalPath: RouteProp<ParamListBase> | null = null
let indexModelSubscriptions: Array<string> = []

export function useLynxModel<T extends { [P in string]: any }>(
  Components: (props: PropsWithChildren) => JSX.Element,
  models: () => Array<
    IModelDefinitions<T, any> & { default: IModelDefinitions<T, any> }
  >
): React.JSX.Element {
  const route = useRoute()
  let assignedModels: Array<string> = []

  useMemo(() => {
    if (globalPath?.path !== route.path) {
      globalPath = route
      indexModelSubscriptions = []
    }

    registerModels(models, (model, subscriptions) => {
      if (
        typeof subscriptions === 'function' &&
        indexModelSubscriptions.indexOf(model) === -1
      ) {
        indexModelSubscriptions.push(model)
        assignedModels.push(model)
        return subscriptions({ route })
      }
    })
  }, [route])

  return React.cloneElement(<Components />, {
    route,
    assignedModels
  })
}
