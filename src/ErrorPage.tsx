import { useRouteError } from 'react-router-dom';
import { styled } from 'styled-components';
interface RouteError {
  statusText?: string;
  message?: string;
  // Add other properties if your useRouteError() hook returns more fields
}
const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <StyledError id="error-page">
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledError>
  );
};
const StyledError = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  p {
    color: #c83434;
  }
`;
export default ErrorPage;
