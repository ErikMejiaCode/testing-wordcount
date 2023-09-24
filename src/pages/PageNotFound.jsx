import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/notfound.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-testid="pnfText">Oops! - Page Not Found!</p>
          <img src={PageNotFoundImage} alt="Page not found" />
          <Link to="/">
            <button data-testid="homeBtn">Go back to Work Counter</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
