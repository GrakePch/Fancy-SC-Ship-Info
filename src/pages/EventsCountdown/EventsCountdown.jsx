import { useEffect, useState } from "react";

import en_us from "../../assets/i18n/en_us.json";
import I18n from "../../components/I18n";
import eventsData from "../../data/events_data.json";
import eventIcons from "../../assets/event_icons/eventIcons";
import "./EventsCountdown.css";

function daysUntil(targetDate) {
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();

  // Convert milliseconds to days
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
}

const EventsCountdown = () => {
  const lang = localStorage.getItem("lang");
  const [todayDate, setTodayDate] = useState(1);
  const [todayMonth, setTodayMonth] = useState(1);
  const [todayYear, setTodayYear] = useState(2000);

  useEffect(() => {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth() + 1;
    let y = today.getFullYear();
    setTodayDate(d);
    setTodayMonth(m);
    setTodayYear(y);

    for (const event of eventsData) {
      const targetDate = new Date(
        `${y}-${event.Start.slice(0, 2)}-${event.Start.slice(2)}`,
      );
      const daysToStartThisYear = daysUntil(targetDate);
      const targetDate2 = new Date(
        `${y + 1}-${event.Start.slice(0, 2)}-${event.Start.slice(2)}`,
      );
      const daysToStartNextYear = daysUntil(targetDate2);
      event.Day =
        daysToStartThisYear > 0 ? daysToStartThisYear : daysToStartNextYear;

      const targetDateEnd = new Date(
        `${y}-${event.End.slice(0, 2)}-${event.End.slice(2)}`,
      );
      const daysToEndThisYear = daysUntil(targetDateEnd);
      event.InEvent = daysToEndThisYear > 0 && daysToStartThisYear <= 0;
    }
  }, [eventsData]);
  return (
    <>
      {/* <h1>
        {todayYear}-{todayMonth}-{todayDate}
      </h1> */}
      <div className="grid3">
        {eventsData
          .sort((a, b) => (a.InEvent ? -Infinity : b.InEvent? Infinity : a.Day - b.Day))
          .map((item) => (
            <div className="event-card" key={item.Name}>
              <div className="event-icon" style={{backgroundImage: `url(${eventIcons[item.Name]})`}}></div>
              <p className="event-title">
                <I18n text={"Event-" + item.Name} />
              </p>
              <p className="event-title-en">{en_us["Event-" + item.Name]}</p>
              <p className="event-start-end">
                {item.Start.slice(0, 2)}/{item.Start.slice(2)} -{" "}
                {item.End.slice(0, 2)}/{item.End.slice(2)}
              </p>
              {item.InEvent ? (
                <p className="event-status active">活动进行中</p>
              ) : 
              (
                <p className={`event-status ${item.Day < 30 ? "active" : null}`}>{item.Day}天</p>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default EventsCountdown;
