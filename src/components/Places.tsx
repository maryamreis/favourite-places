// 4 places at least

import PlacesItem from "./PlacesItems";
import mapArray from "../data.json"

function Places(): JSX.Element{

    return(
        <section>
            {/* <PlacesItem 
                image = {"https://images.unsplash.com/photo-1611093672757-bcd5044ca065?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVsb3VyaW5ob3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
                title = {"Pelourinho"}
                location =  {{city: "Salvador", country: "Brazil", mapLink: "https://www.google.com/maps/place/Pelourinho,+Salvador+-+State+of+Bahia,+40301-110,+Brazil/@-12.9734955,-38.5186249,15z/data=!4m5!3m4!1s0x71604e7b38f66a7:0xb90fb09cf176ef24!8m2!3d-12.9736369!4d-38.5097201"}}
                content = {"The town of Pelourinho is the historic centre of Salvador."}
            /> */}
            {
                mapArray.map((placeObject) => (
                    <PlacesItem 
                    image = {placeObject.image}
                    title = {placeObject.title}
                    location = {placeObject.location}
                    content = {placeObject.content}
                    />
                ))
            }
        </section> 
    );
};

export default Places;