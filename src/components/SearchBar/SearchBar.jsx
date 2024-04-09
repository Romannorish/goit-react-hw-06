import {changeFilter} from "../../redux/filterSlice"
import {selectNameFilter} from "../../selectors/selectors"
import css from "./SearchBar.module.css"
import {useDispatch, useSelector} from "react-redux"
export default function SearchBar() {
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)
  return (
    <form className={css.formBox}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          placeholder="user name"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </form>
  )
}