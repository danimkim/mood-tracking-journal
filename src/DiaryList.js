import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = ({ diaryList, onDelete, onEdit }) => {
  return (
    <div className="diary-list-container">
      <h3 className="heading">일기 리스트</h3>
      <p>{diaryList.length}개의 일기가 있습니다.</p>
      <div className="container__diary-item">
        {diaryList.map((item) => {
          return (
            <DiaryItem
              key={item.id}
              {...item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DiaryList;
