import { Overlay, ModalBox } from "./MeetingModalStyle";
import { MdOutlineCancel } from "react-icons/md";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const MeetingModal = ({ open, close, businessId }) => {
  const [loading, setLoading] = useState(false);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = useSelector((state) => state.TrustForge.user?.token);
  const userId = useSelector((state) => state.TrustForge.businessOwnerId);
  console.log("id", userId);

  const [form, setForm] = useState({
    meetingTitle: "",
    date: "",
    time: "",
    note: "",
    meetingType: "Virtual",
    guest: userId,
    businessId: businessId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BaseUrl}/meeting`,
        form,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Meeting request sent successfully");
      console.log("data from meeting", res?.data);
      close();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;

  return (
    <Overlay onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <div className="upCase">
          <div>
            <h2>Schedule a New Meeting</h2>
            <p>Set up a meeting with a business owner</p>
          </div>
          <div style={{ cursor: "pointer" }}>
            <MdOutlineCancel onClick={close} size={30} />
          </div>
        </div>

        <div className="input">
          <div className="meeting">
            <label>Meeting title</label>
            <input
              type="text"
              placeholder="e.g., investment title"
              name="meetingTitle"
              value={form.meetingTitle}
              onChange={handleChange}
            />
          </div>
          <div className="dateInput">
            <div>
              <label htmlFor="">Date</label>
              <input
                type="date"
                placeholder="Select your prefered date"
                value={form.date}
                name="date"
                onChange={handleChange}
                min={minDate}
              />
            </div>
            <div>
              <label htmlFor="">Time</label>
              <input
                type="time"
                placeholder="select time"
                value={form.time}
                name="time"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Meeting Type</label>
            <input
              type="text"
              value="Virtual"
              readOnly
              style={{ background: "#f5f5f5", cursor: "not-allowed" }}
            />
          </div>

          <div>
            <label htmlFor="">Notes(optional)</label>
            <input
              type="text"
              placeholder="Add agenda or notes for the meeting..."
              value={form.note}
              name="note"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              opacity: loading ? 0.7 : 1,
              pointerEvents: loading ? "none" : "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              "Send Meeting Request"
            )}
          </button>
        </div>
      </ModalBox>
    </Overlay>
  );
};

export default MeetingModal;
