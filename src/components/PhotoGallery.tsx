export function PhotoGallery() {
  return (
    <section className="photo-gallery">
      <h2>A little more about me</h2>

      <div className="photo-gallery-grid">
        <figure>
          <img src="/dinner-award.jpg" alt="Dinner award in Qatar" />
          <figcaption>
            Dinner Award recognition with Trader Vic's in Qatar
          </figcaption>
        </figure>

        <figure>
          <img src="/soccer.jpg" alt="Soccer coach photo" />
          <figcaption>Soccer coach for my son's team</figcaption>
        </figure>

        <figure>
          <img
            src="/travel.JPG"
            alt="Travel photo in Yellowstone National Park"
            loading="lazy"
          />
          <figcaption>
            Three-month road trip across the United States on a Harley-Davidson
          </figcaption>
        </figure>
      </div>
    </section>
  );
}