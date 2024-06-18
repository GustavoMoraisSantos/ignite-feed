/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/GustavoMoraisSantos.png"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Morais</strong>
              <time title="23 de maio às 8h13" dateTime="2024-05-23 08:12:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <div>
              <ThumbsUp />
              Aplaudir
              <span>20</span>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
}
