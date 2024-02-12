import React from 'react';

const ChecklistItem = ({ text, checked, onChange }) => {
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none', color: '#fff' }}>{text}</span>
    </li>
  );
};

export default ChecklistItem;
