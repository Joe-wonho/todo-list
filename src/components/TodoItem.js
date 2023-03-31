import styled, { css } from 'styled-components';
import { BsCheck2 } from 'react-icons/bs';

//애는 아이템 하나하나
const TodoItemContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 1px solid #5c5757;
  border-radius: 0.5rem;
  padding: 5px;
  /* 위에 커서가 있을 때, button 보여주라는 의미 */
  &:hover {
    button {
      display: initial;
    }
  }

  .checkbox {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #898080;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-text {
    flex-grow: 1;
    color: #495057;

    /* 여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css 를 사용해야합니다., 
    css 를 불러와서 사용을 해야 그 스타일 내부에서도 다른 props 를 조회 할 수 있습니다 */
    ${(props) =>
      props.done &&
      css`
        text-decoration: line-through;
        color: #b2b2b2;
      `}
  }
  button {
    font-size: 16px;
    color: #898080;
    display: none;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TodoItem = ({ id, text, done }) => {
  return (
    <>
      <TodoItemContainer done={done}>
        <div className="checkbox">{done && <BsCheck2 />}</div>
        <div className="todo-text">{text}</div>
        <button className="update-btn">수정</button>
        <button className="remove-btn">삭제</button>
      </TodoItemContainer>
    </>
  );
};

export default TodoItem;
