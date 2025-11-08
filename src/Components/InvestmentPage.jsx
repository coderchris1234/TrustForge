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

const ProgressComponent = ({ data }) => {
  const goal = data?.fundingSought;
  const raised = 0;
  const remaining = goal - raised;
  const percentage = Math.round((raised / goal) * 100);
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-NG").format(num);
  };
  return (
    <ProgressCard>
      <Header>Investment Progress</Header>

      <GridRow>
        <GridItem>
          <Label>Funding Goal</Label>
          <Amount>₦{formatNumber(data?.fundingSought)}</Amount>
        </GridItem>

        <GridItem>
          <Label>Raised</Label>
          <Amount>₦{formatNumber(raised)}</Amount>
        </GridItem>

        <GridItem>
          <Label>Remaining</Label>
          <Amount>₦{formatNumber(remaining)}</Amount>
        </GridItem>

        <GridItem>
          <Label>Investors</Label>
          <Amount></Amount>
        </GridItem>
      </GridRow>

      <BarWrap>
        <BarTrack>
          <BarFill style={{ width: `${percentage}%` }} />
        </BarTrack>
      </BarWrap>

      <ProgressNote>{percentage}% funded</ProgressNote>
      <RightNote>₦{formatNumber(remaining)}</RightNote>
    </ProgressCard>
  );
};

export default ProgressComponent;
