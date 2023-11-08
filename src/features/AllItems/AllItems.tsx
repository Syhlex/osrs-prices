import React, { useState } from 'react';
import { Item } from 'context/Items/ItemsContext';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { FilterInput } from 'features/ItemTable/FilterInput';
import { Pagination } from 'features/ItemTable/Pagination';
import { ItemTable } from 'features/ItemTable/ItemTable';
import {
  sortAlphabetical,
  sortBoolean,
  sortNumerical,
} from 'utils/sorting.utils';
import styles from './AllItems.mod.scss';

export type SortDirection = 'ascending' | 'descending';

export interface ItemValues {
  name: string;
  buyLimit: number | undefined;
  members: boolean;
  buyPrice: number | undefined;
  lastBuyTime: number | undefined;
  sellPrice: number | undefined;
  lastSellTime: number | undefined;
  margin: number | undefined;
  volume: number | undefined;
  potentialProfit: number | undefined;
  marginTimesVolume: number | undefined;
}

// Consider memoizing this function?
const getItemValues = (item: Item): ItemValues => {
  const margin = item.high && item.low ? item.high - item.low : undefined;
  return {
    name: item.name,
    buyLimit: item.limit,
    members: item.members,
    buyPrice: item.high,
    lastBuyTime: item.highTime,
    sellPrice: item.low,
    lastSellTime: item.lowTime,
    margin,
    volume: item.volume,
    potentialProfit:
      item.limit && margin !== undefined ? item.limit * margin : undefined,
    marginTimesVolume:
      margin !== undefined && item.volume !== undefined
        ? margin * item.volume
        : undefined,
  };
};

export const AllItems = () => {
  useTitle('All Items');
  const { items } = useItems();
  const [filterText, setFilterText] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [{ sortedColumn, sortDirection }, setColumnSort] = useState<{
    sortedColumn: keyof ItemValues | undefined;
    sortDirection: SortDirection;
  }>({ sortedColumn: undefined, sortDirection: 'ascending' });

  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const tradedItems = items.filter((item) => {
    return item.high || item.low;
  });

  const sortedItems = sortedColumn
    ? [...tradedItems].sort((a, b) => {
        const valueA = getItemValues(a)[sortedColumn];
        const valueB = getItemValues(b)[sortedColumn];
        if (
          valueA === undefined ||
          valueA === null ||
          valueB === undefined ||
          valueB === null
        ) {
          if (valueA === valueB) {
            return 0;
          } else if (valueA) {
            return 1;
          } else {
            return -1;
          }
        }
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return sortAlphabetical(valueA, valueB);
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          return sortNumerical(valueA, valueB);
        } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
          return sortBoolean(valueA, valueB);
        } else {
          console.error('valueA', valueA, 'valueB', valueB);
          throw Error('Sorting for this column type is not handled');
        }
      })
    : items;

  const sortedItemsWithDirection =
    sortDirection === 'descending' ? sortedItems.reverse() : sortedItems;

  const itemsToRender = sortedItemsWithDirection.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToLastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const updateItemsPerPage = (value: number) => {
    setItemsPerPage(value);
    goToFirstPage();
  };

  const updateColumnSort = (columnName: keyof ItemValues) => {
    setColumnSort((prev) => {
      if (prev.sortedColumn === columnName) {
        return prev.sortDirection === 'ascending'
          ? { sortedColumn: columnName, sortDirection: 'descending' }
          : { sortedColumn: undefined, sortDirection: 'ascending' };
      } else {
        return { sortedColumn: columnName, sortDirection: 'ascending' };
      }
    });
  };

  return (
    <div className={styles.allItemsPage}>
      <FilterInput
        placeholder={`Filter ${items.length} items...`}
        value={filterText}
        onChange={(value) => {
          setFilterText(value);
        }}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={numberOfPages}
        goToFirstPage={goToFirstPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        goToLastPage={goToLastPage}
        setItemsPerPage={updateItemsPerPage}
      />
      <ItemTable
        items={itemsToRender}
        updateColumnSort={updateColumnSort}
        sortedColumn={sortedColumn}
        sortDirection={sortDirection}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={numberOfPages}
        goToFirstPage={goToFirstPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        goToLastPage={goToLastPage}
        setItemsPerPage={updateItemsPerPage}
      />
    </div>
  );
};
