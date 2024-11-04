import "./DescriptionListItem.css";

const DescriptionListItem = ({ label, value }) => {
  return (
    <>
      <dt className="description-list__label">{label}</dt>
      <dd className="description-list__value">{value}</dd>
    </>
  );
};

export default DescriptionListItem;
