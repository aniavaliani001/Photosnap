import Section1 from "./Section1/Section1.jsx";
import StoryCard from "./Section2/Section2.jsx";
import manOnBridge from "../assets/manonbridge.jpg";
import workspace from "../assets/workspace.jpg";
import manWithCamera from "../assets/manwithcamera.jpg";
import arrowWhite from "../assets/arrowicon.png";
import arrowDark from "../assets/arrowicondark.svg";
import mountainImg from "../assets/themountains.png";
import cityImg from "../assets/cityscapes.png";
import voyageImg from "../assets/voyage.png";
import archImg from "../assets/architecturals.png";

function Home() {
  return (
    <main>
      {/* 1. შავი სექცია ფერადი ხაზით */}
      <Section1 
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="GET AN INVITE"
        linkTo="/pricing"
        arrowicon={arrowWhite} 
        image={manOnBridge}
        theme="dark"
        hasLine={true}
        isReversed={false}
      />

      {/* 2. თეთრი სექცია, ფოტო მარცხნივ (reversed) */}
      <Section1 
        title="BEAUTIFUL STORIES EVERY TIME"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks."
        buttonText="VIEW THE STORIES"
        linkTo="/stories"
        arrowicon={arrowDark}
        image={workspace}
        theme="light"
        hasLine={false}
        isReversed={true}
      />

      {/* 3. თეთრი სექცია, ფოტო მარჯვნივ */}
      <Section1 
        title="DESIGNED FOR EVERYONE"
        description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        buttonText="VIEW THE STORIES"
        linkTo="/stories"
        arrowicon={arrowDark}
        image={manWithCamera}
        theme="light"
        hasLine={false}
        isReversed={false}
      />

    <section2 className="stories-grid">
        <StoryCard 
          image={mountainImg}
          title="The Mountains"
          author="John Appleseed"
          arrowicon={arrowWhite}
        />
        <StoryCard 
          image={cityImg}
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          arrowicon={arrowWhite}
        />
        <StoryCard 
          image={voyageImg}
          title="18 Days Voyage"
          author="Alexei Borodin"
          arrowicon={arrowWhite}
        />
        <StoryCard 
          image={archImg}
          title="Architecturals"
          author="Samantha Brooke"
          arrowicon={arrowWhite}
        />
      </section2>

    </main>
  );
}

export default Home;