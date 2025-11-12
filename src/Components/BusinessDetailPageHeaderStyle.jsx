import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;

  .details {
    display: flex;
    gap: 0.5rem;
  }
  /* background-color: pink; */
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.div`
  background-color: #eef4ff;
  color: #2a4eff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const Status = styled.div`
  background-color: #e6ffed;
  color: #27ae60;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const RetailLabel = styled.div`
  margin-top: 10px;
  background-color: #fff3e0;
  color: #ff9800;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin: 16px 0;
  font-size: 15px;
  color: #333;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Poster = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .Initials {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;

export const PosterDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PosterName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #222;
`;

export const PosterRole = styled.span`
  font-size: 13px;
  color: #777;
`;

export const Stats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #444;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Date = styled.div`
  font-size: 12px;
  color: #999;
`;
