import React, {useState} from 'react';

const [columns, setColumns] = useState({

    candidates: {
        name: "Aarya Soni",
        items: [
            {id: "1", content: "FrontEnd Developer"},
            {id: "2", content: "AI/ML Engineer"}
        ]
    },

    technical_round: {
        name: "Apoorv",
        ietms: [
            {id:"3", content: "Data Scientist"},
            {id:"4", content: "AI/ML Scientist"}
        ]
    },

    interview_round: {
        name: "Shree",
        ietms: [
            {id:"5", content: "Aerospace Engineer"},
            {id:"6", content: "Pilot"}
        ]
    },

    offered: {
        name: "Anu",
        ietms: [
            {id:"7", content: "Accountant"},
            {id:"8", content: "Economist"}
        ]
    },

    accepted: {
        name: "Aanu",
        ietms: [
            {id:"9", content: "Singer"},
            {id:"10", content: "Artist"}
        ]

    }
        
})

const Board = () => {
  return (
    <div>

    </div>
  )
}

export default Board