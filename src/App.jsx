import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego F" content={"Lorem aqui"}></Post>
          <Post author="Gustavo" content={"A vida é uma beleza!"}></Post>
        </main>
      </div>
    </>
  );
}
