import React, { useEffect, useState } from 'react';

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시 마다 실행됨
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);

    return () => {
      // 컴포넌트가 마운트 해제 되기 전에 실행됨
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return '대기중...';
  }
  return isOnline ? '온라인' : '오프라인';
}
