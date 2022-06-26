import React from 'react';

export default function KeyCodesTableList({ keyCode, description }) {
  return (
    <tr>
      <td>{keyCode}</td>
      <td>{description}</td>
    </tr>
  )
}
