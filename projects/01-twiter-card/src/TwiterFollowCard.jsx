import "./App.css";
export function TwiterFollowCard({formatUserName,name, username, isFollowing}){

    console.log(isFollowing)


    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${username}`} alt="el avatar de midudev" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(username)}</span>              
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    seguir
                </button>
            </aside>
        </article>
    )
}  