export default function Pledge({ name, minimum, description, rewardLeft }) {
  const rewardOutOfStock = Number(rewardLeft) <= 0;

  return (
    <div className={`pledge ${rewardOutOfStock ? "disabled" : ""}`}>
      <h3 className="h3-like">{name}</h3>
      <span className="h3-like minimum-required">
        Pledge ${minimum} or more
      </span>
      <p className="p-like">{description}</p>
      <div className="reward-left">
        <span>{rewardLeft}</span>
        <p className="p-like">left</p>
      </div>
      <button className={`button button-active button-text button-text-medium`}>
        {rewardOutOfStock ? "Out of stock" : "Selected Reward"}
      </button>
    </div>
  );
}
