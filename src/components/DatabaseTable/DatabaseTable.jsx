import React from "react";

export default function DatabaseTable({columns}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Oszlop</th>
                <th>Típus</th>
                <th>Leírás</th>
            </tr>
            </thead>
            <tbody>
            {columns.map(({name, type, description}) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
