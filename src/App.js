import "./App.css";
import swal from "sweetalert";

export default function App() {
  let allCards = document.querySelectorAll(".card");

  allCards.forEach((element) => {
    element.addEventListener("click", () => {
      swal({
        text: 'Search for a movie. e.g. "La La Land".',
        content: "input",
        button: {
          text: "Search!",
          closeModal: false
        }
      })
        .then((name) => {
          if (!name) throw null;

          return fetch(
            `https://itunes.apple.com/search?term=${name}&entity=movie`
          );
        })
        .then((results) => {
          return results.json();
        })
        .then((json) => {
          const movie = json.results[0];

          if (!movie) {
            return swal("No movie was found!");
          }

          const name = movie.trackName;
          const imageURL = movie.artworkUrl100;

          swal({
            title: "Top result:",
            text: name,
            icon: imageURL
          });
        })
        .catch((err) => {
          if (err) {
            swal("Oh noes!", "The AJAX request failed!", "error");
          } else {
            swal.stopLoading();
            swal.close();
          }
        });
    });
  });

  return (
    <div className="App">
      <h1>Welcome to our website</h1>

      <div className="cards">
        <div className="Row">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
        </div>
        <div className="Row">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
        </div>
      </div>
    </div>
  );
}
