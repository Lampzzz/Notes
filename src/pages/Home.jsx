import { FaTrashAlt } from "react-icons/fa";

const Home = ({ notes }) => {
  return (
    <main>
      <section>
        {notes.length ? (
          notes.map((note) => (
            <article key={notes.id}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <div className="notes__meta">
                <p>{note.datetime}</p>
                <button>
                  <FaTrashAlt />
                </button>
              </div>
            </article>
          ))
        ) : (
          <h1>
            No notes found. Start creating your first note to keep track of your
            thoughts and ideas!
          </h1>
        )}
      </section>
    </main>
  );
};

export default Home;
