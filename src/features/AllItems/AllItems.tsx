import React, { useState } from 'react';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { FilterInput } from 'features/ItemTable/FilterInput';
import { Pagination } from 'features/ItemTable/Pagination';
import { ItemTable } from 'features/ItemTable/ItemTable';

export const AllItems = () => {
  useTitle('All Items');
  const { items } = useItems();
  const [filterText, setFilterText] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToRender = items.slice(startIndex, startIndex + itemsPerPage);

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

  return (
    <div>
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
      <ItemTable items={itemsToRender} />
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
