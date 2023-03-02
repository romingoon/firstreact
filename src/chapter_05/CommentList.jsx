import React from 'react';
import Comment from './comment';

const comments = [
  {
    name: '유재석',
    comment: '안녕하세요, 유재석입니다!',
  },
  {
    name: '하동훈',
    comment: '안녕하세요 하동훈입니다.',
  },
  {
    name: '김종국',
    comment: '안녕하세요, 김종국입니다.',
  },
  {
    name: '송지효',
    comment: '저도 리액트 배워보고 싶어요!',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
