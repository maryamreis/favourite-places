// 4 places at least

import PlacesItem from "./PlacesItems";

function Places(): JSX.Element{
    return(
        <section>
            <PlacesItem 
                image = {"https://images.unsplash.com/photo-1611093672757-bcd5044ca065?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVsb3VyaW5ob3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
                title = {"Pelourinho"}
                location =  {{city: "Salvador", country: "Brazil", mapLink: "https://www.google.com/maps/place/Pelourinho,+Salvador+-+State+of+Bahia,+40301-110,+Brazil/@-12.9734955,-38.5186249,15z/data=!4m5!3m4!1s0x71604e7b38f66a7:0xb90fb09cf176ef24!8m2!3d-12.9736369!4d-38.5097201"}}
                content = {"The town of Pelourinho is the historic centre of Salvador."}
            />

            <PlacesItem 
                image = {"https://images.unsplash.com/photo-1612984125912-a162c9df3b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG93bGF0JTIwYWJhZCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
                title = {"Dowlat Abad Garden"}
                location =  {{city: "Yazd", country: "Iran", mapLink: "https://www.google.com/maps/place/Dowlat+Abad+Garden/@31.9032181,54.3496348,17z/data=!3m1!4b1!4m5!3m4!1s0x3fa619f729173ee9:0xfcd4e22d7c605a4d!8m2!3d31.9032181!4d54.3518235"}}
                content = {"One of the 9 Persian gardens registered by UNESCO."}
            />
            <PlacesItem 
                image = {"https://images.unsplash.com/photo-1573419650069-e9d06c0e4937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29ycmVudG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
                title = {"Sorrento"}
                location =  {{city: "Naples", country: "Italy", mapLink: "https://www.google.com/maps?q=sorrento&safe=strict&rlz=1C5CHFA_enGB844GB844&sxsrf=ALeKk02i2Kod3BLaEUX8-UWnaroDcI3iMQ:1624014729620&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QsQMQQxCTAjIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIICC4QxwEQrwE6BwgAEEcQsAM6BwgAELADEEM6DQguELADEMgDEEMQkwI6CgguELADEMgDEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6BAguEEM6BwguELEDEEM6BwgAELEDEEM6AgguOgUILhCxA0oFCDgSATFQshNYqzFgnDtoBHACeACAAWOIAY8GkgEBOZgBAKABAaoBB2d3cy13aXqwAQrIAQ_AAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwif0oCthqHxAhUpwAIHHaQqCAYQ_AUoAnoECAEQBA"}}
                content = {"Sorrento is a beautiful Italian coastal town."}
            />
            <PlacesItem 
                image = {"https://images.unsplash.com/photo-1615220682071-7e29fe3589b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWJ1ZCUyMG1vbmtleXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
                title = {"Ubud Sacred Monkey Forest Sanctuary"}
                location =  {{city: "Bali", country: "Indonesia", mapLink: "https://www.google.com/maps?q=ubud+sacred+monkey+forest&bih=698&biw=1270&hl=en-US&gs_lcp=Cgdnd3Mtd2l6EAEYADILCC4QxwEQrwEQkwIyBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BwgAEEcQsAM6BAgAEEM6CgguEMgDEEMQkwI6BwguEMgDEEM6BQguEJMCOgIIADoICC4QxwEQrwE6AgguSgUIOBIBMVCRvAFYhsMBYMnJAWgBcAJ4AIABTIgBuwOSAQE4mAEAoAEBqgEHZ3dzLXdpesgBD8ABAQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwim-PykoqHxAhWLAcAKHV9NAdgQ_AUoAXoECAEQAw"}}
                content = {"A forest and sanctuary full of monkeys! What's not to love!"}
            />
        </section>
        
    );
};

export default Places;