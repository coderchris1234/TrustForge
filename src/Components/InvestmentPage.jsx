import {
  ProgressCard,
  Header,
  GridRow,
  GridItem,
  Label,
  Amount,
  BarWrap,
  BarTrack,
  BarFill,
  ProgressNote,
  RightNote,
} from "./InvestmentPageStyle";

const ProgressComponent = ({
  fundingGoal = "₦500k",
  raised = "₦200k",
  remaining = "₦300k",
  investors = 8,
  percent = 40,
}) => {
  return (
    <ProgressCard>
      <Header>Investment Progress</Header>

      <GridRow>
        <GridItem>
          <Label>Funding Goal</Label>
          <Amount>{fundingGoal}</Amount>
        </GridItem>

        <GridItem>
          <Label>Raised</Label>
          <Amount>{raised}</Amount>
        </GridItem>

        <GridItem>
          <Label>Remaining</Label>
          <Amount>{remaining}</Amount>
        </GridItem>

        <GridItem>
          <Label>Investors</Label>
          <Amount>{investors}</Amount>
        </GridItem>
      </GridRow>

      <BarWrap>
        <BarTrack>
          <BarFill style={{ width: `${percent}%` }} />
        </BarTrack>
      </BarWrap>

      <ProgressNote>{percent}% funded</ProgressNote>
      <RightNote>{remaining}</RightNote>
    </ProgressCard>
  );
};

export default ProgressComponent;
