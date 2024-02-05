import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import styles from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";
function Searchbar({ searchData }) {
  const [inputValue, setInputValue] = useState("");
  const [toggleAlbums, setToggleAlbums] = useState(false);
  const [searchedAblums, setSearchedAlbums] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const data = searchData.filter((album) =>
        album.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchedAlbums(data);
      data.length >= 0 && setToggleAlbums(true);
    }
  };

  useEffect(() => {
    inputValue.length === 0 && setToggleAlbums(false);
  }, [inputValue]);

  function Album({ id, image, title, follows }) {
    const history = useNavigate();
    const handleClick = () => {
      history(`songs/?albumId=${id}`);
      setInputValue("");
    };
    return (
      <div className={styles.albumWrapper} onClick={handleClick}>
        <img src={image} alt="album" />
        <div className={styles.album__text}>
          <p>{title}</p>
          <p>{follows} Follows</p>
        </div>
      </div>
    );
  }
  function SearchAlbums({ data }) {
    return (
      <div className={styles.wrapper}>
        {data && data.length > 0 ? (
          data.map((album) => (
            <Album
              key={album.id}
              id={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))
        ) : (
          <p className={styles.albumWrapper} style={{ color: "white" }}>
            No Data found!
          </p>
        )}
      </div>
    );
  }
  return (
    <div>
      <form className={styles.searchbar} onSubmit={onSubmit}>
        <input
          className={styles.searchbar__input}
          placeholder={"Search a album of your choice"}
          required
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.searchbar__button} type="submit">
          <SearchIcon />
        </button>
      </form>
      {toggleAlbums && <SearchAlbums data={searchedAblums} />}
    </div>
  );
}

export default Searchbar;
