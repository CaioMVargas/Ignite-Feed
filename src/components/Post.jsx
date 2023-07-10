import styles from "./Post.module";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/CaioMVargas.png"
          />
          <div className={styles.authorInfo}>
            <strong>Caio Vargas</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-07-07 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eum ab</p>
          <p>voluptatum nostrum vitae aliquid dicta, reiciendis itaque perferendis</p>
          <p> <a href=""> soluta numquam earum placeat alias. Reprehenderit deserunt dolore nemo</a></p>
          <p>laboriosam accusantium.</p>
        
      </div>
    </article>
  );
}
