import React from 'react'
import EventsHeroCompo from '../../Components/events-page-components/EventsHeroCompo'

export default function EventsPage() {
    const events = [
        {
          id: 1,
          title: "Cultural Heritage Exhibition",
          description: "An exhibition showcasing Afghanistan's rich cultural heritage.",
          date: "2024-10-15", // upcoming event
          image: "https://images.unsplash.com/photo-1566731372839-859e7cead0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 2,
          title: "Historical Museum Tour",
          description: "A guided tour of the National Museum of Afghanistan.",
          date: "2024-08-10", // past event
          image: "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 3,
          title: "Afghan Arts and Crafts Fair",
          description: "A vibrant fair celebrating local Afghan artists and craftspeople.",
          date: "2024-12-20", // upcoming event
          image: "https://images.unsplash.com/photo-1506845347893-bc5faede1eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 4,
          title: "Historic Manuscripts Exhibition",
          description: "A rare collection of historic Afghan manuscripts on display.",
          date: "2024-06-25", // past event
          image: "https://media.istockphoto.com/id/1399195000/photo/mother-and-daughter-in-art-gallery.webp?a=1&b=1&s=612x612&w=0&k=20&c=iJHjsZgKKxxecSe_fyjOdw6ML3DZB2FEZHUStIXLpBk=",
        },
        {
            id: 5,
            title: "Historical Museum Tour",
            description: "A guided tour of the National Museum of Afghanistan.",
            date: "2024-08-10", // past event
            image: "https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id: 6,
            title: "Afghan Arts and Crafts Fair",
            description: "A vibrant fair celebrating local Afghan artists and craftspeople.",
            date: "2024-12-20", // upcoming event
            image: "https://images.unsplash.com/photo-1506845347893-bc5faede1eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id: 7,
            title: "Afghan Arts and Crafts Fair",
            description: "A vibrant fair celebrating local Afghan artists and craftspeople.",
            date: "2024-12-20", // upcoming event
            image: "https://images.unsplash.com/photo-1506845347893-bc5faede1eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2V1bXxlbnwwfHwwfHx8MA%3D%3D",
          },
      ];
  return (
    <>
    <EventsHeroCompo events={events} />
    </>
  )
}
