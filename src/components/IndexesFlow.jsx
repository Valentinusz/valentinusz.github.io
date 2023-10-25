import React from "react";
import SystemCatalogsFlow from "./SystemCatalogsFlow/SystemCatalogsFlow";

export default function IndexesFlow({height = '35em'}) {
    const indexes = {
        title: 'INDEXES',
        tableData: [
            {columnName: "OWNER", description: "az index tulajdonososa", columnType: "String"},
            {columnName: "INDEX_NAME", description: "az index neve", columnType: "String"},
            {columnName: "TABLE_OWNER", description: "az indexelt objektum tulajdonosa", columnType: "String"},
            {columnName: "TABLE_NAME", description: "az indexelt objektum neve", columnType: "String"},
            {columnName: "TABLE_TYPE", description: "az indexelt objektum neve típusa", columnType: "String"},
            {columnName: "UNIQUENESS", description: "egyedi-e az index", columnType: "String"},
            {columnName: "COMPRESSION", description: "használ-e tömörítést", columnType: "String"},
            {columnName: "PREFIX_LENGTH", description: "tömörítésnél a prefix oszlopok száma", columnType: "Number"},
            {columnName: "TABLESPACE_NAME", description: "táblatér neve", columnType: "String"}
        ]
    }

    const ind_columns = {
        title: 'IND_COLUMNS',
        tableData: [
            {columnName: "INDEX_OWNER", description: "az index tulajdonososa", columnType: "VARCHAR2"},
            {columnName: "INDEX_NAME", description: "az index neve", columnType: "VARCHAR2"},
            {columnName: "TABLE_OWNER", description: "az indexelt objektum tulajdonosa", columnType: "VARCHAR2"},
            {columnName: "TABLE_NAME", description: "az indexelt objektum neve", columnType: "VARCHAR2"},
            {columnName: "COLUMN_NAME", description: "az index oszlopának neve", columnType: "VARCHAR2"},
            {columnName: "COLUMN_POSITION", description: "az oszlop sorszáma az indexen belül", columnType: "NUMBER"},
            {
                columnName: "DESCEND",
                description: "`DESC` ha az oszlop csökkenően szerepel az indexben (különben `ASC`)",
                columnType: "VARCHAR2"
            }
        ]
    }

    const ind_expressions = {
        title: 'IND_EXPRESSIONS',
        tableData: [
            {columnName: "INDEX_OWNER", description: "az index tulajdonososa", columnType: "String"},
            {columnName: "INDEX_NAME", description: "az index neve", columnType: "String"},
            {columnName: "TABLE_OWNER", description: "az indexelt objektum tulajdonosa", columnType: "String"},
            {columnName: "TABLE_NAME", description: "az indexelt objektum neve", columnType: "String"},
            {columnName: "COLUMN_EXPRESSION", description: "a függvény", columnType: "String"},
            {columnName: "COLUMN_POSITION", description: "az oszlop sorszáma az indexen belül", columnType: "Number"},
        ]
    }


//     console.log(JSON.stringify(
//         `VARCHAR2 INDEX_NAME "az index neve"
// VARCHAR2 COMPOSITE "YES, ha lokális index, különben NO"
// VARCHAR2 PARTITION_NAME "Partíció neve"
// NUMBER SUBPARTITION_COUNT "Alpartíciók száma"`.split('\n').map(line => ({
//             columnType: line.split(" ")[0],
//             columnName: line.split(" ")[1],
//             description: line.split(" ").slice(2).join(" ").replaceAll('"', "")
//         }))))

    const initialNodes = [
        {id: '1', type: 'databaseTable', position: {x: 0, y: 0}, data: indexes},
        {id: '2', type: 'databaseTable', position: {x: 300, y: 0}, data: ind_columns},
        {id: '3', type: 'databaseTable', position: {x: 300, y: 250}, data: ind_expressions},
    ];

    const initialEdges = [
        {id: 'edge-1', source: '1', target: '2', sourceHandle: 'a', targetHandle: 'b'},
    ];

    return <div style={{width: '100%', height}}><SystemCatalogsFlow initialNodes={initialNodes}
                                                                    initialEdges={initialEdges}/></div>;
}
