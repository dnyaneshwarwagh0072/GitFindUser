const Repolist = ({ data }) => {
    // console.log(repo_data);
    return (
        <div className="card">
            <h2>Repositories :</h2>
            <ul>
                {data.map((ele, idx) => {
                    return (
                        <div className="repolinks">
                        <li id="link" key={idx}>
                            <a href={ele.html_url} target="_blank" rel="noreferrer" >
                                {ele.name}</a>
                        </li>
                        </div>
                    )
                })}
                {/* <h3>repo 1</h3> */}
                {/* <h3>repo 2</h3> */}
            </ul>
        </div>
    )
}
export default Repolist;