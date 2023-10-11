import React from 'react';
import { Button, DropdownOption, Select } from 'components';
import styles from './Pagination.mod.scss';

const options: DropdownOption<number>[] = [
  { label: 'Show 50', value: 50 },
  { label: 'Show 100', value: 100 },
  { label: 'Show 250', value: 250 },
];

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToFirstPage: () => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
  setItemsPerPage: (value: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  goToFirstPage,
  goToPreviousPage,
  goToNextPage,
  goToLastPage,
  setItemsPerPage,
}: PaginationProps) => {
  const isOnFirstPage = currentPage === 1;
  const isOnLastPage = currentPage === totalPages;

  return (
    <div>
      <Button
        variant="primary"
        onClick={goToFirstPage}
        disabled={isOnFirstPage}
        classes={{ button: styles.goToFirstPageButton }}
      >
        {'<<'}
      </Button>
      <Button
        variant="primary"
        onClick={goToPreviousPage}
        disabled={isOnFirstPage}
        classes={{ button: styles.goToPreviousPageButton }}
      >
        {'<'}
      </Button>
      <Button
        variant="primary"
        onClick={goToNextPage}
        disabled={isOnLastPage}
        classes={{ button: styles.goToNextPageButton }}
      >
        {'>'}
      </Button>
      <Button
        variant="primary"
        onClick={goToLastPage}
        disabled={isOnLastPage}
        classes={{ button: styles.goToLastPageButton }}
      >
        {'>>'}
      </Button>
      <div className={styles.pageDisplay}>
        Page {currentPage} of {totalPages}
      </div>
      <Select
        buttonVariant="primary"
        options={options}
        onSelect={(selectedOption) => {
          setItemsPerPage(selectedOption.value);
        }}
      />
    </div>
  );
};
