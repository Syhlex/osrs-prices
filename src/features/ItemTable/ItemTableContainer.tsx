import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from 'context/Items/ItemsContext';
import {
  sortAlphabetical,
  sortBoolean,
  sortNumerical,
} from 'utils/sorting.utils';
import { FilterInput } from './FilterInput';
import { Pagination } from './Pagination';
import { ItemTable } from './ItemTable';
import styles from './ItemTableContainer.mod.scss';

export interface ItemTableContainerProps {
  items: Item[];
  favourites: Set<number>;
  toggleFavourite: (itemId: number) => void;
  showSearchbar?: boolean;
}

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

export const ItemTableContainer = ({
  items,
  favourites,
  toggleFavourite,
  showSearchbar = true,
}: ItemTableContainerProps) => {
  const [filterText, setFilterText] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [{ sortedColumn, sortDirection }, setColumnSort] = useState<{
    sortedColumn: keyof ItemValues | undefined;
    sortDirection: SortDirection;
  }>({ sortedColumn: undefined, sortDirection: 'ascending' });

  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFilterText(urlParams.get('search') ?? '');
  }, [location.search]);

  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const tradedItems = items.filter((item) => {
    const hasFilterText = item.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const isTraded = item.high || item.low;
    return hasFilterText && isTraded;
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
    : tradedItems;

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
    <div className={styles.itemTableContainer}>
      {showSearchbar && (
        <FilterInput
          placeholder={`Filter ${items.length} items...`}
          value={filterText}
          onChange={(value) => {
            setFilterText(value);
          }}
        />
      )}
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
        sortedColumn={sortedColumn}
        sortDirection={sortDirection}
        updateColumnSort={updateColumnSort}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
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
