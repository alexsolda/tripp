import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'
import { StorageEnum } from 'utils/enumInfos'

export type IViewOptions = 'map' | 'list'

type IViewOptionsProviderProps = {
  children: ReactNode
}
type ViewOptionsContextData = {
  viewType: IViewOptions | string
  handleViewType: (type: IViewOptions) => void
}

const ViewOptionsContext = createContext<ViewOptionsContextData>(
  {} as ViewOptionsContextData
)

export const ViewOptionsProvider = ({
  children
}: IViewOptionsProviderProps): ReactElement => {
  const [viewType, setViewType] = useState<IViewOptions | string>(
    (): IViewOptions | string => {
      if (typeof window !== 'undefined') {
        const viewFromLocalStorage: string | null = localStorage.getItem(
          StorageEnum.VIEW_OPTION
        )
        if (viewFromLocalStorage) {
          return viewFromLocalStorage
        }
      }
      return 'map'
    }
  )

  const handleViewType = (type: IViewOptions) => {
    setViewType(() => type)
    localStorage.setItem(StorageEnum.VIEW_OPTION, type)

    return
  }

  return (
    <ViewOptionsContext.Provider
      value={{
        viewType,
        handleViewType
      }}
    >
      {children}
    </ViewOptionsContext.Provider>
  )
}

export function useViewOptions(): ViewOptionsContextData {
  const context = useContext(ViewOptionsContext)

  if (!context) {
    throw new Error('useViewOptions is not a function')
  }

  return context
}

export default ViewOptionsContext
