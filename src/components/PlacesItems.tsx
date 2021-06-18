// Place entry should have:
    // a title (text)
    // a place name (text)
    // a country name (text)
    // a main image (URL)
    // a link to the rough location on google maps (or alternative) (URL)
    // some text explaining why you like the place



interface PlacesItemProps {
    image: string;
    title: string;
    location: {city: string; country: string; mapLink: string;};
    content: string;
}
    
function PlacesItem(props: PlacesItemProps): JSX.Element {
    return (
        <section>
            <p>
                <img src= {props.image} alt = ""  width = "500" />
            </p>
            <h1>
                {props.title}
            </h1>
            <h3>
                {props.location.city}, {props.location.country} <a href= {props.location.mapLink}>(map link)</a>
            </h3>
            <p>
                {props.content}
            </p>
    
        </section>
    );
}
    
export default PlacesItem;