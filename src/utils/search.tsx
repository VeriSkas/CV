import { UsedInTableObjectsType } from '../types/interfaces/interfaces';
import { SearchValue } from '../types/interfaces/propsInterfaces';

export const search = (
  items: UsedInTableObjectsType[],
  searchValue: SearchValue
): UsedInTableObjectsType[] => {
  return items
    .filter((item: UsedInTableObjectsType) => {
      return makeSearchStringFromSearchKeys(searchValue.searchKey, item)
        .toLowerCase()
        .includes(searchValue.value.toLowerCase())
    })
};

const makeSearchStringFromSearchKeys = (
  searchKeys: string[],
  item: UsedInTableObjectsType
): string => {
  return searchKeys
    .map((key: string) => item[key as keyof UsedInTableObjectsType])
    .join(' ')
}
