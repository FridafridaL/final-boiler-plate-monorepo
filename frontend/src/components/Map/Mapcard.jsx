import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Mapcard = () => {
  // eslint-disable-next-line no-undef
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(id);

  // Calling fetch
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_BACKEND_API || "http://localhost:3000";
    fetch(`${apiUrl}/stories/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStory(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching story:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div className="story-card-list">
      <div className="story-cards">
        {story.image && (
          <div className="story-image">
            <img src={`/${story.image}`} alt={`${story.city} story`} />
          </div>
        )}
        <div className="story-footer">
          {/* You can add like icon here if needed */}
          <span className="like-count">{story.ranking}</span>
        </div>
      </div>
      <div className="story-content">
        <div className="story-info">
          <h3>{story.title}</h3>
        </div>
        <p>{story.content}</p>
      </div>
    </div>
  );
};

//   return (
//     <div className="story-card-list">
//       <div className="story-cards">
//         <div className="story-image">
//           {/* <img src={`/${story.image}`} alt={`${story.city} story`} /> */}
//         </div>
//         <div className="story-footer">
//           {/* <img className="like-icon" src={likeIcon} alt="Like" /> */}
//           <span className="like-count">0</span>
//         </div>
//       </div>
//       <div className="story-content">
//         <div className="story-info">
//           <h3>Sandra Gustafsson</h3>
//         </div>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem
//           consequuntur ullam magnam maxime nisi numquam nemo inventore minus
//           possimus.
//         </p>
//       </div>
//     </div>
//   );
// };

// <div key={story._id} className="story-card-list">
// <div className="story-cards">
//   <div className="story-image">
//     <img src={`/${story.image}`} alt={`${story.city} story`} />
//   </div>
//   <div className="story-footer">
//     {timeSince(story.createdAt)}
//     <img className="like-icon" src={likeIcon} alt="Like" />
//     <span className="like-count">{story.ranking}</span>
//   </div>
// </div>
// <div className="story-content">
//   <div className="story-info">
//     <h3>
//       {story.category} - {story.city}
//     </h3>
//   </div>
//   <p>{story.content}</p>
// </div>
// </div>
