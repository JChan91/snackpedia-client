import Masonry from "react-masonry-css";
import Snack from "./Snack";

function SnackList({ snacks, category }) {
  let allSnack;

  if (snacks === undefined) {
    console.log(snacks);
    return <div>없어!</div>;
  } else {
    allSnack = snacks.map((snack) => {
      console.log(snack.snackThumbnailPath);
      return (
        <Snack
          id={snack.id}
          key={snack.id}
          image={snack.snackImage}
          path={snack.snackThumbnailPath}
        />
      );
    });
  }

  const breakpointColumnsObj = {
    default: 4,
    1660: 5,
    1310: 4,
    1025: 3,
  };
  return (
    <div>
      {allSnack.length ? (
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {allSnack}
          </Masonry>
        </div>
      ) : (
        <div>없어</div>
      )}
    </div>
  );
}

export default SnackList;
