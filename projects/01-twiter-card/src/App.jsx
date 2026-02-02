import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard";

export function App(){

    const formatUserName=(username)=>`@${username}`;

    return(
        <section className="App">
            <TwiterFollowCard 
                isFollowing 
                formatUserName={formatUserName} 
                username="midudev" 
                name="Miguel Ángel Durán" 
            />

            <TwiterFollowCard 
                isFollowing={false} 
                formatUserName={formatUserName} 
                username="Victor_Rod_Bonn" 
                name="Victor Rodriguez Bon"
            />
        </section>
    )
}  