import React, { useState } from 'react';


function ListForm() {
    const [list, setList] = useState('')

    const handleList = (e) => {
        setList(e.target.value)
    }

    const handleCreate = (data) => {
        console.log(data);
    }


    return (
        <div>
            <input value={list} onChange={handleList} />
            <button onCreate={handleCreate}>제출</button>
        </div >
    )
}

export default ListForm

