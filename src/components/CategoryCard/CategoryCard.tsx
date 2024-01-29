import ArrowIcon from "../../assets/ArrowIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import DragIcon from "../../assets/DragIcon";
import EditIcon from "../../assets/EditIcon";
import FolderIcon from "../../assets/FolderIcon";
import PlusIcon from "../../assets/PlusIcon";
import scss from "./categoryCard.module.scss";

interface CategoryCardProps {
  articleName: string;
}

const CategoryCard = ({ articleName }: CategoryCardProps) => {
  return (
    <div className={scss.cardContainer}>
      <div className={scss.collectionHeader}>
        <div className={scss.collectionTitle}>
          <div className={scss.iconsWrapper}>
            <ArrowIcon />
            <FolderIcon />
          </div>
          New Collection
        </div>
        <div className={scss.collectionActions}>
          <DeleteIcon /> <EditIcon />
        </div>
      </div>

      <div className={scss.articleItem}>
        <div className={scss.article}>
          <DragIcon />
          {articleName}
        </div>
        <div className={scss.articleActions}>
          <DeleteIcon /> <EditIcon />
        </div>
      </div>

      <div className={scss.addCollection}>
        <span className={scss.addCollectionButton}>
          Add New Collection <PlusIcon />
        </span>
        <p>Drag treeNode to insert after the other treeNode.</p>
      </div>
    </div>
  );
};

export default CategoryCard;
