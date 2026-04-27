import StoryCard from "../../Home/Section2/Section2.jsx";
import "./Storiessection2.css";

import arrowWhite from "../../assets/arrowicon.png";
import mountainImg from "../../assets/themountains.png";
import cityImg from "../../assets/cityscapes.png";
import voyageImg from "../../assets/voyage.png";
import archImg from "../../assets/architecturals.png";
import worldtourImg from "../../assets/worldtour.png";
import unforseenImg from "../../assets/unforeseen.png";
import kinglionImg from "../../assets/kinglion.png";
import triptonowhereImg from "../../assets/triptonowhere.png";
import rageoftheseaImg from "../../assets/rageofthesea.png";
import runningfreeImg from "../../assets/runningfree.png";
import behindwavesImg from "../../assets/behindthewaves.png";
import calmwatersImg from "../../assets/calmwaters.png";
import milkywayImg from "../../assets/milkyway.png";
import darkforestImg from "../../assets/nightatdarkforest.png";
import somwarpetImg from "../../assets/somwarpetsbeauty.png";
import landofdreamsImg from "../../assets/landofdreams.png";

function Storiessection2() {
  return (
    <section className="stories-all-grid">
      <StoryCard
        image={mountainImg}
        title="The Mountains"
        author="John Appleseed"
        date="April 16th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={cityImg}
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        date="April 14th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={voyageImg}
        title="18 Days Voyage"
        author="Alexei Borodin"
        date="April 11th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={archImg}
        title="Architecturals"
        author="Samantha Brooke"
        date="April 9th 2020"
        arrowicon={arrowWhite}
      />

      <StoryCard
        image={worldtourImg}
        title="World Tour 2019"
        author="Timothy Wagner"
        date="April 7th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={unforseenImg}
        title="Unforeseen Corners"
        author="William Malcolm"
        date="April 3rd 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={kinglionImg}
        title="King on Africa: Part II"
        author="Tim Hillenburg"
        date="March 29th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={triptonowhereImg}
        title="The Trip to Nowhere"
        author="Felicia Rourke"
        date="March 21st 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={rageoftheseaImg}
        title="Rage of The Sea"
        author="Mohammed Abdul"
        date="March 19th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={runningfreeImg}
        title="Running Free"
        author="Michelle"
        date="March 16th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={behindwavesImg}
        title="Behind the Waves"
        author="Lamarr Wilson"
        date="March 11th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={calmwatersImg}
        title="Calm Waters"
        author="Samantha Brooke"
        date="March 9th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={milkywayImg}
        title="The Milky Way"
        author="Benjamin Cruz"
        date="March 5th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={darkforestImg}
        title="Night at The Dark Forest"
        author="by  Mohammed Abdul"
        date="March 4th 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={somwarpetImg}
        title="Somwarpet’s Beauty"
        author="Michelle"
        date="March 1st 2020"
        arrowicon={arrowWhite}
      />
      <StoryCard
        image={landofdreamsImg}
        title="Land of Dreams"
        author="William Malcolm"
        date="February 25th 2020"
        arrowicon={arrowWhite}
      />
    </section>
  );
}

export default Storiessection2;
