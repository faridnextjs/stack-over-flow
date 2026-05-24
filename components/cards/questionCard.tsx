interface Props {
  question: Question;
}
const QuestionCard = ({
  question: {
    _id,
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
    <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
      {author.map(
        (item: { id: number; name: string; image?: string }) => item.name,
      )}
    </div>
  );
};
export default QuestionCard;
