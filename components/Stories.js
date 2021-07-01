import StoryCard from "./StoryCard";

function Stories() {
  const stories = [
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      profile: "https://links.papareact.com/kxk",
      src: "https://links.papareact.com/zvy",
      name: "Bill Gates",
    },
    {
      src: "https://links.papareact.com/snf",
      name: "Mark",
      profile: "https://links.papareact.com/kxk",
    },
    {
      src: "https://links.papareact.com/d0c",
      name: "Harry Potter",
      profile: "https://links.papareact.com/kxk",
    },
    {
      src: "https://links.papareact.com/r57",
      name: "James Bond",
      profile: "https://links.papareact.com/kxk",
    },
  ];
  return (
    <div className="flex justify-center flex-grow space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
