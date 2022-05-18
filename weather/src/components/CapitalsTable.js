import React from 'react'
import citiesList from '../helpers/capitals'

import '../styles/table.scss'
export default function CapitalsTable() {
  return (
        <div className="ptable">
            <h1 className="headin">World Capital Cities</h1>
            <table>
                <tbody>
                <tr className="col">
                    <th>Country</th>
                    <th>Capital City</th>
                </tr>
                {
                    citiesList.map(({country,city,id},i)=>{
                        return <tr className='pos' key={id}>
                            <td>{country}</td>
                            <td>{city}</td>
                            </tr>
                    })
                }
                </tbody>
            </table>
        </div>
  )
}
