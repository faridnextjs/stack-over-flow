import { getTimeStamp } from "@/lib/utils";
import TagCards from "@/components/cards/tagCards";

interface Props {
  question: Question;
}
const QuestionCard = ({
  question: {
    id,
    title,
    description,
    tags,
    author,
    upvotes,
    answers,
    views,
    createdAt,
  },
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <span className="subtle-regular text-dark400_light700 flex line-clamp-1 sm:hidden">
          {getTimeStamp(createdAt)}
        </span>
        <div className="base-semibold line-clamp-1 flex-1 text-dark200_light900 sm:h3-semibold">
          {title}
        </div>
      </div>
      <div className="flex w-full mt-3 5 flex-wrap gap-2">
        {tags.map((tag) => (
          <TagCards key={tag.id} id={tag.id} name={tag.name} compact />
        ))}
      </div>
    </div>
  );
};
export default QuestionCard;
