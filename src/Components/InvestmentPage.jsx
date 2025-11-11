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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProgressComponent = ({ data, remain, investor }) => {
  const isLoading = !data || !investor;

  const goal = data?.fundingSought || 0;
  const raised = data?.fundRaised || 0;
  const remaining = remain || 0;
  const percentage = goal > 0 ? Math.round((raised / goal) * 100) : 0;

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-NG").format(num);
  };

  return (
    <ProgressCard>
      <Header>Investment Progress</Header>

      <GridRow>
        <GridItem>
          <Label>Funding Goal</Label>
          <Amount>
            {isLoading ? <Skeleton width={100} /> : `₦${formatNumber(goal)}`}
          </Amount>
        </GridItem>

        <GridItem>
          <Label>Raised</Label>
          <Amount>
            {isLoading ? <Skeleton width={100} /> : `₦${formatNumber(raised)}`}
          </Amount>
        </GridItem>

        <GridItem>
          <Label>Remaining</Label>
          <Amount>
            {isLoading ? (
              <Skeleton width={100} />
            ) : (
              `₦${formatNumber(remaining)}`
            )}
          </Amount>
        </GridItem>

        <GridItem>
          <Label>Investors</Label>
          <Amount>
            {isLoading ? <Skeleton width={40} /> : investor.length}
          </Amount>
        </GridItem>
      </GridRow>

      <BarWrap>
        <BarTrack>
          {isLoading ? (
            <Skeleton height={12} />
          ) : (
            <BarFill style={{ width: `${percentage}%` }} />
          )}
        </BarTrack>
      </BarWrap>

      <ProgressNote>
        {isLoading ? <Skeleton width={80} /> : `${percentage}% funded`}
      </ProgressNote>
      <RightNote>
        {isLoading ? <Skeleton width={100} /> : `₦${formatNumber(remaining)}`}
      </RightNote>
    </ProgressCard>
  );
};

export default ProgressComponent;
