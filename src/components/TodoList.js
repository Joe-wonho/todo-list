import styled from 'styled-components';
import TodoItem from './TodoItem';

//밑에있는 아이템을 담을 컨테이너
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
`;

const TodoList = () => {
  return (
    <>
      <TodoListContainer>
        <TodoItem text="1번째 작성된 글입니다." done={true}></TodoItem>
        <TodoItem text="2번째 작성된 글입니다." done={false}></TodoItem>
      </TodoListContainer>
    </>
  );
};

export default TodoList;
