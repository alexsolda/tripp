import { IViewOptions } from 'context/viewOptions'

export const StorageEnum = {
  VIEW_OPTION: '@Tripp:view_option'
}

type IViewOptionsInfos = {
  label: string
  value: IViewOptions
}

export const ViewOptionsData: IViewOptionsInfos[] = [
  {
    label: 'Mapa',
    value: 'map'
  },
  {
    label: 'Lista (em breve)',
    value: 'list'
  }
]
