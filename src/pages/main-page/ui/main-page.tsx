import styles from "./main-page.module.scss";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "../../../shared/page-container/ui/page-container";
import { ButtonPrimary } from "../../../shared/button-primary/ui/button-primary";
import ButtonBase from "@mui/material/ButtonBase";

/** Главная страница приложения */
export function MainPage(): ReactNode {
  return (
    <Container size="narrow">
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>ДОМОДЕДОВО</h1>
        <ButtonBase title="Кнопка меню">
          <MenuIcon sx={{ cursor: "pointer" }} />
        </ButtonBase>
      </header>

      <section className={styles.searchSection}>
        <label htmlFor="search" className="visually-hidden">
          Поиск по номеру рейса или городу
        </label>
        <input
          id="search"
          type="text"
          name="search"
          className={styles.searchInput}
          placeholder="Flight number / City"
        />

        <ButtonPrimary text="Find" />
      </section>

      <section className={styles.navigationGrid}>
        <Link to="/arrival" className={styles.navigationCard}>
          <FlightLandIcon sx={{ color: "inherit" }} />
          <h3 className={styles.navigationCardTitle}>Прилет</h3>
        </Link>

        <Link to="/departure" className={styles.navigationCard}>
          <FlightTakeoffIcon />
          <h3 className={styles.navigationCardTitle}>Вылет</h3>
        </Link>

        <Link to="/transport" className={styles.navigationCard}>
          <DirectionsBusIcon />
          <h3 className={styles.navigationCardTitle}>Транспорт</h3>
        </Link>

        <Link to="/venues" className={styles.navigationCard}>
          <StoreIcon />
          <h3 className={styles.navigationCardTitle}>Магазины</h3>
        </Link>
      </section>

      <footer className={styles.pageFooter}>
        <div className={styles.footerColumn}>
          <span className={styles.footerLabel}>Контакты</span>

          <p>+7 495 933-66-66</p>
        </div>
        <div className={styles.footerColumn}>
          <span className={styles.footerLabel}>Часы работы</span>

          <p>05:00 – 00:30</p>
        </div>
        <div className={styles.footerColumn}>
          <span className={styles.footerLabel}>Соцсети</span>

          <p>Instagram · YouTube</p>
        </div>
      </footer>
    </Container>
  );
}
