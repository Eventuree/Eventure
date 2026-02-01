import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard.jsx";
import styles from "./MyEvents.module.css";
import { getCreatedEvents } from "../../server/api";
import { useAuth } from "../../context/AuthContext";

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchEvents = async () => {
      try {
        setLoading(true);

        const token = sessionStorage.getItem("access_token");

        const data = await getCreatedEvents(user.id, token);

        setEvents(data);
      } catch (err) {
        console.error("Помилка завантаження подій:", err);
        setError("Не вдалося завантажити події");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  if (loading) return <div className={styles.pageWrapper}>Завантаження...</div>;
  if (error) return <div className={styles.pageWrapper}>{error}</div>;

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Мої івенти</h1>

      {events.length > 0 ? (
        <div className={styles.eventsContainer}>
          {events.map((event) => (
            <div key={event.id}>
              <EventCard
                id={event.id}
                bannerPhotoUrl={event.bannerPhotoUrl}
                title={event.title}
                date={event.eventDate}
                location={event.location}
                organizerId={event.organizerId}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>Ви ще не створили жодної події.</div>
      )}
    </div>
  );
}
