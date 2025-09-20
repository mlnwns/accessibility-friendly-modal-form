import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  min-width: 31.25rem;
  max-width: 50rem;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Content = styled.div`
  padding: 1rem 0;
`;
