import { createContext, ReactNode, useContext, useState, useMemo } from 'react';
import styles from './Table.module.css';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from './colors';

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode) | string;
  width?: string;
  Cell?: (props: { value: unknown; row: T }) => ReactNode;
  sortable?: boolean;
  trunc?: boolean;
  isNumeric?: boolean;
}

export interface FilterKey {
  key: string;
  value: string | boolean;
  operator?: 'eq' | 'contains' | 'gt' | 'lt' | 'between' | 'in';
  status: 'active' | 'inactive'

}

interface TableContextProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  sortColumn: keyof T | null;
  sortDirection: 'asc' | 'desc' | null;
  onSortData: (column: keyof T) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  selectedRows: string[];
  filterKeys?: FilterKey[];
  selectAll: boolean;
  search?: string;
  searchKey?: string;
  toggleSelectAll: () => void;
  toggleRowSelect: (id: string) => void;
  page: number;
  rowHandler?: (id: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableContext = createContext<TableContextProps<any> | undefined>(
  undefined,
);

interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  pageSize?: number;
  onSelectionChange?: (selectedRows: string[]) => void; 
  onRowSelect?: (selectedRows: T[]) => void;
  children: ReactNode;
  searchKey: string;
  search: string;
  filterKeys?: FilterKey[];
  page: number,
  setCurrentPage: (page: number) => void,
  rowHandler?: (id: string) => void;
}

export function Table<T>({
  columns,
  data,
  pageSize = 10,
  children,
  onSelectionChange,
  page,
  setCurrentPage,
  rowHandler,
  search,
  searchKey,
  filterKeys,
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(
    null,
  );
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const onSortData = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };


  const sortedData = useMemo(() => {
    if (!sortColumn) return data;
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  let filteredData = data.filter((item) => (item[searchKey as keyof T] as string)?.includes(search))


  if (filterKeys && filterKeys.length > 0) {
    filterKeys.map((filter) => {
      if (filter.status == 'active') {
        if (filter.operator == 'eq') {
          filteredData = filteredData.filter((item) => {
            const fillValue = filter.value == 'true' ? true : false
            return (item[filter.key as keyof T] as boolean) == fillValue
          })
        } else if (filter.operator == 'contains') {
          filteredData = filteredData.filter((item) => (item[filter.key as keyof T] as string)?.toLowerCase().includes((filter.value as string)?.toLowerCase()))
        }
      }
    })

  }



  const totalPages = Math.ceil(sortedData.length / pageSize);

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const toggleRowSelect = (id: string) => {
    const isSelected = selectedRows.includes(id);
    const updatedSelection = isSelected
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];

    setSelectedRows(updatedSelection);
    onSelectionChange?.(updatedSelection);
    setSelectAll(false);
  };

  const toggleSelectAll = () => {
    const allIds = !selectAll
      ? data.map((item) => item["id" as keyof T] as string)
      : [];
    setSelectedRows(allIds);
    onSelectionChange?.(allIds);
    setSelectAll(!selectAll);
  };


  return (
    <TableContext.Provider
      value={{
        columns,
        data: filteredData,
        sortColumn,
        sortDirection,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSortData,
        currentPage: page,
        totalPages,
        setCurrentPage,
        selectedRows,
        searchKey,
        selectAll,
        toggleSelectAll,
        toggleRowSelect,
        page,
        rowHandler
      }}>
      <div className={styles.table} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header<T>() {
  const context = useContext(TableContext) as TableContextProps<T>;
  if (!context) throw new Error('Header must be used within a Table');
  const { columns, onSortData, sortColumn, sortDirection, selectedRows, selectAll, toggleSelectAll, data } = context;

  return (
    <div className={`${styles.header} ${styles.common_row}`} role="row">

      <div style={{
        position: "relative",
        padding: 0,
        paddingInline: 12
      }}>
        <input
          type="checkbox"
          checked={selectAll || data.length == selectedRows.length}
          onChange={toggleSelectAll}
          style={{
            border: '1px solid rgba(0,0,0,0.3)',
            backgroundColor: selectAll ? "var(--main-color)" : "transparent",
            transition: "all .3s",
            zIndex: 9
          }}
        />
      </div>
      {columns.map((column, index) => (
        <div
          key={index}
          style={{ width: column.width }}
          onClick={() =>
            column.sortable && onSortData(column.accessor as keyof T)
          }
          className={`${column.sortable ? styles.sortable : ''} ${styles.th} ${column.isNumeric ? styles.numeric : ''}`}>
          {column.header}
          {column.sortable && sortColumn === column.accessor && (
            <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
          )}
        </div>
      ))}
    </div>
  );
}

interface RowProps<T> {
  item: T;
  index: number;
}

function Row<T>({ item, index }: RowProps<T>) {
  const context = useContext(TableContext) as TableContextProps<T>;
  if (!context) throw new Error('Row must be used within a Table');
  const { columns, selectedRows, searchKey, toggleRowSelect, rowHandler } = context;
  const id = item["id" as keyof T] as string;

  const selected = selectedRows.includes(id);

  const value = item[searchKey as keyof T] as string;

  const handler = () => {
    rowHandler?.(id)
  }

  return (
    <div
      className={`${styles.row} ${styles.common_row}`}
      role="row">
      <div style={{
        paddingInline: 10
      }} >
        <div
          onClick={() => toggleRowSelect(id)}
          className={styles.select}
          style={{
            backgroundColor: selected ? 'rgba(0,0,0,0.1)' : colors[index],
          }}
        >
          {selected ? (
            <Check color="#000" size={12}
              style={{
                zIndex: 1,
                pointerEvents: "none"
              }}
            />
          ) : (
            <>
              {value?.charAt(0).toUpperCase()}
              {value?.split(" ")[1] ? value?.split(" ")[1]?.charAt(0).toUpperCase() : value?.charAt(1).toUpperCase()}
            </>
          )}
        </div>
      </div>

      {columns.map((column, index) => (
        <Cell key={index} handler={handler} column={column} row={item} />
      ))}
    </div>
  );
}

function Cell<T>({ column, row, handler }: { handler: () => void, column: ColumnDef<T>; row: T }) {
  const value =
    typeof column.accessor === 'function'
      ? column.accessor(row)
      : typeof column.accessor === 'string' ? getNestedValue(row, column.accessor) : row[column.accessor as keyof T];

  const isNumeric = column.isNumeric || typeof value === 'number';

  return (
    <div onClick={handler} style={{ width: column.width }}
      className={`${isNumeric ? styles.numeric : ''}`}
    >
      {column.Cell ? (
        <column.Cell value={value} row={row} />
      ) : (
          <div className={`${column.trunc ? styles.trunc : ''} ${isNumeric ? styles.numeric : ''}`}>{value as ReactNode}</div>
      )}
    </div>
  );
}

interface BodyProps {
  empty?: ReactNode;
}

function Body<T>({ empty }: BodyProps) {
  const context = useContext(TableContext) as TableContextProps<T>;
  if (!context) throw new Error('Body must be used within a Table');
  const { data } = context;

  if (!data?.length) return <>{empty}</>;

  return (
    <section className={styles.body}>
      {data.map((item, index) => (
        <Row key={index} item={item} index={index} />
      ))}
    </section>
  );
}

function Footer<T>() {
  const context = useContext(TableContext) as TableContextProps<T>;
  if (!context) throw new Error('Footer must be used within a Table');
  const { page, setCurrentPage } = context;

  return (
    <footer className={styles.footer}>
      <div>
        <span>1 - 2</span>
      </div>


      <div className={styles.page}>
        <button onClick={() => setCurrentPage(-1)} >< ChevronLeft style={{ color: page == 1 || page == null ? 'rgba(0,0,0,0.3)' : '' }} size={15} /> </button>
        <span> {page ?? 1} </span>
        <button onClick={() => setCurrentPage(1)} > <ChevronRight style={{ color: page == 1 || page == null ? 'rgba(0,0,0,0.3)' : '' }} size={15} /> </button>
      </div>
    </footer>
  );
}

function getNestedValue<T>(obj: T, path: string): unknown {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
}
Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
