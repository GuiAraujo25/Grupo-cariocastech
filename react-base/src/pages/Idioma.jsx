import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";
const Idioma = () => (
  <Base>
    <ListContainer>
      <form>
        <button type="submit">Inglês</button>
      </form>
      <form>
      <button type="submit">Português</button>
      </form>
    </ListContainer>
  </Base>
);

export default Idioma;
