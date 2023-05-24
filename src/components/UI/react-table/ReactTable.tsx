'use client'
import { Column, useTable } from 'react-table'
import Iconify from "../UI/iconifiy";
import { Box, Button } from "@mui/material"


export const ReactTable = ({ columns, data }: { columns: any, data: any }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps()}

                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
                key={index}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                    key={index}
                  >
                      <Box onClick={() => updateCartItemQuantity(item, 'decrease')}>
                                <Iconify icon="iconamoon:sign-minus-circle" />
                            </Box>
                            <Box onClick={() => updateCartItemQuantity(item, 'increase')}>
                                <Iconify icon="iconamoon:sign-plus-circle" />
                            </Box>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
        <tr style={{ width: '100%' }}>
          <td style={{position: 'relative', right: 0}}>
            Total
            {'asd'}
          </td>
        </tr>
      </tbody>
    </table>
  )

}
