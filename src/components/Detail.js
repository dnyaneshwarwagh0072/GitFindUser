import moment from 'moment';

const Detail = ({ data , changeVisibleComponent }) => {
    return (
        <div className="card ">
            <div className="detail">

                <div id="left-side-detail">
                    <img src={data.avatar_url} alt="profile" />
                    <button onClick={_=> changeVisibleComponent(1)}>{`followers : ${data.followers}`}</button>
                    <button onClick={_=> changeVisibleComponent(3)}>{`following : ${data.following}`}</button>
                </div>
                <div id="right-side-detail">
                    <h1>{`${data.name}`}</h1>
                    <h3>{`Username : $/{data.login}`}</h3>
                    <h3>username : <a href={data.html_url} target="_blank" rel="noreferrer">@{data.login}</a></h3>
                    <p>Member_since : {moment(data.created_at).fromNow()}</p>
                    <button onClick={_=> changeVisibleComponent(2)}>{`Uploaded repos : ${data.public_repos}`}</button>
                </div>
            </div>
            {/* <div className="buttons">
                <button>
                    {data.followers}
                    <span>Followers</span>
                </button>
                <button>
                    {data.public_repos}
                    <span>Repos</span>
                </button>
                <button>
                    {data.following}
                    <span>Following</span>
                </button>
            </div> */}


        </div>
    )
}
export default Detail;