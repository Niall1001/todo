import React from 'react'

const TodoCard = ({id, description, completed}) => {
    return (
        <div style={{
            marginTop: "5px",
            marginRight: "5px",
            marginLeft: "5px",
            marginBottom: "5px",
        }}>
            <div>id={id}</div>
            <div>id={description}</div>
            <div>id={completed}</div>
        </div>
    )
}

export default TodoCard
