import React, { useEffect, useState } from 'react';
function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //  브라우저 API를 사용해서 document의 title을 업데이트 합니다.
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p> Count is {count}</p>
      <button onClick={() => setCount(count + 1)}> 증가</button>
      <button onClick={() => setCount(count - 1)}> 감소</button>
    </div>
  );
}

export default Counter;
