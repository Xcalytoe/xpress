import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { Verifiers } from '../../../types/general';
import { handleStatus } from '../../../helpers';
import {
  StyledContainer,
  StyledSpan,
  StyledTable,
  StyledTd,
  StyledTh,
} from './style';
import CheckboxSelect, { ActionBtn } from './CheckboxSelect';
import Footer from './Footer';

const VerifiersTable = ({ filteredData }: { filteredData: Verifiers[] }) => {
  const [data, setData] = useState<Verifiers[]>([]);

  // Update table state
  useEffect(() => {
    filteredData && setData(filteredData);
  }, [filteredData]);

  const columns = useMemo<ColumnDef<Verifiers>[]>(
    () => [
      {
        accessorKey: 'select',
        header: ({ table }) => (
          <CheckboxSelect
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <CheckboxSelect
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: 'first_name',
        cell: (info) => info.getValue(),
        header: () => <span>First Name</span>,
      },

      {
        accessorKey: 'last_name',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },

      {
        accessorKey: 'phone',
        header: () => 'Phone Number',
        cell: (info) => info.renderValue(),
      },
      {
        accessorKey: 'partner',
        cell: (info) => info.renderValue(),

        header: () => <span>Partner</span>,
      },
      {
        accessorKey: 'location',
        cell: (info) => info.renderValue(),

        header: 'Location',
      },
      {
        accessorKey: 'status',
        cell: (info) => {
          const itemName = info.renderValue();
          const { name, bg, color } = handleStatus(itemName as string) as {
            name: string;
            bg: string;
            color: string;
          };
          return (
            <StyledSpan $bg={bg} $p={!!bg ? '4px 8px' : '0'} $color={color}>
              {name}
            </StyledSpan>
          );
        },
      },

      {
        accessorKey: 'action',
        header: 'Actions',
        cell: ({ row }) => <ActionBtn key={row.id} />,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {/* Table footer  */}
      <Footer
        selectValue={table.getState().pagination.pageSize}
        onChange={(e: any) => {
          table.setPageSize(Number(e.target.value));
        }}
        handlePrev={() => table.previousPage()}
        handleNext={() => table.nextPage()}
        disabledNext={!table.getCanNextPage()}
        disabledPrev={!table.getCanPreviousPage()}
        current={table.getState().pagination.pageIndex + 1}
        count={table.getPageCount()}
        handlePage={(page: number) => table.setPageIndex(page)}
      />
    </StyledContainer>
  );
};

export default VerifiersTable;
