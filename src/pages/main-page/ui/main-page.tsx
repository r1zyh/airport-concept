import React from "react";
import { Container } from "../../../shared/page-container/ui/page-container";
import { Link } from "@tanstack/react-router";
import styles from "./main-page.module.scss";

export function MainPage(): React.ReactNode {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <img
          className="header__logo"
          src="/src/assets/DME.png"
          width={64}
          height={64}
          alt="DME logo"
        />
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className="navigation__item">
              <Link to="/">МОЕ ПУТЕШЕСТВИЕ</Link>
            </li>
            <li className="navigation__item">
              <Link to="/departure">ВЫЛЕТ</Link>
            </li>
            <li className="navigation__item">
              <Link to="/arrival">ПРИЛЕТ</Link>
            </li>
            <li className="navigation__item">git 
              <Link to="/transfer">ПЕРЕСАДКА</Link>
            </li>
            <li className="navigation__item">
              <Link to="/transport">ТРАНСПОРТ</Link>
            </li>
            <li className="navigation__item">
              <Link to="/parking">ПАРКОВКА</Link>
            </li>
            <li className="navigation__item">
              <Link to="/airport-guide">ГИД ПО АЭРОПОРТУ</Link>
            </li>
            <li className="navigation__item">
              <Link to="/venues">МАГАЗИНЫ И КАФЕ</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Container>
        <h1>Hello, i am Main Page!!!</h1>
      </Container>
    </React.Fragment>
  );
}
