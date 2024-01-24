import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebaseconfig';

const EmployerTable = () => {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const [items] = useState([
        {

        }
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    async function getAllEmployers() {
        const q = query(collection(db, "funcionarios"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setItems(
                ...items,
                {
                    nome: doc.data().nome,
                    cep: doc.data().cep
                }
            )
        });
    }
    useEffect(() => {
        getAllEmployers();
    }, [])

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Id</DataTable.Title>
                <DataTable.Title>Nome</DataTable.Title>
                <DataTable.Title>CEP</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map((item) => (
                <DataTable.Row id={item.id}>
                    <DataTable.Cell>{item.nome}</DataTable.Cell>
                    <DataTable.Cell>{item.cep}</DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} de ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Linhas por página'}
            />
        </DataTable>
    );
};

export default EmployerTable;