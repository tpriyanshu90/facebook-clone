import { ChatAltIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import { session, useSession } from "next-auth/client";
import Image from "next/image";
import { db } from "../firebase";

const onLikeHandler = async (postId, email, likes) => {
  const likeSet = new Set(likes);
  if(likeSet.has(email)) {
    likeSet.delete(email);
  }
  else {
    likeSet.add(email);
  }
  await db.collection('posts').doc(postId).set({
      likes: [...likeSet]
  }, {merge: true});
}

function Post({ postId, name, image, postImage, message, email, timestamp, likes }) {
  const [session] = useSession();

  const isLikedByCurrentUser = () => {
    if(!likes) {
      likes=[]
    } 
    const likeSet = new Set(likes);
    return likeSet.has(session.user.email);
  }

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={name}
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleDateString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className={`inputIcon rounded-none rounded-bl-2xl ${isLikedByCurrentUser() ? "text-blue-500":""}`} onClick={() => onLikeHandler(postId, session.user.email, likes)}>
          <ThumbUpIcon className={`h-4 ${isLikedByCurrentUser() ? "fill-current":""}`}/>
          <p className="text-xs sm:text-base">Like {(likes && likes.length > 0)?likes.length:null}</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
