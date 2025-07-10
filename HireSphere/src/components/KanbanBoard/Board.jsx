import React, {useState} from 'react';
import '/Users/aaryasoni/Desktop/HireSphere/HireSphere/src/styles/Board.css';

const Board = () => {

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
            items: [
                {id:"3", content: "Data Scientist"},
                {id:"4", content: "AI/ML Scientist"}
            ]
        },
    
        interview_round: {
            name: "Shree",
            items: [
                {id:"5", content: "Aerospace Engineer"},
                {id:"6", content: "Pilot"}
            ]
        },
    
        offered: {
            name: "Anu",
            items: [
                {id:"7", content: "Accountant"},
                {id:"8", content: "Economist"}
            ]
        },
    
        accepted: {
            name: "Aanu",
            items: [
                {id:"9", content: "Singer"},
                {id:"10", content: "Artist"}
            ]
    
        }
            
    })

    const [newCandidate, setNewCandidate] = useState("");               // Keeps track of new tasks that are created
    const [activeColumns, setActiveColumn] = useState("candidates");    // Keeps track of the active columns- initial state being candidates
    const [draggedItem, setDraggedItem] = useState(null);               // Keeps track of the items that are being dragged at the moment

    // A function that keeps track of the new candidates that are being introduced to the graph
    const addNewCandidate = () => {
        if (newCandidate.trim() === '') return;

        // Pushing new candidate in the active column
        const updatedColumns = {...columns};
        updatedColumns[activeColumns].items.push({
            id: Date.now().toString(),
            content: newCandidate,
        })

        setColumns(updatedColumns);
        setNewCandidate("");
    };

    // A funcion that deletes a candidate from an active column: use filter()
    const removeCandidate = (columnID, candidateID) => {
        const updatedColumns = {...columns};
        updatedColumns[columnID].items = updatedColumns[columnID].items.filter((item) => item.id !== candidateID);

        setColumns(updatedColumns);
    };

    // A function that handles the dragged item
    const handleDragStart = (columnID, item) => {
        setDraggedItem({columnID, item})
    }

    const handleDragOver = (e) => {
        // By defualt, HTML doesn't allow elements to be dragged and dropped, so by writing this line, we allow elements to be dragged & dropped from one column to another
        e.preventDefault();
    }

    // A function that handles the dropped item
    const handleDrop = (e, columnID) => {
        e.preventDefault();

        // Case 1: The dragged item doesn't exist!
        if (!draggedItem) return;
        
        // Changing the columnID of the draggedItem to the destination ID 
        const {columnID: sourceColumnID, item} = draggedItem;

        // Case 2: The dragged item is dropped back to the original column
        if (sourceColumnID === columnID) return;

        // Case 3: The two columns are different
        const updatedColumns = {...columns};

        // Remove element from the first column
        updatedColumns[sourceColumnID].items = updatedColumns[sourceColumnID].items.filter((i) => i.id !== item.id);

        // Add element to the second column
        updatedColumns[columnID].items.push(item);

        // Set the updated state
        setColumns(updatedColumns);
        setDraggedItem(null);
    }

    return (
        <div className="board-container">
          <div className="add-candidate">
            <input
              type="text"
              placeholder="Enter candidate"
              value={newCandidate}
              onChange={(e) => setNewCandidate(e.target.value)}
            />
            <button onClick={addNewCandidate}>Add Candidate</button>
          </div>
      
          {Object.entries(columns).map(([columnID, column]) => (
            <div
              className="column"
              key={columnID}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnID)}
            >
              
            <h2 className="column-title">{column.name}</h2>
              {column.items.map((item) => (
                <div
                  className="item-card"
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(columnID, item)}
                >
                  {item.content}
                  <button
                    className="remove-btn"
                    onClick={() => removeCandidate(columnID, item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }      

export default Board;