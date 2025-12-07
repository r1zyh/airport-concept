import { Container } from "../../shared/page-container";

export function MainPage() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  function toggleTheme() {
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <Container>
      <h1>Hello, i am Main Page!!!</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </Container>
  );
}
