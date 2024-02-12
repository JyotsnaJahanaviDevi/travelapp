import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';

const Checklist = ({ title, items }) => {
  const [newItem, setNewItem] = useState('');
  const [checklistItems, setChecklistItems] = useState(items);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setChecklistItems([...checklistItems, { text: newItem, checked: false }]);
      setNewItem('');
    }
  };

  const toggleItem = (index) => {
    const updatedItems = [...checklistItems];
    updatedItems[index].checked = !updatedItems[index].checked;
    setChecklistItems(updatedItems);
  };

  const deleteSelectedItems = () => {
    const updatedItems = checklistItems.filter(item => !item.checked);
    setChecklistItems(updatedItems);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <button style={styles.button} onClick={deleteSelectedItems}>Delete</button>
      <ul style={styles.list}>
        {checklistItems.map((item, index) => (
          <ChecklistItem
            key={index}
            text={item.text}
            checked={item.checked}
            onChange={() => toggleItem(index)}
          />
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress when a key is pressed
        style={styles.input}
        placeholder="Add new item..."
      />
      <button style={styles.button} onClick={addItem}>Add</button>
    </div>
  );
};

export default Checklist;

const styles = {
  container: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  title: {
    color: '#fff',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    marginRight: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '8px',
    marginRight: '10px',
    borderRadius: '4px',
    width: '200px',
  },
};
