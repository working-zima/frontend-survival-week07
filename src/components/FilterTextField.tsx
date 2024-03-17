import React, { useRef } from 'react';

function FilterTextField() {
  const id = useRef(`input-${Math.random()}`);

  return (
    <div>
      <label htmlFor={id.current}>검색</label>
      <input
        id={id.current}
        type="text"
        placeholder="식당 이름을 입력해주세요"
      />
    </div>

  );
}

export default FilterTextField;
