import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople]= useState([
        {
            name: 'Joe Mettle',
            url: 'https://cdn.modernghana.com/story_/1024/728/86202014148-8cs1vihuup-joe-mettle.jpg',

        },
        {
            name: 'Travis Greene',
            url: 'https://mtracks.azureedge.net/public/images/artists/cover/512/717.jpg'
        },
        {
            name: 'Parris Chariz',
            url: 'https://i0.wp.com/respect-mag.com/wp-content/uploads/2020/02/artist-31461.jpeg?resize=640%2C457&ssl=1'
        },
        {
            name: 'Marintia Goto-Williams',
            url: 'https://pbs.twimg.com/profile_images/1204290471700373505/TO1wSeSz_400x400.jpg'
        },
        {
            name: 'Drake',
            url: 'https://variety.com/wp-content/uploads/2019/05/drake-raptor.jpg'
        },
    ]);

    const swiped= (direction, nameToDelete)=>{
        console.log("removing:"+nameToDelete);
    };

    const outOfFrame=(name)=>{
        console.log(name+ ' left the screen');
    }
    return (
        <div className="tinderCards">
            <div className='tinderCards_cardContainer'>
                {people.map((person=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={'up','down'}
                        onSwipe={(dir)=>swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}>

                            <div
                                style={{backgroundImage: `url(${person.url})`}}
                                className='card'
                                >
                                    <h3>{person.name}</h3>
                            </div>

                    </TinderCard>
                )))}

            </div>
        </div>
    )
}

export default TinderCards
