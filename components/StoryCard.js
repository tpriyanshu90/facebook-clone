import Image from "next/image";

function StoryCard({src, profile, name}) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 filter hover:brightness-110 transition duration-150 transform md:hover:scale-105 lg:hover:scale-105 cursor-pointer">
            <Image
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
            />
            <Image
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            />
        </div>
    )
}

export default StoryCard
