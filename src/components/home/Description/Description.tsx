"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./Description.module.sass";

const PLACEHOLDER_IMAGE =
  "data:image/webp;base64,UklGRpwDAABXRUJQVlA4WAoAAAAgAAAAowAAowAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrgEAALAQAJ0BKqQApAA+bTaVSaQioiEgSZiADYlpbuBFagdxxmWpgvnP+MfoAoJn+wIsz+KMEJ5V5LRDmX1yrnD9xzhz8TnhZgqp09JzhHU04f9Ykax9gvwVfudBfHnIgRgIWQHfydVDaUw42uodcqv6UehqO+D407yFf+Yj4m8Ue8iZX37oVBrZwNCymhy3dggA/u+9bTBMlETXwWdTrKEHETJjw4m5tQ5ybsP+nXwm3tDVoFVaDkFIZ+EWzLxMqD1USjxB2s0xrBFQ4d+BjPfSMDJc7/7EHKfeLR36yv2gExvAwH1egQL3QL/LHocNZEeK4pORamP4klY/K/q8Zu2+YvcRXV3wvoLHy8rCQeOfViJztEjHUNcByhAuRoDyTuX2NpIa17gUgT3cln5cKypBdD6U0YSrPRg/x//pYg7RP9i/q3pSYdAneEUrT0oKFFYSiQMUPSWKdChzrmnEiRhSiXq5mIpKceN4K+JxU13yUF43psGSg3peHbgoqiG5xVW/NZo7rFg4dsPi0FMdvrl+s1XKG3RhExw7XEMr8q1uPcL+4tsuhqx9LcvoRo6soAA=";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => {
    setHasBorder(!hasBorder);
  };

  // const buttonStyles = classNames("button", { "button--border": hasBorder });
  const context = classNames.bind(styles);
  const buttonStyles = context("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
