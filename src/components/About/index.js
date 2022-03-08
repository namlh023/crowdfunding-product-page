import Pledge from "./Pledge";

export default function About({ pledges }) {
  return (
    <section className="about">
      <h2 className="h2-like">About this project</h2>
      <p className="p-like">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="pledges">
        {pledges.map((pledge, index) => {
          return (
            <Pledge
              key={index}
              name={pledge.name}
              minimum={pledge.minimum}
              description={pledge.description}
              rewardLeft={pledge.rewardLeft}
            />
          );
        })}
      </div>
    </section>
  );
}
