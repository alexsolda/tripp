import { ReactElement } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import { ViewOptionsData } from 'utils/enumInfos'
import { useViewOptions } from 'context/viewOptions'
import { FaListAlt, FaMapMarkedAlt } from 'react-icons/fa'

const DropdownView = (): ReactElement => {
  const { viewType, handleViewType } = useViewOptions()

  return (
    <Dropdown
      showArrow
      className="bg-black-600 text-white"
      classNames={{
        base: 'before:bg-black-600 mt-1'
      }}
    >
      <DropdownTrigger>
        <div className="text-white cursor-pointer hover:text-secondary focus:text-secondary">
          {viewType === 'map' ? (
            <FaMapMarkedAlt size={25} />
          ) : (
            <FaListAlt size={25} />
          )}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={[viewType]}
        className="group"
      >
        {ViewOptionsData.map((item) => (
          <DropdownItem
            key={item.value}
            onPress={() => handleViewType(item.value)}
            startContent={
              item.value === 'map' ? (
                <FaMapMarkedAlt size={20} />
              ) : (
                <FaListAlt size={20} />
              )
            }
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownView
