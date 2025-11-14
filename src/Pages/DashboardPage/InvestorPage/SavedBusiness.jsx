import { SavedBusiness_container } from "./SavedBusStyle";
import BusinessNewsFeed from "../../../Components/BusinessNewsFeed";
import { BusinessPost } from "../../../Config/Data";
import { useSelector } from "react-redux";

const SavedBusiness = () => {
  const savedBusinesses = useSelector(
    (state) => state.TrustForge.savedBusinesses
  );
  return (
    <SavedBusiness_container>
      <div className="wrapper">
        <h1>Saved Businesses</h1>
        <p>Businesses you’ve bookmarked for later review</p>
      </div>
      {savedBusinesses.length > 0 ? (
        <BusinessNewsFeed data={savedBusinesses} />
      ) : (
        <p style={{ textAlign: "center" }}>No saved businesses yet.</p>
      )}
    </SavedBusiness_container>
  );
};

export default SavedBusiness;
